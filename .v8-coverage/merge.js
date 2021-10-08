"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const normalize_1 = require("./normalize");
const range_tree_1 = require("./range-tree");
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
        normalize_1.deepNormalizeProcessCov(merged);
        return merged;
    }
    const urlToScripts = new Map();
    for (const processCov of processCovs) {
        for (const scriptCov of processCov.result) {
            let scriptCovs = urlToScripts.get(scriptCov.url);
            if (scriptCovs === undefined) {
                scriptCovs = [];
                urlToScripts.set(scriptCov.url, scriptCovs);
            }
            scriptCovs.push(scriptCov);
        }
    }
    const result = [];
    for (const scripts of urlToScripts.values()) {
        // assert: `scripts.length > 0`
        result.push(mergeScriptCovs(scripts));
    }
    const merged = { result };
    normalize_1.normalizeProcessCov(merged);
    return merged;
}
exports.mergeProcessCovs = mergeProcessCovs;
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
        normalize_1.deepNormalizeScriptCov(merged);
        return merged;
    }
    const first = scriptCovs[0];
    const scriptId = first.scriptId;
    const url = first.url;
    const rangeToFuncs = new Map();
    for (const scriptCov of scriptCovs) {
        for (const funcCov of scriptCov.functions) {
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
                continue;
            }
            funcCovs.push(funcCov);
        }
    }
    const functions = [];
    for (const funcCovs of rangeToFuncs.values()) {
        // assert: `funcCovs.length > 0`
        functions.push(mergeFunctionCovs(funcCovs));
    }
    const merged = { scriptId, url, functions };
    normalize_1.normalizeScriptCov(merged);
    return merged;
}
exports.mergeScriptCovs = mergeScriptCovs;
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
        normalize_1.normalizeFunctionCov(merged);
        return merged;
    }
    const functionName = funcCovs[0].functionName;
    const trees = [];
    for (const funcCov of funcCovs) {
        // assert: `fn.ranges.length > 0`
        // assert: `fn.ranges` is sorted
        trees.push(range_tree_1.RangeTree.fromSortedRanges(funcCov.ranges));
    }
    // assert: `trees.length > 0`
    const mergedTree = mergeRangeTrees(trees);
    normalize_1.normalizeRangeTree(mergedTree);
    const ranges = mergedTree.toRanges();
    const isBlockCoverage = !(ranges.length === 1 && ranges[0].count === 0);
    const merged = { functionName, ranges, isBlockCoverage };
    // assert: `merged` is normalized
    return merged;
}
exports.mergeFunctionCovs = mergeFunctionCovs;
/**
 * @precondition Same `start` and `end` for all the trees
 */
function mergeRangeTrees(trees) {
    if (trees.length <= 1) {
        return trees[0];
    }
    const first = trees[0];
    let delta = 0;
    for (const tree of trees) {
        delta += tree.delta;
    }
    const children = mergeRangeTreeChildren(trees);
    return new range_tree_1.RangeTree(first.start, first.end, delta, children);
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
        for (const [parentIndex, parentTree] of parentTrees.entries()) {
            for (const child of parentTree.children) {
                let trees = startToTrees.get(child.start);
                if (trees === undefined) {
                    trees = [];
                    startToTrees.set(child.start, trees);
                }
                trees.push(new RangeTreeWithParent(parentIndex, child));
            }
        }
        const queue = [];
        for (const [startOffset, trees] of startToTrees) {
            queue.push(new StartEvent(startOffset, trees));
        }
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
                    for (const tree of pendingTrees) {
                        nextEvent.trees.push(tree);
                    }
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
            for (const { parentIndex, tree } of event.trees) {
                openRangeEnd = Math.max(openRangeEnd, tree.end);
                insertChild(parentToNested, parentIndex, tree);
            }
            startEventQueue.setPendingOffset(openRangeEnd);
            openRange = { start: event.offset, end: openRangeEnd };
        }
        else {
            for (const { parentIndex, tree } of event.trees) {
                if (tree.end > openRange.end) {
                    const right = tree.split(openRange.end);
                    startEventQueue.pushPendingTree(new RangeTreeWithParent(parentIndex, right));
                }
                insertChild(parentToNested, parentIndex, tree);
            }
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
    for (const nested of parentToNested.values()) {
        if (nested.length === 1 && nested[0].start === openRange.start && nested[0].end === openRange.end) {
            matchingTrees.push(nested[0]);
        }
        else {
            matchingTrees.push(new range_tree_1.RangeTree(openRange.start, openRange.end, 0, nested));
        }
    }
    parentToNested.clear();
    return mergeRangeTrees(matchingTrees);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM7SUFDdkIsT0FBTyxlQUFlLENBQUMsYUFBYSxDQUFFLENBQUM7QUFDekMsQ0FBQyIsImZpbGUiOiJtZXJnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRlZXBOb3JtYWxpemVQcm9jZXNzQ292LFxuICBkZWVwTm9ybWFsaXplU2NyaXB0Q292LFxuICBub3JtYWxpemVGdW5jdGlvbkNvdixcbiAgbm9ybWFsaXplUHJvY2Vzc0NvdixcbiAgbm9ybWFsaXplUmFuZ2VUcmVlLFxuICBub3JtYWxpemVTY3JpcHRDb3YsXG59IGZyb20gXCIuL25vcm1hbGl6ZVwiO1xuaW1wb3J0IHsgUmFuZ2VUcmVlIH0gZnJvbSBcIi4vcmFuZ2UtdHJlZVwiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db3YsIFByb2Nlc3NDb3YsIFJhbmdlLCBSYW5nZUNvdiwgU2NyaXB0Q292IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBNZXJnZXMgYSBsaXN0IG9mIHByb2Nlc3MgY292ZXJhZ2VzLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgbm9ybWFsaXplZC5cbiAqIFRoZSBpbnB1dCB2YWx1ZXMgbWF5IGJlIG11dGF0ZWQsIGl0IGlzIG5vdCBzYWZlIHRvIHVzZSB0aGVtIGFmdGVyIHBhc3NpbmdcbiAqIHRoZW0gdG8gdGhpcyBmdW5jdGlvbi5cbiAqIFRoZSBjb21wdXRhdGlvbiBpcyBzeW5jaHJvbm91cy5cbiAqXG4gKiBAcGFyYW0gcHJvY2Vzc0NvdnMgUHJvY2VzcyBjb3ZlcmFnZXMgdG8gbWVyZ2UuXG4gKiBAcmV0dXJuIE1lcmdlZCBwcm9jZXNzIGNvdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VQcm9jZXNzQ292cyhwcm9jZXNzQ292czogUmVhZG9ubHlBcnJheTxQcm9jZXNzQ292Pik6IFByb2Nlc3NDb3Yge1xuICBpZiAocHJvY2Vzc0NvdnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHtyZXN1bHQ6IFtdfTtcbiAgfSBlbHNlIGlmIChwcm9jZXNzQ292cy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBtZXJnZWQ6IFByb2Nlc3NDb3YgPSBwcm9jZXNzQ292c1swXTtcbiAgICBkZWVwTm9ybWFsaXplUHJvY2Vzc0NvdihtZXJnZWQpO1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH1cblxuICBjb25zdCB1cmxUb1NjcmlwdHM6IE1hcDxzdHJpbmcsIFNjcmlwdENvdltdPiA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBwcm9jZXNzQ292IG9mIHByb2Nlc3NDb3ZzKSB7XG4gICAgZm9yIChjb25zdCBzY3JpcHRDb3Ygb2YgcHJvY2Vzc0Nvdi5yZXN1bHQpIHtcbiAgICAgIGxldCBzY3JpcHRDb3ZzOiBTY3JpcHRDb3ZbXSB8IHVuZGVmaW5lZCA9IHVybFRvU2NyaXB0cy5nZXQoc2NyaXB0Q292LnVybCk7XG4gICAgICBpZiAoc2NyaXB0Q292cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcmlwdENvdnMgPSBbXTtcbiAgICAgICAgdXJsVG9TY3JpcHRzLnNldChzY3JpcHRDb3YudXJsLCBzY3JpcHRDb3ZzKTtcbiAgICAgIH1cbiAgICAgIHNjcmlwdENvdnMucHVzaChzY3JpcHRDb3YpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlc3VsdDogU2NyaXB0Q292W10gPSBbXTtcbiAgZm9yIChjb25zdCBzY3JpcHRzIG9mIHVybFRvU2NyaXB0cy52YWx1ZXMoKSkge1xuICAgIC8vIGFzc2VydDogYHNjcmlwdHMubGVuZ3RoID4gMGBcbiAgICByZXN1bHQucHVzaChtZXJnZVNjcmlwdENvdnMoc2NyaXB0cykhKTtcbiAgfVxuICBjb25zdCBtZXJnZWQ6IFByb2Nlc3NDb3YgPSB7cmVzdWx0fTtcblxuICBub3JtYWxpemVQcm9jZXNzQ292KG1lcmdlZCk7XG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgbGlzdCBvZiBtYXRjaGluZyBzY3JpcHQgY292ZXJhZ2VzLlxuICpcbiAqIFNjcmlwdHMgYXJlIG1hdGNoaW5nIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBgdXJsYC5cbiAqIFRoZSByZXN1bHQgaXMgbm9ybWFsaXplZC5cbiAqIFRoZSBpbnB1dCB2YWx1ZXMgbWF5IGJlIG11dGF0ZWQsIGl0IGlzIG5vdCBzYWZlIHRvIHVzZSB0aGVtIGFmdGVyIHBhc3NpbmdcbiAqIHRoZW0gdG8gdGhpcyBmdW5jdGlvbi5cbiAqIFRoZSBjb21wdXRhdGlvbiBpcyBzeW5jaHJvbm91cy5cbiAqXG4gKiBAcGFyYW0gc2NyaXB0Q292cyBQcm9jZXNzIGNvdmVyYWdlcyB0byBtZXJnZS5cbiAqIEByZXR1cm4gTWVyZ2VkIHNjcmlwdCBjb3ZlcmFnZSwgb3IgYHVuZGVmaW5lZGAgaWYgdGhlIGlucHV0IGxpc3Qgd2FzIGVtcHR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTY3JpcHRDb3ZzKHNjcmlwdENvdnM6IFJlYWRvbmx5QXJyYXk8U2NyaXB0Q292Pik6IFNjcmlwdENvdiB8IHVuZGVmaW5lZCB7XG4gIGlmIChzY3JpcHRDb3ZzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoc2NyaXB0Q292cy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBtZXJnZWQ6IFNjcmlwdENvdiA9IHNjcmlwdENvdnNbMF07XG4gICAgZGVlcE5vcm1hbGl6ZVNjcmlwdENvdihtZXJnZWQpO1xuICAgIHJldHVybiBtZXJnZWQ7XG4gIH1cblxuICBjb25zdCBmaXJzdDogU2NyaXB0Q292ID0gc2NyaXB0Q292c1swXTtcbiAgY29uc3Qgc2NyaXB0SWQ6IHN0cmluZyA9IGZpcnN0LnNjcmlwdElkO1xuICBjb25zdCB1cmw6IHN0cmluZyA9IGZpcnN0LnVybDtcblxuICBjb25zdCByYW5nZVRvRnVuY3M6IE1hcDxzdHJpbmcsIEZ1bmN0aW9uQ292W10+ID0gbmV3IE1hcCgpO1xuICBmb3IgKGNvbnN0IHNjcmlwdENvdiBvZiBzY3JpcHRDb3ZzKSB7XG4gICAgZm9yIChjb25zdCBmdW5jQ292IG9mIHNjcmlwdENvdi5mdW5jdGlvbnMpIHtcbiAgICAgIGNvbnN0IHJvb3RSYW5nZTogc3RyaW5nID0gc3RyaW5naWZ5RnVuY3Rpb25Sb290UmFuZ2UoZnVuY0Nvdik7XG4gICAgICBsZXQgZnVuY0NvdnM6IEZ1bmN0aW9uQ292W10gfCB1bmRlZmluZWQgPSByYW5nZVRvRnVuY3MuZ2V0KHJvb3RSYW5nZSk7XG5cbiAgICAgIGlmIChmdW5jQ292cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgIC8vIGlmIHRoZSBlbnRyeSBpbiByYW5nZVRvRnVuY3MgaXMgZnVuY3Rpb24tbGV2ZWwgZ3JhbnVsYXJpdHkgYW5kXG4gICAgICAgIC8vIHRoZSBuZXcgY292ZXJhZ2UgaXMgYmxvY2stbGV2ZWwsIHByZWZlciBibG9jay1sZXZlbC5cbiAgICAgICAgKCFmdW5jQ292c1swXS5pc0Jsb2NrQ292ZXJhZ2UgJiYgZnVuY0Nvdi5pc0Jsb2NrQ292ZXJhZ2UpKSB7XG4gICAgICAgIGZ1bmNDb3ZzID0gW107XG4gICAgICAgIHJhbmdlVG9GdW5jcy5zZXQocm9vdFJhbmdlLCBmdW5jQ292cyk7XG4gICAgICB9IGVsc2UgaWYgKGZ1bmNDb3ZzWzBdLmlzQmxvY2tDb3ZlcmFnZSAmJiAhZnVuY0Nvdi5pc0Jsb2NrQ292ZXJhZ2UpIHtcbiAgICAgICAgLy8gaWYgdGhlIGVudHJ5IGluIHJhbmdlVG9GdW5jcyBpcyBibG9jay1sZXZlbCBncmFudWxhcml0eSwgd2Ugc2hvdWxkXG4gICAgICAgIC8vIG5vdCBhcHBlbmQgZnVuY3Rpb24gbGV2ZWwgZ3JhbnVsYXJpdHkuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZnVuY0NvdnMucHVzaChmdW5jQ292KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBmdW5jdGlvbnM6IEZ1bmN0aW9uQ292W10gPSBbXTtcbiAgZm9yIChjb25zdCBmdW5jQ292cyBvZiByYW5nZVRvRnVuY3MudmFsdWVzKCkpIHtcbiAgICAvLyBhc3NlcnQ6IGBmdW5jQ292cy5sZW5ndGggPiAwYFxuICAgIGZ1bmN0aW9ucy5wdXNoKG1lcmdlRnVuY3Rpb25Db3ZzKGZ1bmNDb3ZzKSEpO1xuICB9XG5cbiAgY29uc3QgbWVyZ2VkOiBTY3JpcHRDb3YgPSB7c2NyaXB0SWQsIHVybCwgZnVuY3Rpb25zfTtcbiAgbm9ybWFsaXplU2NyaXB0Q292KG1lcmdlZCk7XG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcm9vdCByYW5nZSBvZiB0aGUgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBzdHJpbmcgY2FuIGJlIHVzZWQgdG8gbWF0Y2ggZnVuY3Rpb24gd2l0aCBzYW1lIHJvb3QgcmFuZ2UuXG4gKiBUaGUgc3RyaW5nIGlzIGRlcml2ZWQgZnJvbSB0aGUgc3RhcnQgYW5kIGVuZCBvZmZzZXRzIG9mIHRoZSByb290IHJhbmdlIG9mXG4gKiB0aGUgZnVuY3Rpb24uXG4gKiBUaGlzIGFzc3VtZXMgdGhhdCBgcmFuZ2VzYCBpcyBub24tZW1wdHkgKHRydWUgZm9yIHZhbGlkIGZ1bmN0aW9uIGNvdmVyYWdlcykuXG4gKlxuICogQHBhcmFtIGZ1bmNDb3YgRnVuY3Rpb24gY292ZXJhZ2Ugd2l0aCB0aGUgcmFuZ2UgdG8gc3RyaW5naWZ5XG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5RnVuY3Rpb25Sb290UmFuZ2UoZnVuY0NvdjogUmVhZG9ubHk8RnVuY3Rpb25Db3Y+KTogc3RyaW5nIHtcbiAgY29uc3Qgcm9vdFJhbmdlOiBSYW5nZUNvdiA9IGZ1bmNDb3YucmFuZ2VzWzBdO1xuICByZXR1cm4gYCR7cm9vdFJhbmdlLnN0YXJ0T2Zmc2V0LnRvU3RyaW5nKDEwKX07JHtyb290UmFuZ2UuZW5kT2Zmc2V0LnRvU3RyaW5nKDEwKX1gO1xufVxuXG4vKipcbiAqIE1lcmdlcyBhIGxpc3Qgb2YgbWF0Y2hpbmcgZnVuY3Rpb24gY292ZXJhZ2VzLlxuICpcbiAqIEZ1bmN0aW9ucyBhcmUgbWF0Y2hpbmcgaWYgdGhlaXIgcm9vdCByYW5nZXMgaGF2ZSB0aGUgc2FtZSBzcGFuLlxuICogVGhlIHJlc3VsdCBpcyBub3JtYWxpemVkLlxuICogVGhlIGlucHV0IHZhbHVlcyBtYXkgYmUgbXV0YXRlZCwgaXQgaXMgbm90IHNhZmUgdG8gdXNlIHRoZW0gYWZ0ZXIgcGFzc2luZ1xuICogdGhlbSB0byB0aGlzIGZ1bmN0aW9uLlxuICogVGhlIGNvbXB1dGF0aW9uIGlzIHN5bmNocm9ub3VzLlxuICpcbiAqIEBwYXJhbSBmdW5jQ292cyBGdW5jdGlvbiBjb3ZlcmFnZXMgdG8gbWVyZ2UuXG4gKiBAcmV0dXJuIE1lcmdlZCBmdW5jdGlvbiBjb3ZlcmFnZSwgb3IgYHVuZGVmaW5lZGAgaWYgdGhlIGlucHV0IGxpc3Qgd2FzIGVtcHR5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbkNvdnMoZnVuY0NvdnM6IFJlYWRvbmx5QXJyYXk8RnVuY3Rpb25Db3Y+KTogRnVuY3Rpb25Db3YgfCB1bmRlZmluZWQge1xuICBpZiAoZnVuY0NvdnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIGlmIChmdW5jQ292cy5sZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBtZXJnZWQ6IEZ1bmN0aW9uQ292ID0gZnVuY0NvdnNbMF07XG4gICAgbm9ybWFsaXplRnVuY3Rpb25Db3YobWVyZ2VkKTtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9XG5cbiAgY29uc3QgZnVuY3Rpb25OYW1lOiBzdHJpbmcgPSBmdW5jQ292c1swXS5mdW5jdGlvbk5hbWU7XG5cbiAgY29uc3QgdHJlZXM6IFJhbmdlVHJlZVtdID0gW107XG4gIGZvciAoY29uc3QgZnVuY0NvdiBvZiBmdW5jQ292cykge1xuICAgIC8vIGFzc2VydDogYGZuLnJhbmdlcy5sZW5ndGggPiAwYFxuICAgIC8vIGFzc2VydDogYGZuLnJhbmdlc2AgaXMgc29ydGVkXG4gICAgdHJlZXMucHVzaChSYW5nZVRyZWUuZnJvbVNvcnRlZFJhbmdlcyhmdW5jQ292LnJhbmdlcykhKTtcbiAgfVxuXG4gIC8vIGFzc2VydDogYHRyZWVzLmxlbmd0aCA+IDBgXG4gIGNvbnN0IG1lcmdlZFRyZWU6IFJhbmdlVHJlZSA9IG1lcmdlUmFuZ2VUcmVlcyh0cmVlcykhO1xuICBub3JtYWxpemVSYW5nZVRyZWUobWVyZ2VkVHJlZSk7XG4gIGNvbnN0IHJhbmdlczogUmFuZ2VDb3ZbXSA9IG1lcmdlZFRyZWUudG9SYW5nZXMoKTtcbiAgY29uc3QgaXNCbG9ja0NvdmVyYWdlOiBib29sZWFuID0gIShyYW5nZXMubGVuZ3RoID09PSAxICYmIHJhbmdlc1swXS5jb3VudCA9PT0gMCk7XG5cbiAgY29uc3QgbWVyZ2VkOiBGdW5jdGlvbkNvdiA9IHtmdW5jdGlvbk5hbWUsIHJhbmdlcywgaXNCbG9ja0NvdmVyYWdlfTtcbiAgLy8gYXNzZXJ0OiBgbWVyZ2VkYCBpcyBub3JtYWxpemVkXG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbi8qKlxuICogQHByZWNvbmRpdGlvbiBTYW1lIGBzdGFydGAgYW5kIGBlbmRgIGZvciBhbGwgdGhlIHRyZWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlUmFuZ2VUcmVlcyh0cmVlczogUmVhZG9ubHlBcnJheTxSYW5nZVRyZWU+KTogUmFuZ2VUcmVlIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHRyZWVzLmxlbmd0aCA8PSAxKSB7XG4gICAgcmV0dXJuIHRyZWVzWzBdO1xuICB9XG4gIGNvbnN0IGZpcnN0OiBSYW5nZVRyZWUgPSB0cmVlc1swXTtcbiAgbGV0IGRlbHRhOiBudW1iZXIgPSAwO1xuICBmb3IgKGNvbnN0IHRyZWUgb2YgdHJlZXMpIHtcbiAgICBkZWx0YSArPSB0cmVlLmRlbHRhO1xuICB9XG4gIGNvbnN0IGNoaWxkcmVuOiBSYW5nZVRyZWVbXSA9IG1lcmdlUmFuZ2VUcmVlQ2hpbGRyZW4odHJlZXMpO1xuICByZXR1cm4gbmV3IFJhbmdlVHJlZShmaXJzdC5zdGFydCwgZmlyc3QuZW5kLCBkZWx0YSwgY2hpbGRyZW4pO1xufVxuXG5jbGFzcyBSYW5nZVRyZWVXaXRoUGFyZW50IHtcbiAgcmVhZG9ubHkgcGFyZW50SW5kZXg6IG51bWJlcjtcbiAgcmVhZG9ubHkgdHJlZTogUmFuZ2VUcmVlO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudEluZGV4OiBudW1iZXIsIHRyZWU6IFJhbmdlVHJlZSkge1xuICAgIHRoaXMucGFyZW50SW5kZXggPSBwYXJlbnRJbmRleDtcbiAgICB0aGlzLnRyZWUgPSB0cmVlO1xuICB9XG59XG5cbmNsYXNzIFN0YXJ0RXZlbnQge1xuICByZWFkb25seSBvZmZzZXQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgdHJlZXM6IFJhbmdlVHJlZVdpdGhQYXJlbnRbXTtcblxuICBjb25zdHJ1Y3RvcihvZmZzZXQ6IG51bWJlciwgdHJlZXM6IFJhbmdlVHJlZVdpdGhQYXJlbnRbXSkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMudHJlZXMgPSB0cmVlcztcbiAgfVxuXG4gIHN0YXRpYyBjb21wYXJlKGE6IFN0YXJ0RXZlbnQsIGI6IFN0YXJ0RXZlbnQpOiBudW1iZXIge1xuICAgIHJldHVybiBhLm9mZnNldCAtIGIub2Zmc2V0O1xuICB9XG59XG5cbmNsYXNzIFN0YXJ0RXZlbnRRdWV1ZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcXVldWU6IFN0YXJ0RXZlbnRbXTtcbiAgcHJpdmF0ZSBuZXh0SW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBwZW5kaW5nT2Zmc2V0OiBudW1iZXI7XG4gIHByaXZhdGUgcGVuZGluZ1RyZWVzOiBSYW5nZVRyZWVXaXRoUGFyZW50W10gfCB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihxdWV1ZTogU3RhcnRFdmVudFtdKSB7XG4gICAgdGhpcy5xdWV1ZSA9IHF1ZXVlO1xuICAgIHRoaXMubmV4dEluZGV4ID0gMDtcbiAgICB0aGlzLnBlbmRpbmdPZmZzZXQgPSAwO1xuICAgIHRoaXMucGVuZGluZ1RyZWVzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJlbnRUcmVlcyhwYXJlbnRUcmVlczogUmVhZG9ubHlBcnJheTxSYW5nZVRyZWU+KTogU3RhcnRFdmVudFF1ZXVlIHtcbiAgICBjb25zdCBzdGFydFRvVHJlZXM6IE1hcDxudW1iZXIsIFJhbmdlVHJlZVdpdGhQYXJlbnRbXT4gPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCBbcGFyZW50SW5kZXgsIHBhcmVudFRyZWVdIG9mIHBhcmVudFRyZWVzLmVudHJpZXMoKSkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwYXJlbnRUcmVlLmNoaWxkcmVuKSB7XG4gICAgICAgIGxldCB0cmVlczogUmFuZ2VUcmVlV2l0aFBhcmVudFtdIHwgdW5kZWZpbmVkID0gc3RhcnRUb1RyZWVzLmdldChjaGlsZC5zdGFydCk7XG4gICAgICAgIGlmICh0cmVlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdHJlZXMgPSBbXTtcbiAgICAgICAgICBzdGFydFRvVHJlZXMuc2V0KGNoaWxkLnN0YXJ0LCB0cmVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJlZXMucHVzaChuZXcgUmFuZ2VUcmVlV2l0aFBhcmVudChwYXJlbnRJbmRleCwgY2hpbGQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcXVldWU6IFN0YXJ0RXZlbnRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3N0YXJ0T2Zmc2V0LCB0cmVlc10gb2Ygc3RhcnRUb1RyZWVzKSB7XG4gICAgICBxdWV1ZS5wdXNoKG5ldyBTdGFydEV2ZW50KHN0YXJ0T2Zmc2V0LCB0cmVlcykpO1xuICAgIH1cbiAgICBxdWV1ZS5zb3J0KFN0YXJ0RXZlbnQuY29tcGFyZSk7XG4gICAgcmV0dXJuIG5ldyBTdGFydEV2ZW50UXVldWUocXVldWUpO1xuICB9XG5cbiAgc2V0UGVuZGluZ09mZnNldChvZmZzZXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGVuZGluZ09mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIHB1c2hQZW5kaW5nVHJlZSh0cmVlOiBSYW5nZVRyZWVXaXRoUGFyZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGVuZGluZ1RyZWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucGVuZGluZ1RyZWVzID0gW107XG4gICAgfVxuICAgIHRoaXMucGVuZGluZ1RyZWVzLnB1c2godHJlZSk7XG4gIH1cblxuICBuZXh0KCk6IFN0YXJ0RXZlbnQgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHBlbmRpbmdUcmVlczogUmFuZ2VUcmVlV2l0aFBhcmVudFtdIHwgdW5kZWZpbmVkID0gdGhpcy5wZW5kaW5nVHJlZXM7XG4gICAgY29uc3QgbmV4dEV2ZW50OiBTdGFydEV2ZW50IHwgdW5kZWZpbmVkID0gdGhpcy5xdWV1ZVt0aGlzLm5leHRJbmRleF07XG4gICAgaWYgKHBlbmRpbmdUcmVlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm5leHRJbmRleCsrO1xuICAgICAgcmV0dXJuIG5leHRFdmVudDtcbiAgICB9IGVsc2UgaWYgKG5leHRFdmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnBlbmRpbmdUcmVlcyA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBuZXcgU3RhcnRFdmVudCh0aGlzLnBlbmRpbmdPZmZzZXQsIHBlbmRpbmdUcmVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdPZmZzZXQgPCBuZXh0RXZlbnQub2Zmc2V0KSB7XG4gICAgICAgIHRoaXMucGVuZGluZ1RyZWVzID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gbmV3IFN0YXJ0RXZlbnQodGhpcy5wZW5kaW5nT2Zmc2V0LCBwZW5kaW5nVHJlZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ09mZnNldCA9PT0gbmV4dEV2ZW50Lm9mZnNldCkge1xuICAgICAgICAgIHRoaXMucGVuZGluZ1RyZWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGZvciAoY29uc3QgdHJlZSBvZiBwZW5kaW5nVHJlZXMpIHtcbiAgICAgICAgICAgIG5leHRFdmVudC50cmVlcy5wdXNoKHRyZWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5leHRJbmRleCsrO1xuICAgICAgICByZXR1cm4gbmV4dEV2ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVJhbmdlVHJlZUNoaWxkcmVuKHBhcmVudFRyZWVzOiBSZWFkb25seUFycmF5PFJhbmdlVHJlZT4pOiBSYW5nZVRyZWVbXSB7XG4gIGNvbnN0IHJlc3VsdDogUmFuZ2VUcmVlW10gPSBbXTtcbiAgY29uc3Qgc3RhcnRFdmVudFF1ZXVlOiBTdGFydEV2ZW50UXVldWUgPSBTdGFydEV2ZW50UXVldWUuZnJvbVBhcmVudFRyZWVzKHBhcmVudFRyZWVzKTtcbiAgY29uc3QgcGFyZW50VG9OZXN0ZWQ6IE1hcDxudW1iZXIsIFJhbmdlVHJlZVtdPiA9IG5ldyBNYXAoKTtcbiAgbGV0IG9wZW5SYW5nZTogUmFuZ2UgfCB1bmRlZmluZWQ7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBldmVudDogU3RhcnRFdmVudCB8IHVuZGVmaW5lZCA9IHN0YXJ0RXZlbnRRdWV1ZS5uZXh0KCk7XG4gICAgaWYgKGV2ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChvcGVuUmFuZ2UgIT09IHVuZGVmaW5lZCAmJiBvcGVuUmFuZ2UuZW5kIDw9IGV2ZW50Lm9mZnNldCkge1xuICAgICAgcmVzdWx0LnB1c2gobmV4dENoaWxkKG9wZW5SYW5nZSwgcGFyZW50VG9OZXN0ZWQpKTtcbiAgICAgIG9wZW5SYW5nZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAob3BlblJhbmdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBvcGVuUmFuZ2VFbmQ6IG51bWJlciA9IGV2ZW50Lm9mZnNldCArIDE7XG4gICAgICBmb3IgKGNvbnN0IHtwYXJlbnRJbmRleCwgdHJlZX0gb2YgZXZlbnQudHJlZXMpIHtcbiAgICAgICAgb3BlblJhbmdlRW5kID0gTWF0aC5tYXgob3BlblJhbmdlRW5kLCB0cmVlLmVuZCk7XG4gICAgICAgIGluc2VydENoaWxkKHBhcmVudFRvTmVzdGVkLCBwYXJlbnRJbmRleCwgdHJlZSk7XG4gICAgICB9XG4gICAgICBzdGFydEV2ZW50UXVldWUuc2V0UGVuZGluZ09mZnNldChvcGVuUmFuZ2VFbmQpO1xuICAgICAgb3BlblJhbmdlID0ge3N0YXJ0OiBldmVudC5vZmZzZXQsIGVuZDogb3BlblJhbmdlRW5kfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCB7cGFyZW50SW5kZXgsIHRyZWV9IG9mIGV2ZW50LnRyZWVzKSB7XG4gICAgICAgIGlmICh0cmVlLmVuZCA+IG9wZW5SYW5nZS5lbmQpIHtcbiAgICAgICAgICBjb25zdCByaWdodDogUmFuZ2VUcmVlID0gdHJlZS5zcGxpdChvcGVuUmFuZ2UuZW5kKTtcbiAgICAgICAgICBzdGFydEV2ZW50UXVldWUucHVzaFBlbmRpbmdUcmVlKG5ldyBSYW5nZVRyZWVXaXRoUGFyZW50KHBhcmVudEluZGV4LCByaWdodCkpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydENoaWxkKHBhcmVudFRvTmVzdGVkLCBwYXJlbnRJbmRleCwgdHJlZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChvcGVuUmFuZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHJlc3VsdC5wdXNoKG5leHRDaGlsZChvcGVuUmFuZ2UsIHBhcmVudFRvTmVzdGVkKSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpbnNlcnRDaGlsZChwYXJlbnRUb05lc3RlZDogTWFwPG51bWJlciwgUmFuZ2VUcmVlW10+LCBwYXJlbnRJbmRleDogbnVtYmVyLCB0cmVlOiBSYW5nZVRyZWUpOiB2b2lkIHtcbiAgbGV0IG5lc3RlZDogUmFuZ2VUcmVlW10gfCB1bmRlZmluZWQgPSBwYXJlbnRUb05lc3RlZC5nZXQocGFyZW50SW5kZXgpO1xuICBpZiAobmVzdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICBuZXN0ZWQgPSBbXTtcbiAgICBwYXJlbnRUb05lc3RlZC5zZXQocGFyZW50SW5kZXgsIG5lc3RlZCk7XG4gIH1cbiAgbmVzdGVkLnB1c2godHJlZSk7XG59XG5cbmZ1bmN0aW9uIG5leHRDaGlsZChvcGVuUmFuZ2U6IFJhbmdlLCBwYXJlbnRUb05lc3RlZDogTWFwPG51bWJlciwgUmFuZ2VUcmVlW10+KTogUmFuZ2VUcmVlIHtcbiAgY29uc3QgbWF0Y2hpbmdUcmVlczogUmFuZ2VUcmVlW10gPSBbXTtcblxuICBmb3IgKGNvbnN0IG5lc3RlZCBvZiBwYXJlbnRUb05lc3RlZC52YWx1ZXMoKSkge1xuICAgIGlmIChuZXN0ZWQubGVuZ3RoID09PSAxICYmIG5lc3RlZFswXS5zdGFydCA9PT0gb3BlblJhbmdlLnN0YXJ0ICYmIG5lc3RlZFswXS5lbmQgPT09IG9wZW5SYW5nZS5lbmQpIHtcbiAgICAgIG1hdGNoaW5nVHJlZXMucHVzaChuZXN0ZWRbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaGluZ1RyZWVzLnB1c2gobmV3IFJhbmdlVHJlZShcbiAgICAgICAgb3BlblJhbmdlLnN0YXJ0LFxuICAgICAgICBvcGVuUmFuZ2UuZW5kLFxuICAgICAgICAwLFxuICAgICAgICBuZXN0ZWQsXG4gICAgICApKTtcbiAgICB9XG4gIH1cbiAgcGFyZW50VG9OZXN0ZWQuY2xlYXIoKTtcbiAgcmV0dXJuIG1lcmdlUmFuZ2VUcmVlcyhtYXRjaGluZ1RyZWVzKSE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
