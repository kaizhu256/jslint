"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compare_1 = require("./compare");
function emitForest(trees) {
    return emitForestLines(trees).join("\n");
}
exports.emitForest = emitForest;
function emitForestLines(trees) {
    const colMap = getColMap(trees);
    const header = emitOffsets(colMap);
    return [header, ...trees.map(tree => emitTree(tree, colMap).join("\n"))];
}
exports.emitForestLines = emitForestLines;
function getColMap(trees) {
    const eventSet = new Set();
    for (const tree of trees) {
        const stack = [tree];
        while (stack.length > 0) {
            const cur = stack.pop();
            eventSet.add(cur.start);
            eventSet.add(cur.end);
            for (const child of cur.children) {
                stack.push(child);
            }
        }
    }
    const events = [...eventSet];
    events.sort((a, b) => a - b);
    let maxDigits = 1;
    for (const event of events) {
        maxDigits = Math.max(maxDigits, event.toString(10).length);
    }
    const colWidth = maxDigits + 3;
    const colMap = new Map();
    for (const [i, event] of events.entries()) {
        colMap.set(event, i * colWidth);
    }
    return colMap;
}
function emitTree(tree, colMap) {
    const layers = [];
    let nextLayer = [tree];
    while (nextLayer.length > 0) {
        const layer = nextLayer;
        layers.push(layer);
        nextLayer = [];
        for (const node of layer) {
            for (const child of node.children) {
                nextLayer.push(child);
            }
        }
    }
    return layers.map(layer => emitTreeLayer(layer, colMap));
}
function parseFunctionRanges(text, offsetMap) {
    const result = [];
    for (const line of text.split("\n")) {
        for (const range of parseTreeLayer(line, offsetMap)) {
            result.push(range);
        }
    }
    result.sort(compare_1.compareRangeCovs);
    return result;
}
exports.parseFunctionRanges = parseFunctionRanges;
/**
 *
 * @param layer Sorted list of disjoint trees.
 * @param colMap
 */
function emitTreeLayer(layer, colMap) {
    const line = [];
    let curIdx = 0;
    for (const { start, end, count } of layer) {
        const startIdx = colMap.get(start);
        const endIdx = colMap.get(end);
        if (startIdx > curIdx) {
            line.push(" ".repeat(startIdx - curIdx));
        }
        line.push(emitRange(count, endIdx - startIdx));
        curIdx = endIdx;
    }
    return line.join("");
}
function parseTreeLayer(text, offsetMap) {
    const result = [];
    const regex = /\[(\d+)-*\)/gs;
    while (true) {
        const match = regex.exec(text);
        if (match === null) {
            break;
        }
        const startIdx = match.index;
        const endIdx = startIdx + match[0].length;
        const count = parseInt(match[1], 10);
        const startOffset = offsetMap.get(startIdx);
        const endOffset = offsetMap.get(endIdx);
        if (startOffset === undefined || endOffset === undefined) {
            throw new Error(`Invalid offsets for: ${JSON.stringify(text)}`);
        }
        result.push({ startOffset, endOffset, count });
    }
    return result;
}
function emitRange(count, len) {
    const rangeStart = `[${count.toString(10)}`;
    const rangeEnd = ")";
    const hyphensLen = len - (rangeStart.length + rangeEnd.length);
    const hyphens = "-".repeat(Math.max(0, hyphensLen));
    return `${rangeStart}${hyphens}${rangeEnd}`;
}
function emitOffsets(colMap) {
    let line = "";
    for (const [event, col] of colMap) {
        if (line.length < col) {
            line += " ".repeat(col - line.length);
        }
        line += event.toString(10);
    }
    return line;
}
function parseOffsets(text) {
    const result = new Map();
    const regex = /\d+/gs;
    while (true) {
        const match = regex.exec(text);
        if (match === null) {
            break;
        }
        result.set(match.index, parseInt(match[0], 10));
    }
    return result;
}
exports.parseOffsets = parseOffsets;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDakQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBWEQsb0NBV0MiLCJmaWxlIjoiYXNjaWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wYXJlUmFuZ2VDb3ZzIH0gZnJvbSBcIi4vY29tcGFyZVwiO1xuaW1wb3J0IHsgUmFuZ2VDb3YgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUmVhZG9ubHlSYW5nZVRyZWUge1xuICByZWFkb25seSBzdGFydDogbnVtYmVyO1xuICByZWFkb25seSBlbmQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgY291bnQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IFJlYWRvbmx5UmFuZ2VUcmVlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Rm9yZXN0KHRyZWVzOiBSZWFkb25seUFycmF5PFJlYWRvbmx5UmFuZ2VUcmVlPik6IHN0cmluZyB7XG4gIHJldHVybiBlbWl0Rm9yZXN0TGluZXModHJlZXMpLmpvaW4oXCJcXG5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbWl0Rm9yZXN0TGluZXModHJlZXM6IFJlYWRvbmx5QXJyYXk8UmVhZG9ubHlSYW5nZVRyZWU+KTogc3RyaW5nW10ge1xuICBjb25zdCBjb2xNYXA6IE1hcDxudW1iZXIsIG51bWJlcj4gPSBnZXRDb2xNYXAodHJlZXMpO1xuICBjb25zdCBoZWFkZXI6IHN0cmluZyA9IGVtaXRPZmZzZXRzKGNvbE1hcCk7XG4gIHJldHVybiBbaGVhZGVyLCAuLi50cmVlcy5tYXAodHJlZSA9PiBlbWl0VHJlZSh0cmVlLCBjb2xNYXApLmpvaW4oXCJcXG5cIikpXTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sTWFwKHRyZWVzOiBJdGVyYWJsZTxSZWFkb25seVJhbmdlVHJlZT4pOiBNYXA8bnVtYmVyLCBudW1iZXI+IHtcbiAgY29uc3QgZXZlbnRTZXQ6IFNldDxudW1iZXI+ID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IHRyZWUgb2YgdHJlZXMpIHtcbiAgICBjb25zdCBzdGFjazogUmVhZG9ubHlSYW5nZVRyZWVbXSA9IFt0cmVlXTtcbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY3VyOiBSZWFkb25seVJhbmdlVHJlZSA9IHN0YWNrLnBvcCgpITtcbiAgICAgIGV2ZW50U2V0LmFkZChjdXIuc3RhcnQpO1xuICAgICAgZXZlbnRTZXQuYWRkKGN1ci5lbmQpO1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjdXIuY2hpbGRyZW4pIHtcbiAgICAgICAgc3RhY2sucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IGV2ZW50czogbnVtYmVyW10gPSBbLi4uZXZlbnRTZXRdO1xuICBldmVudHMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICBsZXQgbWF4RGlnaXRzOiBudW1iZXIgPSAxO1xuICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgIG1heERpZ2l0cyA9IE1hdGgubWF4KG1heERpZ2l0cywgZXZlbnQudG9TdHJpbmcoMTApLmxlbmd0aCk7XG4gIH1cbiAgY29uc3QgY29sV2lkdGg6IG51bWJlciA9IG1heERpZ2l0cyArIDM7XG4gIGNvbnN0IGNvbE1hcDogTWFwPG51bWJlciwgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgZm9yIChjb25zdCBbaSwgZXZlbnRdIG9mIGV2ZW50cy5lbnRyaWVzKCkpIHtcbiAgICBjb2xNYXAuc2V0KGV2ZW50LCBpICogY29sV2lkdGgpO1xuICB9XG4gIHJldHVybiBjb2xNYXA7XG59XG5cbmZ1bmN0aW9uIGVtaXRUcmVlKHRyZWU6IFJlYWRvbmx5UmFuZ2VUcmVlLCBjb2xNYXA6IE1hcDxudW1iZXIsIG51bWJlcj4pOiBzdHJpbmdbXSB7XG4gIGNvbnN0IGxheWVyczogUmVhZG9ubHlSYW5nZVRyZWVbXVtdID0gW107XG4gIGxldCBuZXh0TGF5ZXI6IFJlYWRvbmx5UmFuZ2VUcmVlW10gPSBbdHJlZV07XG4gIHdoaWxlIChuZXh0TGF5ZXIubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxheWVyOiBSZWFkb25seVJhbmdlVHJlZVtdID0gbmV4dExheWVyO1xuICAgIGxheWVycy5wdXNoKGxheWVyKTtcbiAgICBuZXh0TGF5ZXIgPSBbXTtcbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgbGF5ZXIpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBuZXh0TGF5ZXIucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXllcnMubWFwKGxheWVyID0+IGVtaXRUcmVlTGF5ZXIobGF5ZXIsIGNvbE1hcCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGdW5jdGlvblJhbmdlcyh0ZXh0OiBzdHJpbmcsIG9mZnNldE1hcDogTWFwPG51bWJlciwgbnVtYmVyPik6IFJhbmdlQ292W10ge1xuICBjb25zdCByZXN1bHQ6IFJhbmdlQ292W10gPSBbXTtcbiAgZm9yIChjb25zdCBsaW5lIG9mIHRleHQuc3BsaXQoXCJcXG5cIikpIHtcbiAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHBhcnNlVHJlZUxheWVyKGxpbmUsIG9mZnNldE1hcCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHJhbmdlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnNvcnQoY29tcGFyZVJhbmdlQ292cyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBsYXllciBTb3J0ZWQgbGlzdCBvZiBkaXNqb2ludCB0cmVlcy5cbiAqIEBwYXJhbSBjb2xNYXBcbiAqL1xuZnVuY3Rpb24gZW1pdFRyZWVMYXllcihsYXllcjogUmVhZG9ubHlSYW5nZVRyZWVbXSwgY29sTWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+KTogc3RyaW5nIHtcbiAgY29uc3QgbGluZTogc3RyaW5nW10gPSBbXTtcbiAgbGV0IGN1cklkeDogbnVtYmVyID0gMDtcbiAgZm9yIChjb25zdCB7c3RhcnQsIGVuZCwgY291bnR9IG9mIGxheWVyKSB7XG4gICAgY29uc3Qgc3RhcnRJZHg6IG51bWJlciA9IGNvbE1hcC5nZXQoc3RhcnQpITtcbiAgICBjb25zdCBlbmRJZHg6IG51bWJlciA9IGNvbE1hcC5nZXQoZW5kKSE7XG4gICAgaWYgKHN0YXJ0SWR4ID4gY3VySWR4KSB7XG4gICAgICBsaW5lLnB1c2goXCIgXCIucmVwZWF0KHN0YXJ0SWR4IC0gY3VySWR4KSk7XG4gICAgfVxuICAgIGxpbmUucHVzaChlbWl0UmFuZ2UoY291bnQsIGVuZElkeCAtIHN0YXJ0SWR4KSk7XG4gICAgY3VySWR4ID0gZW5kSWR4O1xuICB9XG4gIHJldHVybiBsaW5lLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHJlZUxheWVyKHRleHQ6IHN0cmluZywgb2Zmc2V0TWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+KTogUmFuZ2VDb3ZbXSB7XG4gIGNvbnN0IHJlc3VsdDogUmFuZ2VDb3ZbXSA9IFtdO1xuICBjb25zdCByZWdleDogUmVnRXhwID0gL1xcWyhcXGQrKS0qXFwpL2dzO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IG1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHJlZ2V4LmV4ZWModGV4dCk7XG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRJZHg6IG51bWJlciA9IG1hdGNoLmluZGV4ITtcbiAgICBjb25zdCBlbmRJZHg6IG51bWJlciA9IHN0YXJ0SWR4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuICAgIGNvbnN0IGNvdW50OiBudW1iZXIgPSBwYXJzZUludChtYXRjaFsxXSwgMTApO1xuICAgIGNvbnN0IHN0YXJ0T2Zmc2V0OiBudW1iZXIgfCB1bmRlZmluZWQgPSBvZmZzZXRNYXAuZ2V0KHN0YXJ0SWR4KTtcbiAgICBjb25zdCBlbmRPZmZzZXQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IG9mZnNldE1hcC5nZXQoZW5kSWR4KTtcbiAgICBpZiAoc3RhcnRPZmZzZXQgPT09IHVuZGVmaW5lZCB8fCBlbmRPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG9mZnNldHMgZm9yOiAke0pTT04uc3RyaW5naWZ5KHRleHQpfWApO1xuICAgIH1cbiAgICByZXN1bHQucHVzaCh7c3RhcnRPZmZzZXQsIGVuZE9mZnNldCwgY291bnR9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlbWl0UmFuZ2UoY291bnQ6IG51bWJlciwgbGVuOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCByYW5nZVN0YXJ0OiBzdHJpbmcgPSBgWyR7Y291bnQudG9TdHJpbmcoMTApfWA7XG4gIGNvbnN0IHJhbmdlRW5kOiBzdHJpbmcgPSBcIilcIjtcbiAgY29uc3QgaHlwaGVuc0xlbjogbnVtYmVyID0gbGVuIC0gKHJhbmdlU3RhcnQubGVuZ3RoICsgcmFuZ2VFbmQubGVuZ3RoKTtcbiAgY29uc3QgaHlwaGVuczogc3RyaW5nID0gXCItXCIucmVwZWF0KE1hdGgubWF4KDAsIGh5cGhlbnNMZW4pKTtcbiAgcmV0dXJuIGAke3JhbmdlU3RhcnR9JHtoeXBoZW5zfSR7cmFuZ2VFbmR9YDtcbn1cblxuZnVuY3Rpb24gZW1pdE9mZnNldHMoY29sTWFwOiBNYXA8bnVtYmVyLCBudW1iZXI+KTogc3RyaW5nIHtcbiAgbGV0IGxpbmU6IHN0cmluZyA9IFwiXCI7XG4gIGZvciAoY29uc3QgW2V2ZW50LCBjb2xdIG9mIGNvbE1hcCkge1xuICAgIGlmIChsaW5lLmxlbmd0aCA8IGNvbCkge1xuICAgICAgbGluZSArPSBcIiBcIi5yZXBlYXQoY29sIC0gbGluZS5sZW5ndGgpO1xuICAgIH1cbiAgICBsaW5lICs9IGV2ZW50LnRvU3RyaW5nKDEwKTtcbiAgfVxuICByZXR1cm4gbGluZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0cyh0ZXh0OiBzdHJpbmcpOiBNYXA8bnVtYmVyLCBudW1iZXI+IHtcbiAgY29uc3QgcmVzdWx0OiBNYXA8bnVtYmVyLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICBjb25zdCByZWdleDogUmVnRXhwID0gL1xcZCsvZ3M7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSByZWdleC5leGVjKHRleHQpO1xuICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlc3VsdC5zZXQobWF0Y2guaW5kZXgsIHBhcnNlSW50KG1hdGNoWzBdLCAxMCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9