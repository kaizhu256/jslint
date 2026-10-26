# branch sweep of jslint.mjs — findings, 2026-10-25, at alpha 49a0629

Tool: `node branch_sweep/sweep.mjs branch_sweep/report.md` from the repo root,
5 s. It lints every `// test_cause:` fixture source (675) and every tracked
`*.mjs` and `*.js` file (5) under V8 precise coverage, and maps each V8 block
of jslint.mjs to the shortest fixture source that runs it. V8 reports a block
only when its count differs from its parent's, so a block is seen when some
lint skipped it, and a lint ran it iff its function ran and no zero range of
that lint contains it.

Numbers: 1771 blocks; 90 no fixture runs; 43 of those nothing here runs. The
suite's 100.00 % line coverage holds; these are blocks the fixtures, which lint
with `beta: true` only, never reach.

## 1. A stop on valid syntax, old, not a regression (master stops too)

`0B1`, `0O7`, `0X1F`, `0XaBn` stop with `unexpected_a_after_b` "Unexpected 'B'
after '0'". Uppercase radix prefixes are valid ES2015 (`0B`, `0O`) and ES3
(`0X`). `lex_number` switches on lowercase `b`, `o`, `x` only. A warn-and-
continue, e.g. `expected_a_b` "0b" for "0B", would follow "warn, not stop,
wherever linting can continue". Owner's call; nothing changed here.

## 2. Reachable, undocumented: 24 blocks no fixture runs, each probed green

Each lints without a stop or a codeless warning. A `(live)` fixture at each
would document the path; the probe sources are the candidates.

| line | function | path | probe source |
|---|---|---|---|
| 1412 | `scope_report_push` | a named function expression using its own name is listed nowhere | `let cc = function aa() { return aa; }; cc();` |
| 3407, 3408, 4312, 4314 | `lex_number`, `read_digits` | binary and octal literals | `let aa = 0b101;`, `let aa = 0o17;` |
| 3414 | `lex_number` | BigInt suffix on a prefixed literal | `let aa = 0x1fn;` |
| 3422 | `lex_number` | exponent with sign | `let aa = 1e+5;` |
| 3861, 3872 | `lex_regexp` | flags `d` and `s` | `let aa = /./d;`, `let aa = /./s;` |
| 3983 | `lex_slash_or_regexp` | regexp after `return` | `function aa() { return /./; }` |
| 4246, 4251 | `option_set_item` | legacy aliases `evil`, `name` | `/*jslint evil*/`, `/*jslint name*/` |
| 4292 | (option) | `couch` globals | `/*jslint couch*/` |
| 4684 | `jslint_phase2_lex` | shebang line | `#!/usr/bin/env node` |
| 6429 | `prefix_async` | async arrow with parens | `let bb = async (cc) => cc;` |
| 6944, 6957 | `prefix_function` | a default holding a megastring, shown as `…` in the report | ``function aa(bb = `cc`) {}`` |
| 7812 | `stmt_for` | `for await` in an async function | `async function aa(bb) { for await (const cc of bb) {} }` |
| 8168, 8194, 8211 | `stmt_import` | `import aa, {bb}`, `import {aa, bb}`, `import ... with {}` | see probe |
| 9486 | `post_a_assignment` | `??=` or `||=` assigning an unassigned variable | `let aa; aa ??= 0;` |
| 9825 | `post_b_lparen` | `new Array(n, "string")` | `let aa = new Array(0, "bb");` |
| 8865 | `survey` | a template-literal property name that is not an identifier | not probed |

## 3. Option-only paths: 16 blocks, reached by test.mjs, not by a fixture

Fixtures lint with `beta: true` only, so these need an option or a test hook:
`max_len` (1160), autofix (1927, 1941), `test_internal_error` and
`test_unknown_warning_code` (1821, 1983-1999, 2394-2407), the stack-trace
return (2048), `json` arrays (6164), `indent` (10641, 10828), `white` (11203),
and `browser`, `couch`, `devel`, `node` globals (A2 rows 4260-4297, 9126-9133,
reached by the wrapper files). Documenting them needs a 6th fixture field or a
directive in the source, e.g. `/*jslint indent:2*/`; a directive works today
for the options that have one.

## 4. Section A2 of the report: 47 blocks only the file corpus runs

Whitage and regexp-group paths that jslint.mjs's own source exercises
(`whitage_default`, `whitage_opener`, `lex_regexp_group` lookbehind and named
groups, `optional_chain`). Each is a fixture candidate; the report names the
file that reaches it.

## 5. Not found

No dead block in the linter proper: every block nothing here runs is either
option-gated or reached by a probe above. No crash and no codeless warning on
any probe.
