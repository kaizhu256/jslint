"use strict";

/**
 * Compares two script coverages.
 *
 * The result corresponds to the comparison of their `url` value
 * (alphabetical sort).
 */
function compareScriptCovs(a, b) {
    if (a.url === b.url) {
        return 0;
    }
    else if (a.url < b.url) {
        return -1;
    }
    else {
        return 1;
    }
}
/**
 * Compares two function coverages.
 *
 * The result corresponds to the comparison of the root ranges.
 */
function compareFunctionCovs(a, b) {
    return compareRangeCovs(a.ranges[0], b.ranges[0]);
}
/**
 * Compares two range coverages.
 *
 * The ranges are first ordered by ascending `startOffset` and then by
 * descending `endOffset`.
 * This corresponds to a pre-order tree traversal.
 */
function compareRangeCovs(a, b) {
    if (a.startOffset !== b.startOffset) {
        return a.startOffset - b.startOffset;
    }
    else {
        return b.endOffset - a.endOffset;
    }
}
/**
 * Normalizes a process coverage.
 *
 * Sorts the scripts alphabetically by `url`.
 * Reassigns script ids: the script at index `0` receives `"0"`, the script at
 * index `1` receives `"1"` etc.
 * This does not normalize the script coverages.
 *
 * @param processCov Process coverage to normalize.
 */
function normalizeProcessCov(processCov) {
    processCov.result.sort(compareScriptCovs);
    processCov.forEach(function ([
        scriptId, scriptCov
    ]) {
        scriptCov.scriptId = scriptId.toString(10);
    });
}
/**
 * Normalizes a process coverage deeply.
 *
 * Normalizes the script coverages deeply, then normalizes the process coverage
 * itself.
 *
 * @param processCov Process coverage to normalize.
 */
function deepNormalizeProcessCov(processCov) {
    processCov.result.forEach(function(scriptCov) {
        deepNormalizeScriptCov(scriptCov);
    });
    normalizeProcessCov(processCov);
}
/**
 * Normalizes a script coverage.
 *
 * Sorts the function by root range (pre-order sort).
 * This does not normalize the function coverages.
 *
 * @param scriptCov Script coverage to normalize.
 */
function normalizeScriptCov(scriptCov) {
    scriptCov.functions.sort(compareFunctionCovs);
}
/**
 * Normalizes a script coverage deeply.
 *
 * Normalizes the function coverages deeply, then normalizes the script coverage
 * itself.
 *
 * @param scriptCov Script coverage to normalize.
 */
function deepNormalizeScriptCov(scriptCov) {
    scriptCov.functions.forEach(function(funcCov) {
        normalizeFunctionCov(funcCov);
    });
    normalizeScriptCov(scriptCov);
}
/**
 * Normalizes a function coverage.
 *
 * Sorts the ranges (pre-order sort).
 * TODO: Tree-based normalization of the ranges.
 *
 * @param funcCov Function coverage to normalize.
 */
function normalizeFunctionCov(funcCov) {
    funcCov.ranges.sort(compareRangeCovs);
    const tree = range_tree_1.RangeTree.fromSortedRanges(funcCov.ranges);
    normalizeRangeTree(tree);
    funcCov.ranges = tree.toRanges();
}
/**
 * @internal
 */
function normalizeRangeTree(tree) {
    tree.normalize();
}

class RangeTree {
    constructor(start, end, delta, children) {
        this.start = start;
        this.end = end;
        this.delta = delta;
        this.children = children;
    }
    /**
     * @precodition `ranges` are well-formed and pre-order sorted
     */
    static fromSortedRanges(ranges) {
        let root;
        // Stack of parent trees and parent counts.
        const stack = [];
        ranges.forEach(function(range) {
            const node = new RangeTree(range.startOffset, range.endOffset, range.count, []);
            if (root === undefined) {
                root = node;
                stack.push([node, range.count]);
                return;
            }
            let parent;
            let parentCount;
            while (true) {
                [parent, parentCount] = stack[stack.length - 1];
                // assert: `top !== undefined` (the ranges are sorted)
                if (range.startOffset < parent.end) {
                    break;
                }
                else {
                    stack.pop();
                }
            }
            node.delta -= parentCount;
            parent.children.push(node);
            stack.push([node, range.count]);
        });
        return root;
    }
    normalize() {
        const children = [];
        let curEnd;
        let head;
        const tail = [];
        this.children.forEach(function(child) {
            if (head === undefined) {
                head = child;
            }
            else if (child.delta === head.delta && child.start === curEnd) {
                tail.push(child);
            }
            else {
                endChain();
                head = child;
            }
            curEnd = child.end;
        });
        if (head !== undefined) {
            endChain();
        }
        if (children.length === 1) {
            const child = children[0];
            if (child.start === this.start && child.end === this.end) {
                this.delta += child.delta;
                this.children = child.children;
                // `.lazyCount` is zero for both (both are after normalization)
                return;
            }
        }
        this.children = children;
        function endChain() {
            if (tail.length !== 0) {
                head.end = tail[tail.length - 1].end;
                tail.forEach(function(tailTree) {
                    tailTree.children.forEach(function(subChild) {
                        subChild.delta += tailTree.delta - head.delta;
                        head.children.push(subChild);
                    });
                });
                tail.length = 0;
            }
            head.normalize();
            children.push(head);
        }
    }
    /**
     * @precondition `tree.start < value && value < tree.end`
     * @return RangeTree Right part
     */
    split(value) {
        let ii = 0;
        let leftChildLen = this.children.length;
        let mid;
        // TODO(perf): Binary search (check overhead)
        while (ii < this.children.length) {
            const child = this.children[ii];
            if (child.start < value && value < child.end) {
                mid = child.split(value);
                leftChildLen = ii + 1;
                break;
            }
            else if (child.start >= value) {
                leftChildLen = ii;
                break;
            }
            ii += 1;
        }
        const rightLen = this.children.length - leftChildLen;
        const rightChildren = this.children.splice(leftChildLen, rightLen);
        if (mid !== undefined) {
            rightChildren.unshift(mid);
        }
        const result = new RangeTree(value, this.end, this.delta, rightChildren);
        this.end = value;
        return result;
    }
    /**
     * Get the range coverages corresponding to the tree.
     *
     * The ranges are pre-order sorted.
     */
    toRanges() {
        const ranges = [];
        // Stack of parent trees and counts.
        const stack = [[this, 0]];
        while (stack.length > 0) {
            const [cur, parentCount] = stack.pop();
            const count = parentCount + cur.delta;
            ranges.push({ startOffset: cur.start, endOffset: cur.end, count });
            let ii = cur.children.length - 1;
            while (ii >= 0) {
                stack.push([cur.children[ii], count]);
                ii -= 1;
            }
        }
        return ranges;
    }
}

/**
 * Merges a list of process coverages.
 *
 * The result is normalized.
 * The input values may be mutated, it is not safe to use them after passing
 * them to this function.
 * The computation is synchronous.
 *
 * @param processCovs Process coverages to merge.
 * @return Merged process coverage.
 */
function mergeProcessCovs(processCovs) {
    if (processCovs.length === 0) {
        return { result: [] };
    }
    else if (processCovs.length === 1) {
        const merged = processCovs[0];
        deepNormalizeProcessCov(merged);
        return merged;
    }
    const urlToScripts = new Map();
    processCovs.forEach(function(processCov) {
        processCov.result.forEach(function(scriptCov) {
            let scriptCovs = urlToScripts.get(scriptCov.url);
            if (scriptCovs === undefined) {
                scriptCovs = [];
                urlToScripts.set(scriptCov.url, scriptCovs);
            }
            scriptCovs.push(scriptCov);
        });
    });
    const result = [];
    urlToScripts.values().forEach(function(scripts) {
        // assert: `scripts.length > 0`
        result.push(mergeScriptCovs(scripts));
    });
    const merged = { result };
    normalizeProcessCov(merged);
    return merged;
}
/**
 * Merges a list of matching script coverages.
 *
 * Scripts are matching if they have the same `url`.
 * The result is normalized.
 * The input values may be mutated, it is not safe to use them after passing
 * them to this function.
 * The computation is synchronous.
 *
 * @param scriptCovs Process coverages to merge.
 * @return Merged script coverage, or `undefined` if the input list was empty.
 */
function mergeScriptCovs(scriptCovs) {
    if (scriptCovs.length === 0) {
        return undefined;
    }
    else if (scriptCovs.length === 1) {
        const merged = scriptCovs[0];
        deepNormalizeScriptCov(merged);
        return merged;
    }
    const first = scriptCovs[0];
    const scriptId = first.scriptId;
    const url = first.url;
    const rangeToFuncs = new Map();
    scriptCovs.forEach(function(scriptCov) {
        scriptCov.functions.forEach(function(funcCov) {
            const rootRange = stringifyFunctionRootRange(funcCov);
            let funcCovs = rangeToFuncs.get(rootRange);
            if (funcCovs === undefined ||
                // if the entry in rangeToFuncs is function-level granularity and
                // the new coverage is block-level, prefer block-level.
                (!funcCovs[0].isBlockCoverage && funcCov.isBlockCoverage)) {
                funcCovs = [];
                rangeToFuncs.set(rootRange, funcCovs);
            }
            else if (funcCovs[0].isBlockCoverage && !funcCov.isBlockCoverage) {
                // if the entry in rangeToFuncs is block-level granularity, we should
                // not append function level granularity.
                return;
            }
            funcCovs.push(funcCov);
        });
    });
    const functions = [];
    rangeToFuncs.values().forEach(function(funcCovs) {
        // assert: `funcCovs.length > 0`
        functions.push(mergeFunctionCovs(funcCovs));
    });
    const merged = { scriptId, url, functions };
    normalizeScriptCov(merged);
    return merged;
}
/**
 * Returns a string representation of the root range of the function.
 *
 * This string can be used to match function with same root range.
 * The string is derived from the start and end offsets of the root range of
 * the function.
 * This assumes that `ranges` is non-empty (true for valid function coverages).
 *
 * @param funcCov Function coverage with the range to stringify
 * @internal
 */
function stringifyFunctionRootRange(funcCov) {
    const rootRange = funcCov.ranges[0];
    return `${rootRange.startOffset.toString(10)};${rootRange.endOffset.toString(10)}`;
}
/**
 * Merges a list of matching function coverages.
 *
 * Functions are matching if their root ranges have the same span.
 * The result is normalized.
 * The input values may be mutated, it is not safe to use them after passing
 * them to this function.
 * The computation is synchronous.
 *
 * @param funcCovs Function coverages to merge.
 * @return Merged function coverage, or `undefined` if the input list was empty.
 */
function mergeFunctionCovs(funcCovs) {
    if (funcCovs.length === 0) {
        return undefined;
    }
    else if (funcCovs.length === 1) {
        const merged = funcCovs[0];
        normalizeFunctionCov(merged);
        return merged;
    }
    const functionName = funcCovs[0].functionName;
    const trees = [];
    funcCovs.forEach(function(funcCov) {
        // assert: `fn.ranges.length > 0`
        // assert: `fn.ranges` is sorted
        trees.push(RangeTree.fromSortedRanges(funcCov.ranges));
    });
    // assert: `trees.length > 0`
    const mergedTree = mergeRangeTrees(trees);
    normalizeRangeTree(mergedTree);
    const ranges = mergedTree.toRanges();
    const isBlockCoverage = !(ranges.length === 1 && ranges[0].count === 0);
    const merged = { functionName, ranges, isBlockCoverage };
    // assert: `merged` is normalized
    return merged;
}
/**
 * @precondition Same `start` and `end` for all the trees
 */
function mergeRangeTrees(trees) {
    if (trees.length <= 1) {
        return trees[0];
    }
    const first = trees[0];
    let delta = 0;
    trees.forEach(function(tree) {
        delta += tree.delta;
    });
    const children = mergeRangeTreeChildren(trees);
    return new RangeTree(first.start, first.end, delta, children);
}
class RangeTreeWithParent {
    constructor(parentIndex, tree) {
        this.parentIndex = parentIndex;
        this.tree = tree;
    }
}
class StartEvent {
    constructor(offset, trees) {
        this.offset = offset;
        this.trees = trees;
    }
    static compare(a, b) {
        return a.offset - b.offset;
    }
}
class StartEventQueue {
    constructor(queue) {
        this.queue = queue;
        this.nextIndex = 0;
        this.pendingOffset = 0;
        this.pendingTrees = undefined;
    }
    static fromParentTrees(parentTrees) {
        const startToTrees = new Map();
        parentTrees.entries().forEach(function([parentIndex, parentTree]) {
            parentTree.children.forEach(function(child) {
                let trees = startToTrees.get(child.start);
                if (trees === undefined) {
                    trees = [];
                    startToTrees.set(child.start, trees);
                }
                trees.push(new RangeTreeWithParent(parentIndex, child));
            });
        });
        const queue = [];
        startToTrees.forEach(function([startOffset, trees]) {
            queue.push(new StartEvent(startOffset, trees));
        });
        queue.sort(StartEvent.compare);
        return new StartEventQueue(queue);
    }
    setPendingOffset(offset) {
        this.pendingOffset = offset;
    }
    pushPendingTree(tree) {
        if (this.pendingTrees === undefined) {
            this.pendingTrees = [];
        }
        this.pendingTrees.push(tree);
    }
    next() {
        const pendingTrees = this.pendingTrees;
        const nextEvent = this.queue[this.nextIndex];
        if (pendingTrees === undefined) {
            this.nextIndex++;
            return nextEvent;
        }
        else if (nextEvent === undefined) {
            this.pendingTrees = undefined;
            return new StartEvent(this.pendingOffset, pendingTrees);
        }
        else {
            if (this.pendingOffset < nextEvent.offset) {
                this.pendingTrees = undefined;
                return new StartEvent(this.pendingOffset, pendingTrees);
            }
            else {
                if (this.pendingOffset === nextEvent.offset) {
                    this.pendingTrees = undefined;
                    pendingTrees.forEach(function(tree) {
                        nextEvent.trees.push(tree);
                    });
                }
                this.nextIndex++;
                return nextEvent;
            }
        }
    }
}
function mergeRangeTreeChildren(parentTrees) {
    const result = [];
    const startEventQueue = StartEventQueue.fromParentTrees(parentTrees);
    const parentToNested = new Map();
    let openRange;
    while (true) {
        const event = startEventQueue.next();
        if (event === undefined) {
            break;
        }
        if (openRange !== undefined && openRange.end <= event.offset) {
            result.push(nextChild(openRange, parentToNested));
            openRange = undefined;
        }
        if (openRange === undefined) {
            let openRangeEnd = event.offset + 1;
            event.trees.forEach(function({ parentIndex, tree }) {
                openRangeEnd = Math.max(openRangeEnd, tree.end);
                insertChild(parentToNested, parentIndex, tree);
            });
            startEventQueue.setPendingOffset(openRangeEnd);
            openRange = { start: event.offset, end: openRangeEnd };
        }
        else {
            event.trees.forEach(function({ parentIndex, tree }) {
                if (tree.end > openRange.end) {
                    const right = tree.split(openRange.end);
                    startEventQueue.pushPendingTree(new RangeTreeWithParent(parentIndex, right));
                }
                insertChild(parentToNested, parentIndex, tree);
            });
        }
    }
    if (openRange !== undefined) {
        result.push(nextChild(openRange, parentToNested));
    }
    return result;
}
function insertChild(parentToNested, parentIndex, tree) {
    let nested = parentToNested.get(parentIndex);
    if (nested === undefined) {
        nested = [];
        parentToNested.set(parentIndex, nested);
    }
    nested.push(tree);
}
function nextChild(openRange, parentToNested) {
    const matchingTrees = [];
    parentToNested.values().forEach(function(nested) {
        if (nested.length === 1 && nested[0].start === openRange.start && nested[0].end === openRange.end) {
            matchingTrees.push(nested[0]);
        }
        else {
            matchingTrees.push(new RangeTree(openRange.start, openRange.end, 0, nested));
        }
    });
    parentToNested.clear();
    return mergeRangeTrees(matchingTrees);
}
