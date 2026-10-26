// usage, from the repo root: node branch_sweep/sweep.mjs [report.md]
//
// This script will lint every '// test_cause:' fixture source, then every
// tracked *.mjs and *.js file, under V8 precise coverage, and report for each
// block of jslint.mjs (a V8 block: an if or else body, a case clause, a loop
// body, a ternary arm, a right leg of && or ||, the rest of a block after a
// jump) the shortest fixture source that runs it. Blocks no fixture runs are
// listed first, split into those the file corpus runs and those nothing here
// runs.
//
// V8 reports a block range only when its count differs from its parent's, so
// a block shows up as a range when some lint skipped it (count 0), and a lint
// ran a block iff its function ran and no zero range of that lint contains it.

import moduleChildProcess from "node:child_process";
import moduleFs from "node:fs";
import moduleInspector from "node:inspector/promises";
import modulePath from "node:path";
import moduleUrl from "node:url";

const fileJslint = modulePath.resolve("jslint.mjs");
const fileReport = process.argv[2] || "branch_sweep.md";
const sourceJslintMjs = moduleFs.readFileSync(fileJslint, "utf8");
const {jslint} = (await import(moduleUrl.pathToFileURL(fileJslint))).default;

function lineOf(offset) {
    return sourceJslintMjs.slice(0, offset).split("\n").length;
}

function fixtureSources() {

// This function will return the distinct fixture sources of every
// '// test_cause:' block in jslint.mjs, parsed as test.mjs parses them,
// shortest first.

    const list = [];
    sourceJslintMjs.replace((
        /(\n\s*?\/\/\s*?test_cause:\s*?)(\S[\S\s]*?\S)(\n\n\s*?) *?\S/g
    ), function (ignore, header, causeList) {
        causeList = causeList.replace((
            /^\/\/ /gm
        ), "").replace((
            /^\["\n([\S\s]*?)\n"(,.*?)$/gm
        ), function (ignore, source, param) {
            return "[" + JSON.stringify(source) + param;
        }).replace((
            / \/\/jslint-ignore-line$/gm
        ), "");
        causeList.split("\n").forEach(function (cause) {
            list.push(JSON.parse(cause)[0]);
        });
        return "";
    });
    return Array.from(new Set(list)).sort(function (aa, bb) {
        return aa.length - bb.length || (aa < bb ? -1 : 1);
    });
}

function corpusSources() {

// This function will return every tracked *.mjs and *.js file as a source,
// the self-lint corpus, named by path.

    return moduleChildProcess.execSync(
        "git ls-files -- \"*.mjs\" \"*.js\"",
        {encoding: "utf8"}
    ).trim().split("\n").map(function (file) {
        return [file, moduleFs.readFileSync(file, "utf8")];
    });
}

const session = new moduleInspector.Session();
session.connect();
await session.post("Profiler.enable");
await session.post("Profiler.startPreciseCoverage", {
    callCount: true,
    detailed: true
});

const blockDict = {};
const lintList = [];

async function measure(label, source, isFixture) {

// This function will lint <source> and record which function ranges ran and
// which ranges had count 0, and register every non-function range as a block.

    const rec = {funcs: [], isFixture, label, source, zero: []};
    jslint(source, {
        beta: true
    });
    const {result} = await session.post("Profiler.takePreciseCoverage");
    result.find(function ({url}) {
        return url.endsWith("/jslint.mjs");
    }).functions.forEach(function ({functionName, ranges}) {
        ranges.forEach(function ({count, endOffset, startOffset}, ii) {
            if (ii === 0 && count > 0) {
                rec.funcs.push([startOffset, endOffset]);
            }
            if (count === 0) {
                rec.zero.push([startOffset, endOffset]);
            }
            if (ii > 0) {
                blockDict[startOffset + "-" + endOffset] = {
                    end: endOffset,
                    fn: functionName,
                    start: startOffset
                };
            }
        });
    });
    lintList.push(rec);
}

function contains([start, end], block) {
    return start <= block.start && block.end <= end;
}

function ran(rec, block) {
    return rec.funcs.some(function (range) {
        return contains(range, block);
    }) && !rec.zero.some(function (range) {
        return contains(range, block);
    });
}

// Prime, so the import's own coverage is not charged to the first source.

await session.post("Profiler.takePreciseCoverage");
const fixtureList = fixtureSources();
for (const source of fixtureList) {
    await measure("fixture", source, true);
}
const corpusList = corpusSources();
for (const [file, source] of corpusList) {
    await measure(file, source, false);
}
const blockList = Object.values(blockDict).sort(function (aa, bb) {
    return aa.start - bb.start || aa.end - bb.end;
});
blockList.forEach(function (block) {
    const rec = lintList.find(function (rec) {
        return rec.isFixture && ran(rec, block);
    });
    block.fixture = rec?.source;
    block.corpus = lintList.find(function (rec) {
        return !rec.isFixture && ran(rec, block);
    })?.label;
});
const unreached = blockList.filter(function ({fixture}) {
    return fixture === undefined;
});
const nothing = unreached.filter(function ({corpus}) {
    return corpus === undefined;
});

function snippet({end, start}) {
    return JSON.stringify(
        sourceJslintMjs.slice(start, Math.min(end, start + 70))
            .replace(/\s+/g, " ")
    );
}

function row(block) {
    return (
        "| " + lineOf(block.start) + " | `" + block.fn + "` | " +
        snippet(block) + " | " + (
            block.fixture !== undefined
            ? "`" + JSON.stringify(block.fixture) + "`"
            : block.corpus !== undefined
            ? "corpus: " + block.corpus
            : "NOTHING"
        ) + " |"
    );
}

const report = [
    "# branch sweep of jslint.mjs",
    "",
    "- fixture sources: " + fixtureList.length,
    "- corpus files: " + corpusList.length,
    "- V8 blocks (ranges past each function's own): " + blockList.length,
    "- blocks no fixture runs: " + unreached.length,
    "- of those, blocks nothing here runs: " + nothing.length,
    "",
    "## A1. blocks nothing here runs — dead, or reached only by test.mjs",
    "",
    "| line | function | block | reached by |",
    "|---|---|---|---|",
    ...nothing.map(row),
    "",
    "## A2. blocks only the file corpus runs — an undocumented path",
    "",
    "| line | function | block | reached by |",
    "|---|---|---|---|",
    ...unreached.filter(function ({corpus}) {
        return corpus !== undefined;
    }).map(row),
    "",
    "## B. every block, with the shortest fixture source that runs it",
    "",
    "| line | function | block | reached by |",
    "|---|---|---|---|",
    ...blockList.filter(function ({fixture}) {
        return fixture !== undefined;
    }).map(row),
    ""
].join("\n");
moduleFs.writeFileSync(fileReport, report);
console.error(report.split("\n").slice(0, 7).join("\n"));
