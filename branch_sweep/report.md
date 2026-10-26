# branch sweep of jslint.mjs

- fixture sources: 675
- corpus files: 5
- V8 blocks (ranges past each function's own): 1771
- blocks no fixture runs: 90
- of those, blocks nothing here runs: 43

## A1. blocks nothing here runs — dead, or reached only by test.mjs

| line | function | block | reached by |
|---|---|---|---|
| 1160 | `jslint` | "? 256" | NOTHING |
| 1412 | `scope_report_push` | "{ // PR-516 - A function using its own name from <scope_name> lists i" | NOTHING |
| 1821 | `warn_at` | "default: jslint_assert(undefined, `unknown_warning_code=${" | NOTHING |
| 1927 | `` | "{ // PR-511 - jslint-autofix - Warning 'too_long' no longer blocks au" | NOTHING |
| 1941 | `jslint` | "{ autofixed = jslint_phase6_autofix(state) || state.source" | NOTHING |
| 1983 | `jslint` | "{ jslint_assert(undefined, \"test_internal_error\"); " | NOTHING |
| 1986 | `jslint` | "{ warn_at(\"test_unknown_warning_code\", jslint_fudge, 0); " | NOTHING |
| 1993 | `jslint` | "{ err.column = jslint_fudge; err.line = jslint" | NOTHING |
| 1999 | `jslint` | "{ warning_list.push(err); }" | NOTHING |
| 2048 | `jslint` | "? line_list[jslint_fudge].line_source" | NOTHING |
| 2394 | `jslint_assert` | " error = new Error( `This was caused by a bug in JSLint. P" | NOTHING |
| 2404 | `jslint_assert` | "case \"unknown_warning_code=test_unknown_warning_code\": error =" | NOTHING |
| 2407 | `jslint_assert` | " console.error(error); throw error; " | NOTHING |
| 3407 | `lex_number` | "case \"b\":" | NOTHING |
| 3408 | `lex_number` | "case \"o\":" | NOTHING |
| 3414 | `lex_number` | "{ char_after(\"n\"); }" | NOTHING |
| 3422 | `lex_number` | "{ char_after(char); if (char !== \"+\" &" | NOTHING |
| 3861 | `lex_regexp` | "case \"d\": break;" | NOTHING |
| 3872 | `lex_regexp` | "case \"s\": break;" | NOTHING |
| 3983 | `lex_slash_or_regexp` | "case \"return\": return lex_regexp();" | NOTHING |
| 4246 | `option_set_item` | "case \"evil\": return option_set_item(\"eval\", value);" | NOTHING |
| 4251 | `option_set_item` | "case \"name\": return option_set_item(\"nomen\", value);" | NOTHING |
| 4292 | `` | "? \"CouchDb\"" | NOTHING |
| 4312 | `read_digits` | "? jslint_rgx_digits_bits" | NOTHING |
| 4314 | `read_digits` | "? jslint_rgx_digits_octals" | NOTHING |
| 4684 | `jslint_phase2_lex` | "{ line += 1; state.mode_shebang = true; }" | NOTHING |
| 6164 | `parse_json` | " advance(\",\"); }" | NOTHING |
| 6429 | `prefix_async` | "{ // PR-414 - Parse async fart. advance(\"(\"); " | NOTHING |
| 6944 | `prefix_function` | "{ signature = ( " | NOTHING |
| 6957 | `prefix_function` | "&& default_from !== undefined" | NOTHING |
| 6957 | `prefix_function` | "{ default_megastring = true; " | NOTHING |
| 7812 | `stmt_for` | "{ scope_function.async = 2; }" | NOTHING |
| 8168 | `stmt_import` | " advance(\",\"); }" | NOTHING |
| 8194 | `stmt_import` | " advance(\",\"); }" | NOTHING |
| 8211 | `stmt_import` | "{ advance(\"with\"); advance(\"{\"); p" | NOTHING |
| 8865 | `survey` | "{ return id; }" | NOTHING |
| 9127 | `jslint_phase3_parse` | "{ advance(\";\"); }" | NOTHING |
| 9486 | `post_a_assignment` | "{ // PR-514 - Bugfix - '??=' and '||=' assign an unassigned variable," | NOTHING |
| 9825 | `post_b_lparen` | "|| arg[1].id === \"(string)\"" | NOTHING |
| 10641 | `jslint_phase5_whitage` | "? 2" | NOTHING |
| 10828 | `whitage_closer` | "? mode_indent" | NOTHING |
| 11042 | `whitage_default` | "&& !right.statement" | NOTHING |
| 11203 | `jslint_phase5_whitage` | "{ return; }" | NOTHING |

## A2. blocks only the file corpus runs — an undocumented path

| line | function | block | reached by |
|---|---|---|---|
| 1832 | `warn_at` | "{ warning.stack_trace = new Error().stack; }" | corpus: jslint.mjs |
| 3054 | `char_after_escape` | "{ return char_after(); }" | corpus: jslint.mjs |
| 3419 | `lex_number` | "{ read_digits(\"d\", mode_digits_numeric_separator); " | corpus: jslint.mjs |
| 3474 | `lex_regexp_bracketed` | "{ char_after(\"^\"); }" | corpus: jslint.mjs |
| 3637 | `lex_regexp_group` | "case \"!\":" | corpus: jslint.mjs |
| 3641 | `lex_regexp_group` | "case \"<\":" | corpus: jslint.mjs |
| 3645 | `lex_regexp_group` | "case \"=\": char_after(); " | corpus: jslint.mjs |
| 3710 | `lex_regexp_group` | "default: char_after(\":\");" | corpus: jslint.mjs |
| 4260 | `option_set_item` | "case \"browser\":" | corpus: jslint_wrapper_codemirror.js |
| 4261 | `option_set_item` | "case \"couch\":" | corpus: jslint_wrapper_codemirror.js |
| 4262 | `option_set_item` | "case \"devel\":" | corpus: jslint_wrapper_codemirror.js |
| 4270 | `` | "&& dict_name === \"node_auto\"" | corpus: jslint_wrapper_codemirror.js |
| 4273 | `` | "{ switch (dict_name === \"node_auto\" && key" | corpus: jslint.mjs |
| 4275 | `` | "case \"browser\": if (is_global.includes" | corpus: jslint_wrapper_codemirror.js |
| 4276 | `` | "{ global_dict[name] = \"browser\"; " | corpus: jslint_wrapper_codemirror.js |
| 4280 | `` | "case \"node\": if (is_global.includes(\"n" | corpus: jslint.mjs |
| 4281 | `` | "{ global_dict[name] = \"Node.js\"; " | corpus: jslint.mjs |
| 4290 | `` | "? \"browser\"" | corpus: jslint_wrapper_codemirror.js |
| 4294 | `` | "? \"development\"" | corpus: jslint_wrapper_codemirror.js |
| 4297 | `` | ": \"Node.js\"" | corpus: jslint.mjs |
| 4935 | `block` | "{ token_nxt.statement = true; advance(\"(string" | corpus: jslint_wrapper_codemirror.js |
| 5683 | `infix_lparen` | "{ the_argument.wrapped = true; }" | corpus: jslint.mjs |
| 5959 | `optional_chain` | "case \"(\":" | corpus: jslint.mjs |
| 5960 | `optional_chain` | "case \"[\": thing = thing.expression[0]; " | corpus: jslint.mjs |
| 6593 | `name_parse` | " token_nxt.name_alias = name; name = t" | corpus: jslint.mjs |
| 6918 | `prefix_function` | "&& ![\"(\", \"[\", \"{\"].includes(token_before." | corpus: jslint.mjs |
| 6919 | `prefix_function` | "&& ![\")\", \",\", \"]\", \"}\"].includes(token.id" | corpus: jslint.mjs |
| 6922 | `prefix_function` | "? \" \"" | corpus: jslint.mjs |
| 7590 | `stmt_delete` | "|| the_value.arity !== \"binary\"" | corpus: jslint.mjs |
| 8500 | `stmt_switch` | "&& the_last.disrupt" | corpus: jslint.mjs |
| 8858 | `survey` | "{ return id; }" | corpus: jslint.mjs |
| 9126 | `jslint_phase3_parse` | "{ if (token_nxt.id === \";\") { advance(\";\"); " | corpus: jslint_wrapper_codemirror.js |
| 9133 | `jslint_phase3_parse` | "{ advance(\"(string)\"); semicolon(); }" | corpus: jslint_wrapper_vscode.js |
| 9503 | `post_a_assignment` | "|| thing.id !== \"+=\"" | corpus: jslint.mjs |
| 10812 | `whitage_closer` | "{ dot_depth -= 1; }" | corpus: jslint.mjs |
| 10883 | `whitage_default` | "{ at_margin(-mode_indent); return; }" | corpus: jslint.mjs |
| 10903 | `whitage_default` | "&& left.line === right.line" | corpus: jslint.mjs |
| 10974 | `whitage_default` | " at_margin(mode_indent); return; }" | corpus: jslint.mjs |
| 11060 | `whitage_default` | "|| left.id === \"-\"" | corpus: jslint.mjs |
| 11064 | `whitage_default` | "|| right.id === \"-\"" | corpus: jslint.mjs |
| 11090 | `whitage_default` | "{ no_space_only(); return; }" | corpus: jslint.mjs |
| 11119 | `whitage_opener` | "{ dot_depth += 1; if (dot_depth === 2) { " | corpus: jslint.mjs |
| 11121 | `whitage_opener` | "{ margin += mode_indent; }" | corpus: jslint.mjs |
| 11164 | `whitage_opener` | "{ at_margin(-mode_indent); }" | corpus: jslint.mjs |
| 11173 | `whitage_opener` | "|| left.line !== right.line" | corpus: jslint.mjs |
| 11261 | `` | "case \".\":" | corpus: jslint.mjs |
| 11262 | `` | "case \"?.\": dot_depth = dot_depth || 1; " | corpus: jslint.mjs |

## B. every block, with the shortest fixture source that runs it

| line | function | block | reached by |
|---|---|---|---|
| 1195 | `artifact` | "|| state.token_nxt" | `"}"` |
| 1197 | `artifact` | "|| the_token.id === \"(number)\"" | `"!"` |
| 1198 | `artifact` | "? String(the_token.value)" | `"0"` |
| 1199 | `artifact` | ": the_token.id" | `"!"` |
| 1223 | `is_equal` | "{ return ( Array.isArray(bb) && " | `"aa=bb``&&bb``"` |
| 1223 | `is_equal` | "{ return ( Array.isArray(bb) && " | `"0!=0"` |
| 1226 | `is_equal` | "&& aa.every(function (value, index) { // test_cause: " | `"aa=bb``&&bb``"` |
| 1236 | `is_equal` | " // PR-510 - deadcode-confirmed - If <aa> is not an array then <bb> i" | `"0!=0"` |
| 1236 | `is_equal` | " // PR-510 - deadcode-confirmed - If <aa> is not an array then <bb> i" | `"0!=0"` |
| 1251 | `is_equal` | "&& aa.id" | `"0!=0"` |
| 1252 | `is_equal` | "case \"(number)\":" | `"0!=0"` |
| 1253 | `is_equal` | "case \"(string)\": return aa.value === bb.value;" | `"0!=0"` |
| 1255 | `is_equal` | "case \"`\": // test_cause: // [\"aa=bb`${cc}${dd}`&&bb`${cc}${ee}`\", \"is" | `"aa=bb``&&bb``"` |
| 1265 | `is_equal` | "&& // PR-510 - Bugfix - Fix jslint treating tagged-megastrings as equ" | `"aa=bb``&&bb``"` |
| 1272 | `is_equal` | " if (is_weird(aa) " | `"0<0<0"` |
| 1272 | `is_equal` | " if (is_weird(aa) || is_weird(bb)" | `"0<0<0"` |
| 1273 | `is_equal` | "|| is_weird(bb)" | `"0<0<0"` |
| 1273 | `is_equal` | "{ // test_cause: // [\"aa(/./)||{}\", \"is_equal\", \"(live)\", \"\", 0] " | `"aa(/./)||{}"` |
| 1273 | `is_equal` | "{ // test_cause: // [\"aa(/./)||{}\", \"is_equal\", \"(live)\", \"\", 0] " | `"0<0<0"` |
| 1279 | `is_equal` | " if (aa.arity === bb.arity " | `"0<0<0"` |
| 1279 | `is_equal` | " if (aa.arity === bb.arity && aa.id === bb.id" | `"0<0<0"` |
| 1280 | `is_equal` | "&& aa.id === bb.id" | `"+0&&+0"` |
| 1280 | `is_equal` | "{ if (aa.id === \".\" || aa.id === \"?.\") { // test_cause: /" | `"+0&&+0"` |
| 1280 | `is_equal` | "{ if (aa.id === \".\" || aa.id === \"?.\") { // test_cause: /" | `"0<0<0"` |
| 1281 | `is_equal` | "|| aa.id === \"?.\"" | `"+0&&+0"` |
| 1281 | `is_equal` | "{ // test_cause: // [\"aa.bb&&aa.bb\", \"is_equal\", \"(live)\", \"\", 0] // " | `"aa.bb&&aa.bb"` |
| 1288 | `is_equal` | "&& is_equal(aa.name, bb.name)" | `"aa.bb&&aa.bb"` |
| 1291 | `is_equal` | " if (aa.arity === \"unary\") " | `"+0&&+0"` |
| 1292 | `is_equal` | "{ // test_cause: // [\"+0&&+0\", \"is_equal\", \"(live)\", \"\", 0] " | `"+0&&+0"` |
| 1292 | `is_equal` | "{ // test_cause: // [\"+0&&+0\", \"is_equal\", \"(live)\", \"\", 0] " | `"+0&&+0"` |
| 1298 | `is_equal` | " if (aa.arity === \"binary\") " | `"NaN===NaN"` |
| 1298 | `is_equal` | " if (aa.arity === \"binary\") { // test_cause: // [\"aa[0]&&" | `"NaN===NaN"` |
| 1299 | `is_equal` | "{ // test_cause: // [\"aa[0]&&aa[0]\", \"is_equal\", \"(live)\", \"\", 0] " | `"aa[0]&&aa[0]"` |
| 1299 | `is_equal` | "{ // test_cause: // [\"aa[0]&&aa[0]\", \"is_equal\", \"(live)\", \"\", 0] " | `"NaN===NaN"` |
| 1305 | `is_equal` | "&& is_equal(aa.expression[0], bb.expression[0])" | `"aa[0]&&aa[0]"` |
| 1306 | `is_equal` | "&& is_equal(aa.expression[1], bb.expression[1])" | `"aa[0]&&aa[0]"` |
| 1309 | `is_equal` | " if (aa.arity === \"ternary\") " | `"NaN===NaN"` |
| 1309 | `is_equal` | " if (aa.arity === \"ternary\") { // test_cause: // [\"aa=(``" | `"NaN===NaN"` |
| 1310 | `is_equal` | "{ // test_cause: // [\"aa=(``?``:``)&&(``?``:``)\", \"is_equal\", \"(live)" | `"aa=(``?``:``)&&(``?``:``)"` |
| 1320 | `is_equal` | " // PR-510 - deadcode-confirmed - Nothing in this file sets <arity> t" | `"NaN===NaN"` |
| 1344 | `is_equal` | " // test_cause: // [\"null&&undefined\", \"is_equal\", \"(live)\", \"\", 0] " | `"0<0<0"` |
| 1354 | `is_weird` | "case \"(regexp)\": return true;" | `"aa=/./&&/./"` |
| 1356 | `is_weird` | "case \"=>\": return true;" | `"aa=(()=>0)&&(()=>0)"` |
| 1358 | `is_weird` | "case \"[\": return thing.arity === \"unary\";" | `"aa[[0]]"` |
| 1360 | `is_weird` | "case \"function\": return true;" | `"aa=function aa(){}&&function aa(){}"` |
| 1362 | `is_weird` | "case \"{\": return true;" | `"aa={}&&{}"` |
| 1364 | `is_weird` | "default: return false;" | `"0!=0"` |
| 1379 | `scope_block_push` | "{ value.context = empty(); }" | `";{}"` |
| 1383 | `scope_block_push` | "{ block_list.push(value); }" | `"\t"` |
| 1400 | `scope_function_push` | "{ function_list.push(value); }" | `"()=>0"` |
| 1429 | `stop` | "|| state.token_nxt" | `"[.0]"` |
| 1448 | `warn` | "|| state.token_nxt" | `"[//]"` |
| 1453 | `warn` | "|| artifact(the_token)" | `"!"` |
| 1462 | `warn` | "{ return the_warning; }" | `"0 //jslint-ignore-line"` |
| 1464 | `warn` | " // If there is already a warning on this token, suppress the new one" | `"!"` |
| 1464 | `warn` | " // If there is already a warning on this token, suppress the new one" | `"!"` |
| 1469 | `warn` | "{ warning_list.pop(); return the_warning; " | `";"` |
| 1469 | `warn` | "{ warning_list.pop(); return the_warning; " | `"!"` |
| 1472 | `warn` | " the_token.warning = the_warning; return the_warning; " | `"!"` |
| 1495 | `warn_at` | "{ // Handle premature EOF. warning.line = line_list.leng" | `"!"` |
| 1518 | `warn_at` | "case \"bad_assignment_a\": mm = `Bad assignment to '${a}'.`;" | `"0=0"` |
| 1521 | `warn_at` | "case \"bad_directive_a\": mm = `Bad directive '${a}'.`; " | `"/*jslint !*/"` |
| 1524 | `warn_at` | "case \"bad_get\": mm = `A get function takes no parameters.`" | `"/*jslint getset*/\naa={get aa(aa){}}"` |
| 1527 | `warn_at` | "case \"bad_module_name_a\": mm = `Bad module name '${a}'.`; " | `"import aa from \"!aa\""` |
| 1530 | `warn_at` | "case \"bad_option_a\": mm = `Bad option '${a}'.`; " | `"/*global aa:false*/"` |
| 1533 | `warn_at` | "case \"bad_set\": mm = `A set function takes one parameter.`" | `"/*jslint getset*/\naa={set aa(){}}"` |
| 1536 | `warn_at` | "case \"duplicate_a\": mm = `Duplicate '${a}'.`; " | `"aa={aa,aa}"` |
| 1539 | `warn_at` | "case \"empty_block\": mm = `Empty block.`; break" | `";{}"` |
| 1542 | `warn_at` | "case \"expected_a\": mm = `Expected '${a}'.`; br" | `"aa:do"` |
| 1545 | `warn_at` | "case \"expected_a_after_b\": mm = `Expected '${a}' after '${" | `"0"` |
| 1548 | `warn_at` | "case \"expected_a_at_b_c\": mm = ( `Expected" | `"String(\n0);"` |
| 1554 | `warn_at` | "case \"expected_a_at_end\": mm = `Expected '${a}' at the end" | `"let aa = [\n    0\n    + 0\n];"` |
| 1557 | `warn_at` | "case \"expected_a_b\": mm = `Expected '${a}' and instead saw" | `"}"` |
| 1560 | `warn_at` | "case \"expected_a_b_before_c_d\": mm = `Expected ${a} '${b}'" | `"aa={bb,aa}"` |
| 1563 | `warn_at` | "case \"expected_a_b_from_c_d\": mm = ( `Expe" | `"(/./"` |
| 1569 | `warn_at` | "case \"expected_a_before_b\": mm = `Expected '${a}' before '" | `".0"` |
| 1572 | `warn_at` | "case \"expected_digits_after_a\": mm = `Expected digits afte" | `"0x"` |
| 1575 | `warn_at` | "case \"expected_four_digits\": mm = `Expected four digits af" | `"\"\\u0\""` |
| 1578 | `warn_at` | "case \"expected_identifier_a\": mm = `Expected an identifier" | `"0=>0"` |
| 1581 | `warn_at` | "case \"expected_line_break_a_b\": mm = `Expected a line brea" | `"function aa(){}0"` |
| 1584 | `warn_at` | "case \"expected_regexp_factor_a\": mm = `Expected a regexp f" | `"/ /"` |
| 1587 | `warn_at` | "case \"expected_space_a_b\": mm = `Expected one space betwee" | `"/**//**/"` |
| 1590 | `warn_at` | "case \"expected_statements_a\": mm = `Expected statements be" | `"switch(0){case 0:}"` |
| 1593 | `warn_at` | "case \"expected_string_a\": mm = `Expected a string and inst" | `"typeof 0===0"` |
| 1596 | `warn_at` | "case \"expected_type_string_a\": mm = `Expected a type strin" | `"typeof 0===\"aa\""` |
| 1599 | `warn_at` | "case \"freeze_exports\": mm = ( `Expected 'O" | `"export default {}"` |
| 1613 | `warn_at` | "case \"illegal_num_separator\": mm = `Illegal numeric separa" | `"0x_"` |
| 1616 | `warn_at` | "case \"infix_in\": mm = ( `Unexpected 'in'. " | `"aa in aa"` |
| 1622 | `warn_at` | "case \"label_a\": mm = `'${a}' is a statement label.`; " | `"aa:while(0){aa}"` |
| 1625 | `warn_at` | "case \"misplaced_a\": mm = `Place '${a}' at the outermost le" | `"if(0){import aa from \"aa\";}"` |
| 1628 | `warn_at` | "case \"misplaced_directive_a\": mm = `Place the '/*${a}*/' d" | `"0\n/*global aa*/"` |
| 1631 | `warn_at` | "case \"missing_await_statement\": mm = `Expected await state" | `"async aa=>0"` |
| 1634 | `warn_at` | "case \"missing_m\": mm = `Expected 'm' flag on a multiline r" | `"aa=/$^/"` |
| 1637 | `warn_at` | "case \"naked_block\": mm = `Naked block.`; break" | `";{}"` |
| 1640 | `warn_at` | "case \"nested_comment\": mm = `Nested comment.`; " | `"/*/*"` |
| 1643 | `warn_at` | "case \"not_label_a\": mm = `'${a}' is not a label.`; " | `"break aa"` |
| 1646 | `warn_at` | "case \"number_isNaN\": mm = `Use Number.isNaN function to co" | `"isNaN(0)"` |
| 1649 | `warn_at` | "case \"redefinition_a_b\": mm = `Redefinition of '${a}' from" | `"let aa;let aa"` |
| 1652 | `warn_at` | "case \"redefinition_global_a_b\": mm = `Redefinition of glob" | `"let Array"` |
| 1655 | `warn_at` | "case \"required_a_optional_b\": mm = `Required parameter '${" | `"function aa(aa=0,[]){}"` |
| 1658 | `warn_at` | "case \"reserved_a\": mm = `Reserved name '${a}'.`; " | `"let undefined"` |
| 1661 | `warn_at` | "case \"subscript_a\": mm = `['${a}'] is better written in do" | `"aa[`aa`]"` |
| 1664 | `warn_at` | "case \"temporal_dead_zone_a\": mm = `'${a}' was used before " | `"let aa=aa"` |
| 1667 | `warn_at` | "case \"todo_comment\": mm = `Unexpected TODO comment.`; " | `"//todo"` |
| 1670 | `warn_at` | "case \"too_long\": mm = `Line is longer than 80 characters.`" | `"/////////////////////////////////////////////////////////////////////////////////"` |
| 1673 | `warn_at` | "case \"too_many_digits\": mm = `Too many digits.`; " | `"\"\\u{110000}\""` |
| 1676 | `warn_at` | "case \"unassigned_var_a\": mm = `Unassigned variable '${a}'." | `"let aa;aa();"` |
| 1679 | `warn_at` | "case \"unclosed_comment\": mm = `Unclosed comment.`; " | `"/*"` |
| 1682 | `warn_at` | "case \"unclosed_disable\": mm = ( `Directive" | `"/*jslint-disable*/"` |
| 1688 | `warn_at` | "case \"unclosed_mega\": mm = `Unclosed mega literal.`; " | `"`"` |
| 1691 | `warn_at` | "case \"unclosed_string\": mm = `Unclosed string.`; " | `"\""` |
| 1694 | `warn_at` | "case \"undeclared_a\": mm = `Undeclared '${a}'.`; " | `"aa"` |
| 1697 | `warn_at` | "case \"unexpected_a\": mm = `Unexpected '${a}'.`; " | `"!"` |
| 1700 | `warn_at` | "case \"unexpected_a_after_b\": mm = `Unexpected '${a}' after" | `" 0a"` |
| 1703 | `warn_at` | "case \"unexpected_a_before_b\": mm = `Unexpected '${a}' befo" | `"\"\\0\""` |
| 1706 | `warn_at` | "case \"unexpected_at_top_level_a\": mm = `Expected '${a}' to" | `"aa:do"` |
| 1709 | `warn_at` | "case \"unexpected_char_a\": mm = `Unexpected character '${a}" | `"#"` |
| 1712 | `warn_at` | "case \"unexpected_comment\": mm = `Unexpected comment.`; " | `"`${//}`"` |
| 1722 | `warn_at` | "case \"unexpected_expression_a\": mm = `Unexpected expressio" | `"0"` |
| 1725 | `warn_at` | "case \"unexpected_label_a\": mm = `Unexpected label '${a}'.`" | `"aa:"` |
| 1728 | `warn_at` | "case \"unexpected_parens\": mm = `Don't wrap function litera" | `"aa=(function(){})"` |
| 1731 | `warn_at` | "case \"unexpected_space_a_b\": mm = `Unexpected space betwee" | `"String( );"` |
| 1734 | `warn_at` | "case \"unexpected_statement_a\": mm = `Unexpected statement " | `"aa[aa=0]"` |
| 1737 | `warn_at` | "case \"unexpected_trailing_space\": mm = `Unexpected trailin" | `"\t"` |
| 1740 | `warn_at` | "case \"unexpected_typeof_a\": mm = ( `Unexpe" | `"typeof aa===\"undefined\""` |
| 1745 | `warn_at` | "case \"unopened_enable\": mm = ( `Directive " | `"/*jslint-enable*/"` |
| 1751 | `warn_at` | "case \"unreachable_a\": mm = `Unreachable '${a}'.`; " | `"while(0){break;0}"` |
| 1754 | `warn_at` | "case \"unregistered_property_a\": mm = `Unregistered propert" | `"/*property aa*/\naa.bb"` |
| 1757 | `warn_at` | "case \"unused_a\": mm = `Unused '${a}'.`; break;" | `"let aa;"` |
| 1760 | `warn_at` | "case \"use_double\": mm = `Use double quotes, not single quo" | `"''"` |
| 1766 | `warn_at` | "case \"use_function_not_fart\": mm = ( `Use " | `"()=>{}"` |
| 1772 | `warn_at` | "case \"use_open\": mm = ( `Wrap a ternary ex" | `"0?0:0"` |
| 1778 | `warn_at` | "case \"use_spaces\": mm = `Use spaces, not tabs.`; " | `"\t"` |
| 1781 | `warn_at` | "case \"var_on_top_a_b\": mm = `Move ${a} declaration to top " | `"String();let aa"` |
| 1784 | `warn_at` | "case \"var_switch\": mm = `Don't declare variables in a swit" | `"switch(0){case 0:var aa}"` |
| 1787 | `warn_at` | "case \"weird_condition_a\": mm = `Weird condition '${a}'.`; " | `"0&&0"` |
| 1790 | `warn_at` | "case \"weird_expression_a\": mm = `Weird expression '${a}'.`" | `"aa[[0]]"` |
| 1793 | `warn_at` | "case \"weird_loop\": mm = `Weird loop.`; break;" | `"function aa(){while(0){break}}"` |
| 1796 | `warn_at` | "case \"weird_property_a\": mm = `Weird property name '${a}'." | `"aa.$"` |
| 1799 | `warn_at` | "case \"weird_relation_a\": mm = `Weird relation '${a}'.`; " | `"0!=0"` |
| 1805 | `warn_at` | "case \"wrap_fart_parameter\": mm = `Wrap the parameter befor" | `"aa=>0"` |
| 1808 | `warn_at` | "case \"wrap_immediate\": mm = ( `Wrap an imm" | `"aa=function(){}()"` |
| 1815 | `warn_at` | "case \"wrap_regexp\": mm = `Wrap this regexp in parens to av" | `"!/./"` |
| 1818 | `warn_at` | "case \"wrap_subexpression_a_b\": mm = `Wrap the '${a}' subex" | `"0- -0"` |
| 1835 | `warn_at` | "{ // test_cause: // [\"0 //jslint-ignore-line\", \"warn_at\", \"(live)\", \"" | `"0 //jslint-ignore-line"` |
| 1841 | `warn_at` | " warning_list.push(warning); return warning; " | `"\t"` |
| 1916 | `jslint` | "{ jslint_phase4_walk(state); }" | `"\t"` |
| 1916 | `jslint` | "{ jslint_phase4_walk(state); } // PHASE 5. Check " | `"\t"` |
| 1923 | `jslint` | "&& !warning_list.some(function ({ code " | `"\t"` |
| 1935 | `jslint` | "{ jslint_phase5_whitage(state); }" | `"let aa;"` |
| 1935 | `jslint` | "{ jslint_phase5_whitage(state); } // PHASE 6. Aut" | `"\t"` |
| 1989 | `jslint` | "catch (err) { mode_stop = true; err.message = \"[JSLint" | `"!"` |
| 2008 | `` | "|| aa.line - bb.line" | `"\t"` |
| 2009 | `` | "|| aa.column - bb.column" | `"\t"` |
| 2043 | `jslint` | "&& !mode_stop" | `"[]"` |
| 2938 | `char_after` | "&& char !== match" | `"\"\\"` |
| 2938 | `char_after` | "{ return ( char === \"\" // test_cause: // " | `"/ /"` |
| 2947 | `char_after` | "? stop_at( \"expected_a_after_b\", " | `"/ /"` |
| 2962 | `char_after` | ": stop_at(\"expected_a_b\", line, column - 1, match, char)" | `"aa=/)"` |
| 2964 | `char_after` | " char = line_source.slice(0, 1); snippet += char; " | `"\""` |
| 2980 | `char_after_escape` | "case \"\": if (escape_char_list === \"${\") { // A megastring" | `"\"\\"` |
| 2981 | `char_after_escape` | "{ // A megastring's '\\' at end of line continues the line. // test_c" | `"`\\\n`"` |
| 2992 | `char_after_escape` | " // test_cause: // [\"\\\"\\\\\", \"char_after_escape\", \"unclosed_string\", \"" | `"\"\\"` |
| 2998 | `char_after_escape` | "case \"/\": return char_after();" | `"aa=/\\/"` |
| 3000 | `char_after_escape` | "case \"\\\\\": return char_after();" | `"aa=/[\\\\/]/"` |
| 3002 | `char_after_escape` | "case \"`\": return char_after();" | `"\"\\/\\\\\\`\\b\\f\\n\\r\\t\""` |
| 3004 | `char_after_escape` | "case \"b\": return char_after();" | `"\"\\/\\\\\\`\\b\\f\\n\\r\\t\""` |
| 3006 | `char_after_escape` | "case \"f\": return char_after();" | `"\"\\/\\\\\\`\\b\\f\\n\\r\\t\""` |
| 3008 | `char_after_escape` | "case \"n\": return char_after();" | `"\"\\/\\\\\\`\\b\\f\\n\\r\\t\""` |
| 3010 | `char_after_escape` | "case \"r\": return char_after();" | `"\"\\/\\\\\\`\\b\\f\\n\\r\\t\""` |
| 3012 | `char_after_escape` | "case \"t\": // test_cause: // [\"\\\"\\\\/\\\\\\\\\\\\`\\\\b\\\\f\\\\n\\\\r\\\\t\\\"\", \"char_a" | `"\"\\/\\\\\\`\\b\\f\\n\\r\\t\""` |
| 3019 | `char_after_escape` | "case \"u\": if (char_after(\"u\") === \"{\") { i" | `"\"\\u0\""` |
| 3020 | `char_after_escape` | "{ if (state.mode_json) { // test_cause: // [\"[\\\"\\\\u{1" | `"\"\\u{}\""` |
| 3021 | `char_after_escape` | "{ // test_cause: // [\"[\\\"\\\\u{12345}\\\"]\", \"char_after_escape\", \"unexpe" | `"[\"\\u{12345}\"]"` |
| 3029 | `char_after_escape` | "{ // test_cause: // [\"\\\"\\\\u{12345\\\"\", \"char_after_escape\", \"expected_" | `"\"\\u{12\""` |
| 3047 | `char_after_escape` | " return char_after(); } char_b" | `"\"\\u0\""` |
| 3049 | `char_after_escape` | " char_before(); read_digits(\"x\", mode_digits_u" | `"\"\\u0\""` |
| 3053 | `char_after_escape` | "default: if (escape_char_list && escape_char_list.indexOf(" | `"\"\\0\""` |
| 3056 | `char_after_escape` | " // test_cause: // [\"\\\"\\\\0\\\"\", \"char_after_escape\", \"unexpected_a_bef" | `"\"\\0\""` |
| 3112 | `lex_comment` | "{ snippet = line_source; line_source = \"\"; " | `"[//]"` |
| 3116 | `lex_comment` | "{ // test_cause: // [\"`${//}`\", \"lex_comment\", \"unexpected_comment\", " | `"`${//}`"` |
| 3126 | `lex_comment` | " else { snippet = []; if (line_source[0] === \"" | `"/*"` |
| 3128 | `lex_comment` | "{ // test_cause: // [\"/*/\", \"lex_comment\", \"unexpected_a\", \"/\", 3] //" | `"/*/"` |
| 3139 | `lex_comment` | "{ // jslint_rgx_star_slash ii = line_s" | `"/*"` |
| 3142 | `lex_comment` | "{ break; }" | `"/*/**/"` |
| 3144 | `lex_comment` | " // jslint_rgx_slash_star ii = line_so" | `"/*"` |
| 3144 | `lex_comment` | " // jslint_rgx_slash_star ii = line_so" | `"/*"` |
| 3147 | `lex_comment` | "{ // test_cause: // [\"/*/*\", \"lex_comment\", \"nested_comment\", \"\", 3] " | `"/*/*"` |
| 3153 | `lex_comment` | " snippet.push(line_source); line_sourc" | `"/*"` |
| 3156 | `lex_comment` | "{ // test_cause: // [\"/*\", \"lex_comment\", \"unclosed_comment\", \"\", 2] " | `"/*"` |
| 3163 | `lex_comment` | " jj = line_source.slice(0, ii).search( jsl" | `"[//]"` |
| 3167 | `lex_comment` | "{ // test_cause: // [\"/*/**/\", \"lex_comment\", \"nested_comment\", \"\", 3" | `"/*/**/"` |
| 3183 | `lex_comment` | "&& jslint_rgx_todo.test(snippet)" | `"[//]"` |
| 3183 | `lex_comment` | "{ // test_cause: // [\" //todo\", \"lex_comment\", \"todo_comment\", \"(comm" | `"//todo"` |
| 3183 | `lex_comment` | "{ // test_cause: // [\" //todo\", \"lex_comment\", \"todo_comment\", \"(comm" | `"[//]"` |
| 3202 | `lex_comment` | "{ return the_comment; }" | `"[//]"` |
| 3204 | `lex_comment` | " directive_list.push(the_comment); if (!mode_directive" | `"/*jslint !*/"` |
| 3204 | `lex_comment` | " directive_list.push(the_comment); if (!mode_directive" | `"/*jslint !*/"` |
| 3206 | `lex_comment` | "{ // test_cause: // [\"0; /*global aa*/\", \"lex_comment\", \"misplaced_di" | `"0\n/*global aa*/"` |
| 3214 | `lex_comment` | " // lex_directive(); // JSLint recognizes three directives that can b" | `"/*jslint !*/"` |
| 3230 | `` | "{ // test_cause: // [\" /*jslint !*/\", \"lex_comment\", \"bad_directive_a" | `"/*jslint !*/"` |
| 3238 | `` | "{ return \"\"; }" | `"/*jslint !*/"` |
| 3238 | `` | "{ return \"\"; } ii += match0.le" | `"/*jslint !*/"` |
| 3238 | `` | "{ return \"\"; } ii += match0.le" | `"/*jslint !*/"` |
| 3240 | `` | " ii += match0.length; switch (the_comment.dire" | `"/*global aa:false*/"` |
| 3240 | `` | " ii += match0.length; switch (the_comment.dire" | `"/*global aa:false*/"` |
| 3243 | `` | "case \"global\": if (value) { // test_cause: // [\" /*gl" | `"/*global aa:false*/"` |
| 3244 | `` | "{ // test_cause: // [\" /*global aa:false*/\", \"lex_comment\", \"bad_opti" | `"/*global aa:false*/"` |
| 3259 | `` | "case \"jslint\": if (!option_set_item(key, value !== \"fa" | `"/*jslint eval*/\neval"` |
| 3260 | `` | "{ // test_cause: // [\"/*jslint undefined*/\", \"lex_comment\", \"bad_opti" | `"/*jslint undefined*/"` |
| 3268 | `` | "case \"property\": state.mode_property = true; " | `"/*property aa*/\naa.bb"` |
| 3272 | `` | " return \"\"; " | `"/*global aa:false*/"` |
| 3286 | `lex_megastring` | "{ // test_cause: // [\"`${`\", \"lex_megastring\", \"expected_a_b\", \"`\", 4" | `"`${`"` |
| 3286 | `lex_megastring` | "{ // test_cause: // [\"`${`\", \"lex_megastring\", \"expected_a_b\", \"`\", 4" | `"`"` |
| 3308 | `lex_megastring` | "{ match = line_source.match(jslint_rgx_mega) || { " | `"`"` |
| 3309 | `lex_megastring` | "|| { \"0\": \"\", index: 0 }" | `"`"` |
| 3318 | `lex_megastring` | "case \"${\": // if either ` or ${ was found, then the preceding joins t" | `"`${`"` |
| 3335 | `lex_megastring` | "{ id = lex_token().id; if (id " | `"`${`"` |
| 3337 | `lex_megastring` | "{ // test_cause: // [\"`${{\", \"lex_megastring\", \"expected_a_b\", \"{\", 4" | `"`${{"` |
| 3337 | `lex_megastring` | "{ // test_cause: // [\"`${{\", \"lex_megastring\", \"expected_a_b\", \"{\", 4" | `"`${{"` |
| 3349 | `lex_megastring` | " if (id === \"}\") " | `"`${//}`"` |
| 3349 | `lex_megastring` | " if (id === \"}\") { break; " | `"`${//}`"` |
| 3350 | `lex_megastring` | "{ break; }" | `"`${\"`\"}`"` |
| 3353 | `lex_megastring` | " break;" | `"`${\"`\"}`"` |
| 3355 | `lex_megastring` | "case \"\\\\\": // PR-513 - Check the escape with <char_after_escape>, as " | `"`\\\n`"` |
| 3368 | `lex_megastring` | "case \"`\": // if either ` or ${ was found, then the preceding joins th" | `"0``"` |
| 3382 | `lex_megastring` | "default: // If neither ` nor ${ is seen, then the whole line joins th" | `"`"` |
| 3387 | `lex_megastring` | "{ // test_cause: // [\" `0\", \"lex_megastring\", \"unclosed_mega\", \"\", 2]" | `"`"` |
| 3406 | `lex_number` | "&& char" | `"0"` |
| 3409 | `lex_number` | "case \"x\": read_digits(char, mode_digits_numeric_separator)" | `"0x"` |
| 3418 | `lex_number` | "default: if (char === \".\") { read_digits(\"" | `"0"` |
| 3435 | `lex_number` | "&& char <= \"9\"" | `" 0a"` |
| 3436 | `lex_number` | "&& char <= \"z\"" | `" 0a"` |
| 3436 | `lex_number` | "|| (char >= \"A\" && char <= \"Z\")" | `"0"` |
| 3437 | `lex_number` | "&& char <= \"Z\"" | `"0^0"` |
| 3438 | `lex_number` | "{ // test_cause: // [\" 0a\", \"lex_number\", \"unexpected_a_after_b\", \"0\"" | `" 0a"` |
| 3451 | `lex_number` | " char_before(); return token_create(\"(number)\", snippe" | `"0"` |
| 3477 | `lex_regexp_bracketed` | "{ // RegExp // Match a character in a character class. " | `"aa=/["` |
| 3483 | `lex_regexp_bracketed` | "case \"\":" | `"aa=/["` |
| 3484 | `lex_regexp_bracketed` | "case \"]\": // test_cause: // [\"aa=/[\", \"lex_regexp_bracketed\", \"(live)" | `"aa=/["` |
| 3490 | `lex_regexp_bracketed` | "{ // test_cause: // [\"aa=/[0-]/\", \"lex_regexp_bracketed\", \"unexpected" | `"aa=/[0-]/"` |
| 3509 | `lex_regexp_bracketed` | "case \"-\":" | `"aa=/[-]/"` |
| 3510 | `lex_regexp_bracketed` | "case \"/\":" | `"aa=/[/"` |
| 3511 | `lex_regexp_bracketed` | "case \"[\":" | `"aa=/[/"` |
| 3512 | `lex_regexp_bracketed` | "case \"^\": // test_cause: // [\"aa=/[-]/\", \"lex_regexp_bracketed\", \"exp" | `"aa=/[/"` |
| 3529 | `lex_regexp_bracketed` | "case \"\\\\\": char_after_escape(\"BbDdSsWw-[]^\"); " | `"aa=/[\\\\/]/"` |
| 3533 | `lex_regexp_bracketed` | "case \"`\": if (mode_mega) { // test_cause: // [\"`$" | `"`${/[`]/}`"` |
| 3542 | `lex_regexp_bracketed` | " char_after(); mode_regexp_range = fal" | `"aa=/[/"` |
| 3542 | `lex_regexp_bracketed` | " char_after(); mode_regexp_range = fal" | `"aa=/[/"` |
| 3545 | `lex_regexp_bracketed` | "{ // RegExp // Match a range of subclasses. mode" | `"aa=/[0-]/"` |
| 3563 | `lex_regexp_group` | "case \"\": // test_cause: // [\"/ /\", \"lex_regexp_group\", \"expected_rege" | `"/ /"` |
| 3570 | `lex_regexp_group` | "case \")\": // test_cause: // [\"aa=/)\", \"lex_regexp_group\", \"expected_r" | `"aa=/)"` |
| 3578 | `lex_regexp_group` | "case \"]\": // test_cause: // [\"aa=/]\", \"lex_regexp_group\", \"expected_r" | `"aa=/]"` |
| 3586 | `lex_regexp_group` | "{ switch (char) { case \"\": " | `"/ /"` |
| 3588 | `lex_regexp_group` | "case \"\":" | `"/ /"` |
| 3589 | `lex_regexp_group` | "case \")\":" | `"/ /"` |
| 3590 | `lex_regexp_group` | "case \"/\":" | `"/ /"` |
| 3591 | `lex_regexp_group` | "case \"]\": return;" | `"/ /"` |
| 3605 | `lex_regexp_group` | "case \"$\": if (line_source[0] !== \"/\") { " | `"aa=/$^/"` |
| 3606 | `lex_regexp_group` | "{ mode_regexp_multiline = true; " | `"aa=/$^/"` |
| 3611 | `lex_regexp_group` | "case \"(\": // RegExp // Match a group that starts with left paren. " | `"aa=/(?-"` |
| 3618 | `lex_regexp_group` | "case \":\": // test_cause: // [\"aa=/(:)/\", \"lex_regexp_group\", \"expecte" | `"aa=/(:)/"` |
| 3631 | `lex_regexp_group` | "case \"?\": char_after(\"?\"); " | `"aa=/(?-"` |
| 3651 | `lex_regexp_group` | "case \"-\":" | `"aa=/(?-"` |
| 3652 | `lex_regexp_group` | "case \"i\":" | `"aa=/(?-"` |
| 3653 | `lex_regexp_group` | "case \"m\":" | `"aa=/(?-"` |
| 3654 | `lex_regexp_group` | "case \"s\": modifier_seen = char; " | `"aa=/(?-"` |
| 3657 | `lex_regexp_group` | "{ // A lone \"-\" adds and removes nothing, which v8 rejects - unlike \"" | `"aa=/(?-"` |
| 3661 | `lex_regexp_group` | "&& modifier_seen !== \"-\"" | `"aa=/(?-:x)/"` |
| 3661 | `lex_regexp_group` | "{ char_after(); " | `"aa=/(?--:x)/"` |
| 3661 | `lex_regexp_group` | "{ char_after(); " | `"aa=/(?-"` |
| 3661 | `lex_regexp_group` | "{ char_after(); " | `"aa=/(?-"` |
| 3666 | `lex_regexp_group` | "case \"-\":" | `"aa=/(?--:x)/"` |
| 3667 | `lex_regexp_group` | "case \"i\":" | `"aa=/(?--:x)/"` |
| 3668 | `lex_regexp_group` | "case \"m\":" | `"aa=/(?--:x)/"` |
| 3669 | `lex_regexp_group` | "case \"s\": if (modifier_seen.includ" | `"aa=/(?--:x)/"` |
| 3687 | `lex_regexp_group` | "default: // End of line inside (?flags - report the missing \":\" the w" | `"aa=/(?-"` |
| 3691 | `lex_regexp_group` | "{ return char_after(\":\"); " | `"aa=/(?-"` |
| 3693 | `lex_regexp_group` | " // test_cause: // [\"aa=/(?-.\", \"lex_regexp_group\", \"unexpected_a_aft" | `"aa=/(?-."` |
| 3708 | `lex_regexp_group` | " break;" | `"aa=/(?--:x)/"` |
| 3712 | `lex_regexp_group` | " break;" | `"aa=/(?--:x)/"` |
| 3714 | `lex_regexp_group` | " // RegExp // Recurse lex_regexp_group. lex_rege" | `"aa=/(:)/"` |
| 3722 | `lex_regexp_group` | "case \"*\":" | `"aa=/.**/"` |
| 3723 | `lex_regexp_group` | "case \"+\":" | `"aa=/+/"` |
| 3724 | `lex_regexp_group` | "case \"?\":" | `"aa=/+/"` |
| 3725 | `lex_regexp_group` | "case \"{\":" | `"aa=/+/"` |
| 3726 | `lex_regexp_group` | "case \"}\": // test_cause: // [\"aa=/+/\", \"lex_regexp_group\", \"expected_" | `"aa=/+/"` |
| 3743 | `lex_regexp_group` | "case \"[\": lex_regexp_bracketed(); " | `"aa=/["` |
| 3746 | `lex_regexp_group` | "case \"\\\\\": // test_cause: // [\"aa=/\\\\/\", \"lex_regexp_group\", \"(live)\"" | `"aa=/\\/"` |
| 3755 | `lex_regexp_group` | "case \"^\": if (snippet !== \"^\") { " | `"aa=/$^/"` |
| 3756 | `lex_regexp_group` | "{ mode_regexp_multiline = true; " | `"aa=/$^/"` |
| 3761 | `lex_regexp_group` | "case \"`\": if (mode_mega) { // test_cause: // [\"`$" | `"`${/`/}`"` |
| 3771 | `lex_regexp_group` | "default: char_after();" | `"!/./"` |
| 3773 | `lex_regexp_group` | " // RegExp // Match an optional quantifier. switch (" | `"!/./"` |
| 3773 | `lex_regexp_group` | " // RegExp // Match an optional quantifier. switch (" | `"!/./"` |
| 3779 | `lex_regexp_group` | "case \"*\":" | `"aa=/.**/"` |
| 3780 | `lex_regexp_group` | "case \"+\": if (char_after(char) === \"?\") { // test" | `"aa=/.**/"` |
| 3781 | `lex_regexp_group` | "{ // test_cause: // [\"aa=/.*?/\", \"lex_regexp_group\", \"(live)\", \"\", 0]" | `"aa=/.*?/"` |
| 3790 | `lex_regexp_group` | "case \"?\": if (char_after(\"?\") === \"?\") { // test_" | `"aa=/.??/"` |
| 3791 | `lex_regexp_group` | "{ // test_cause: // [\"aa=/.??/\", \"lex_regexp_group\", \"unexpected_a\", " | `"aa=/.??/"` |
| 3800 | `lex_regexp_group` | "case \"{\": read_digits(\"d\", mode_digits_regexp_quan" | `"aa=/.{,/"` |
| 3802 | `lex_regexp_group` | "{ // test_cause: // [\"aa=/.{0}?/\", \"lex_regexp_group\", \"unexpected_a\"" | `"aa=/.{0}?/"` |
| 3802 | `lex_regexp_group` | "{ // test_cause: // [\"aa=/.{0}?/\", \"lex_regexp_group\", \"unexpected_a\"" | `"aa=/.{0}?/"` |
| 3821 | `lex_regexp` | "{ // test_cause: // [\"aa=/=/\", \"lex_regexp\", \"expected_a_before_b\", \"" | `"aa=/=/"` |
| 3850 | `lex_regexp` | "&& char <= \"z\\uffff\"" | `"aa=/./z"` |
| 3850 | `lex_regexp` | "|| (char >= \"A\" && char <= \"Z\\uffff\")" | `"!/./"` |
| 3851 | `lex_regexp` | "&& char <= \"Z\\uffff\"" | `"`${/`/}`"` |
| 3852 | `lex_regexp` | "{ // RegExp // Process dangling flag letters. switch (!f" | `"aa=/./z"` |
| 3852 | `lex_regexp` | "{ // RegExp // Process dangling flag letters. switch (!f" | `"!/./"` |
| 3857 | `lex_regexp` | "&& char" | `"aa=/./z"` |
| 3863 | `lex_regexp` | "case \"g\": break;" | `"aa=/./gg"` |
| 3865 | `lex_regexp` | "case \"i\": break;" | `"aa=/./gimuy"` |
| 3867 | `lex_regexp` | "case \"m\": break;" | `"aa=/./gimuy"` |
| 3874 | `lex_regexp` | "case \"u\": if ( flag.v //jslint-ign" | `"aa=/./uv"` |
| 3877 | `lex_regexp` | "{ // test_cause: // [\"aa=/./vu\", \"lex_regexp\", \"unexpected_a\", \"u\", 8" | `"aa=/./vu"` |
| 3889 | `lex_regexp` | "case \"v\": // \"u\" and \"v\" select different grammars, so v8 rejects the" | `"aa=/./uv"` |
| 3895 | `lex_regexp` | "{ // test_cause: // [\"aa=/./uv\", \"lex_regexp\", \"unexpected_a\", \"v\", 8" | `"aa=/./uv"` |
| 3903 | `lex_regexp` | "case \"y\": // test_cause: // [\"aa=/./gimuy\", \"lex_regexp\", \"(live)\", \"" | `"aa=/./gimuy"` |
| 3909 | `lex_regexp` | "default: // test_cause: // [\"aa=/./gg\", \"lex_regexp\", \"unexpected_a\"," | `"aa=/./z"` |
| 3921 | `lex_regexp` | "|| char === \"*\"" | `"!/./"` |
| 3921 | `lex_regexp` | "{ // test_cause: // [\"aa=/.//\", \"lex_regexp\", \"unexpected_a\", \"/\", 7]" | `"aa=/.//"` |
| 3921 | `lex_regexp` | "{ // test_cause: // [\"aa=/.//\", \"lex_regexp\", \"unexpected_a\", \"/\", 7]" | `"!/./"` |
| 3927 | `lex_regexp` | " result = token_create(\"(regexp)\", char); result.flag " | `"!/./"` |
| 3932 | `lex_regexp` | "&& !flag.m" | `"aa=/$^/"` |
| 3934 | `lex_regexp` | "{ // test_cause: // [\"aa=/$^/\", \"lex_regexp\", \"missing_m\", \"\", 7] // " | `"aa=/$^/"` |
| 3934 | `lex_regexp` | "{ // test_cause: // [\"aa=/$^/\", \"lex_regexp\", \"missing_m\", \"\", 7] // " | `"!/./"` |
| 3958 | `lex_slash_or_regexp` | "&& !token_prv_expr.dot" | `"in /./"` |
| 3959 | `lex_slash_or_regexp` | "&& token_prv_expr.id" | `"in /./"` |
| 3962 | `lex_slash_or_regexp` | "case \"case\":" | `"case /./"` |
| 3963 | `lex_slash_or_regexp` | "case \"delete\":" | `"case /./"` |
| 3964 | `lex_slash_or_regexp` | "case \"in\":" | `"in /./"` |
| 3965 | `lex_slash_or_regexp` | "case \"instanceof\":" | `"in /./"` |
| 3966 | `lex_slash_or_regexp` | "case \"new\":" | `"in /./"` |
| 3967 | `lex_slash_or_regexp` | "case \"typeof\":" | `"in /./"` |
| 3968 | `lex_slash_or_regexp` | "case \"void\":" | `"in /./"` |
| 3969 | `lex_slash_or_regexp` | "case \"yield\": the_token = lex_regexp(); // test_cause: //" | `"in /./"` |
| 3985 | `lex_slash_or_regexp` | " switch (!token_prv_expr.identifier && token_prv_expr.id.slice" | `"/="` |
| 3986 | `lex_slash_or_regexp` | "&& token_prv_expr.id.slice(-1)" | `"/="` |
| 3987 | `lex_slash_or_regexp` | "case \"!\":" | `"!/./"` |
| 3988 | `lex_slash_or_regexp` | "case \"%\":" | `"!/./"` |
| 3989 | `lex_slash_or_regexp` | "case \"&\":" | `"!/./"` |
| 3990 | `lex_slash_or_regexp` | "case \"*\":" | `"!/./"` |
| 3991 | `lex_slash_or_regexp` | "case \"+\":" | `"!/./"` |
| 3992 | `lex_slash_or_regexp` | "case \"-\":" | `"!/./"` |
| 3993 | `lex_slash_or_regexp` | "case \"/\":" | `"/ /"` |
| 3994 | `lex_slash_or_regexp` | "case \";\":" | `"/ /"` |
| 3995 | `lex_slash_or_regexp` | "case \"<\":" | `"/ /"` |
| 3996 | `lex_slash_or_regexp` | "case \">\":" | `"/ /"` |
| 3997 | `lex_slash_or_regexp` | "case \"^\":" | `"/ /"` |
| 3998 | `lex_slash_or_regexp` | "case \"{\":" | `"/ /"` |
| 3999 | `lex_slash_or_regexp` | "case \"|\":" | `"/ /"` |
| 4000 | `lex_slash_or_regexp` | "case \"}\":" | `"/ /"` |
| 4001 | `lex_slash_or_regexp` | "case \"~\": the_token = lex_regexp(); // test_cause: // [\"!" | `"/ /"` |
| 4023 | `lex_slash_or_regexp` | "case \"(\":" | `"(/./"` |
| 4024 | `lex_slash_or_regexp` | "case \",\":" | `"(/./"` |
| 4025 | `lex_slash_or_regexp` | "case \":\":" | `"(/./"` |
| 4026 | `lex_slash_or_regexp` | "case \"=\":" | `"(/./"` |
| 4027 | `lex_slash_or_regexp` | "case \"?\":" | `"(/./"` |
| 4028 | `lex_slash_or_regexp` | "case \"[\": // test_cause: // [\"(/./\", \"lex_slash_or_regexp\", \"(live)\"," | `"(/./"` |
| 4039 | `lex_slash_or_regexp` | " if (line_source[0] === \"=\") " | `"/="` |
| 4039 | `lex_slash_or_regexp` | " if (line_source[0] === \"=\") { snippet = \"/=\"; " | `"/="` |
| 4040 | `lex_slash_or_regexp` | "{ snippet = \"/=\"; column += 1; lin" | `"/="` |
| 4049 | `lex_slash_or_regexp` | " return token_create(snippet); " | `"/="` |
| 4058 | `lex_string` | "{ // test_cause: // [\" ''\", \"lex_string\", \"use_double\", \"\", 2] // [\"'" | `"''"` |
| 4071 | `lex_string` | "{ switch (char) { case \"\": // test_cause: // " | `"\""` |
| 4073 | `lex_string` | "case \"\": // test_cause: // [\"\\\"\", \"lex_string\", \"unclosed_string\", \"\"" | `"\""` |
| 4079 | `lex_string` | "case \"\\\\\": char_after_escape(quote); b" | `"\"\\"` |
| 4082 | `lex_string` | "case \"`\": if (mode_mega) { // test_cause: // [\"`${\\\"`" | `"`${\"`\"}`"` |
| 4083 | `lex_string` | "{ // test_cause: // [\"`${\\\"`\\\"}`\", \"lex_string\", \"unexpected_a\", \"`\"," | `"`${\"`\"}`"` |
| 4092 | `lex_string` | "case quote: // Remove last character from snippet. s" | `"''"` |
| 4100 | `lex_string` | "default: char_after();" | `"\"\\0\""` |
| 4111 | `lex_token` | "{ // Lex/loop through each blank-line. while (!line_sour" | `"\t"` |
| 4115 | `lex_token` | "{ line_source = read_line(); from = 0;" | `"\t"` |
| 4118 | `lex_token` | "{ return ( mode_mega // t" | `"\t"` |
| 4126 | `lex_token` | "? stop_at(\"unclosed_mega\", line_mega, from_mega)" | `"`${//}`"` |
| 4127 | `lex_token` | ": line_disable !== undefined // test_cause: // [\"/*jslint-disable*/\"," | `"\t"` |
| 4132 | `lex_token` | "? stop_at(\"unclosed_disable\", line_disable, column - 0)" | `"/*jslint-disable*/"` |
| 4133 | `lex_token` | ": token_create(\"(end)\")" | `"\t"` |
| 4136 | `lex_token` | " from = column; match = line_source.match(jsli" | `"\t"` |
| 4136 | `lex_token` | " from = column; match = line_source.match(jsli" | `"\t"` |
| 4146 | `lex_token` | "{ // test_cause: // [\"#\", \"lex_token\", \"unexpected_char_a\", \"#\", 1] /" | `"#"` |
| 4158 | `lex_token` | " snippet = match[1]; column += snippet.length;" | `"\t"` |
| 4158 | `lex_token` | " snippet = match[1]; column += snippet.length;" | `"\t"` |
| 4162 | `lex_token` | "{ break; }" | `"!"` |
| 4165 | `lex_token` | " // The token is an identifier. if (match[3]) " | `"!"` |
| 4165 | `lex_token` | " // The token is an identifier. if (match[3]) { " | `"!"` |
| 4165 | `lex_token` | " // The token is an identifier. if (match[3]) { " | `"!"` |
| 4169 | `lex_token` | "{ return token_create(snippet, undefined, true); }" | `"aa"` |
| 4169 | `lex_token` | "{ return token_create(snippet, undefined, true); }" | `"!"` |
| 4169 | `lex_token` | "{ return token_create(snippet, undefined, true); }" | `"!"` |
| 4171 | `lex_token` | " // Create token from number. if (match[4]) " | `"!"` |
| 4171 | `lex_token` | " // Create token from number. if (match[4]) { re" | `"!"` |
| 4171 | `lex_token` | " // Create token from number. if (match[4]) { re" | `"!"` |
| 4175 | `lex_token` | "{ return lex_number(); }" | `"0"` |
| 4175 | `lex_token` | "{ return lex_number(); } // Create token from str" | `"!"` |
| 4177 | `lex_token` | " // Create token from string \"...\" or '...'. if (snippet ===" | `"!"` |
| 4177 | `lex_token` | " // Create token from string \"...\" or '...'. if (snippet ===" | `"!"` |
| 4181 | `lex_token` | "|| snippet === \"'\"" | `"!"` |
| 4181 | `lex_token` | "{ return lex_string(snippet); }" | `"\""` |
| 4181 | `lex_token` | "{ return lex_string(snippet); } // Create token f" | `"!"` |
| 4181 | `lex_token` | "{ return lex_string(snippet); } // Create token f" | `"!"` |
| 4183 | `lex_token` | " // Create token from megastring `...`. if (snippet === \"`\")" | `"!"` |
| 4183 | `lex_token` | " // Create token from megastring `...`. if (snippet === \"`\")" | `"!"` |
| 4183 | `lex_token` | " // Create token from megastring `...`. if (snippet === \"`\")" | `"!"` |
| 4187 | `lex_token` | "{ return lex_megastring(); }" | `"`"` |
| 4187 | `lex_token` | "{ return lex_megastring(); } // Create token from" | `"!"` |
| 4189 | `lex_token` | " // Create token from comment /*...*/ or //.... if (snippet " | `"!"` |
| 4189 | `lex_token` | " // Create token from comment /*...*/ or //.... if (snippet " | `"!"` |
| 4193 | `lex_token` | "|| snippet === \"//\"" | `"!"` |
| 4193 | `lex_token` | "{ return lex_comment(); }" | `"/*"` |
| 4193 | `lex_token` | "{ return lex_comment(); } // Create token from sl" | `"!"` |
| 4193 | `lex_token` | "{ return lex_comment(); } // Create token from sl" | `"!"` |
| 4195 | `lex_token` | " // Create token from slash /. if (snippet === \"/\") " | `"!"` |
| 4195 | `lex_token` | " // Create token from slash /. if (snippet === \"/\") { " | `"!"` |
| 4195 | `lex_token` | " // Create token from slash /. if (snippet === \"/\") { " | `"!"` |
| 4199 | `lex_token` | "{ return lex_slash_or_regexp(); }" | `"/="` |
| 4199 | `lex_token` | "{ return lex_slash_or_regexp(); } return t" | `"!"` |
| 4201 | `lex_token` | " return token_create(snippet); " | `"!"` |
| 4213 | `option_set_item` | "case \"beta\":" | `"\t"` |
| 4214 | `option_set_item` | "case \"bitwise\":" | `"\t"` |
| 4215 | `option_set_item` | "case \"browser\":" | `"\t"` |
| 4216 | `option_set_item` | "case \"convert\":" | `"\t"` |
| 4217 | `option_set_item` | "case \"couch\":" | `"\t"` |
| 4218 | `option_set_item` | "case \"devel\":" | `"\t"` |
| 4219 | `option_set_item` | "case \"ecma\":" | `"\t"` |
| 4220 | `option_set_item` | "case \"eval\":" | `"\t"` |
| 4221 | `option_set_item` | "case \"fart\":" | `"\t"` |
| 4222 | `option_set_item` | "case \"for\":" | `"\t"` |
| 4223 | `option_set_item` | "case \"getset\":" | `"\t"` |
| 4224 | `option_set_item` | "case \"indent2\":" | `"\t"` |
| 4225 | `option_set_item` | "case \"long\":" | `"\t"` |
| 4226 | `option_set_item` | "case \"node\":" | `"\t"` |
| 4227 | `option_set_item` | "case \"nomen\":" | `"\t"` |
| 4228 | `option_set_item` | "case \"single\":" | `"\t"` |
| 4229 | `option_set_item` | "case \"subscript\":" | `"\t"` |
| 4230 | `option_set_item` | "case \"test_internal_error\":" | `"\t"` |
| 4232 | `option_set_item` | "case \"test_unknown_warning_code\":" | `"\t"` |
| 4234 | `option_set_item` | "case \"this\":" | `"\t"` |
| 4235 | `option_set_item` | "case \"trace\":" | `"\t"` |
| 4236 | `option_set_item` | "case \"unordered\":" | `"\t"` |
| 4238 | `option_set_item` | "case \"variable\":" | `"\t"` |
| 4240 | `option_set_item` | "case \"white\": // Allow messy whitespace. option_" | `"\t"` |
| 4253 | `option_set_item` | "default: return false;" | `"/*jslint undefined*/"` |
| 4255 | `option_set_item` | " // Initialize global-variables. switch (value && key" | `"\t"` |
| 4263 | `option_set_item` | "case \"ecma\":" | `"\t"` |
| 4264 | `option_set_item` | "case \"node\": Object.entries(jslint_global_dict_all).forEac" | `"\t"` |
| 4269 | `` | "|| (key === \"browser\" && dict_name === \"node_auto\"" | `"\t"` |
| 4271 | `` | "{ Object.entries(dict).forEach(function ([name, is" | `"\t"` |
| 4286 | `` | " else { if (is_global) { " | `"\t"` |
| 4287 | `` | "{ global_dict[name] = ( " | `"\t"` |
| 4291 | `` | ": dict_name.startsWith(\"couch\") ? " | `"\t"` |
| 4295 | `` | ": dict_name.startsWith(\"ecma\") ? \"" | `"\t"` |
| 4296 | `` | "? \"ECMAScript\"" | `"\t"` |
| 4305 | `option_set_item` | " return true; " | `"\t"` |
| 4316 | `read_digits` | "? jslint_rgx_digits_hexs" | `"0x"` |
| 4317 | `read_digits` | ": jslint_rgx_digits_decimals" | `"aa=/.{,/"` |
| 4321 | `read_digits` | "&& ( mode === mode_digits_numeric_" | `"0x"` |
| 4323 | `read_digits` | "|| (mode === mode_digits_unicode_escape && char ==" | `"\"\\u{}\""` |
| 4324 | `read_digits` | "&& char === \"{\"" | `"\"\\u{}\""` |
| 4326 | `read_digits` | "|| digits[0] === \"_\"" | `"0x_"` |
| 4328 | `read_digits` | "{ // test_cause: // [\"0x\", \"read_digits\", \"expected_digits_after_a\", " | `"0x"` |
| 4341 | `read_digits` | "{ check_numeric_separator(digits, column); }" | `"0x"` |
| 4343 | `read_digits` | " else if (digits.indexOf(\"_\") >= 0) { // test_cause: // [\"\\\"\\\\u{1_2}\\" | `"\"\\u0\""` |
| 4343 | `read_digits` | "{ // test_cause: // [\"\\\"\\\\u{1_2}\\\"\", \"read_digits\", \"illegal_num_sepa" | `"\"\\u{1_2}\""` |
| 4359 | `read_digits` | "case mode_digits_regexp_quantifier: if (digits.length === " | `"aa=/.{,/"` |
| 4360 | `read_digits` | "{ // test_cause: // [\"aa=/aa{/\", \"read_digits\", \"expected_a_before_b\"" | `"aa=/.{,/"` |
| 4367 | `read_digits` | "{ // test_cause: // [\"aa=/.{,/\", \"read_digits\", \"(live)\", \"\", 0] " | `"aa=/.{,/"` |
| 4378 | `read_digits` | " break;" | `"aa=/aa{/"` |
| 4381 | `read_digits` | "case mode_digits_unicode_escape: // PR-513 - Check the code point's v" | `"\"\\u0\""` |
| 4388 | `read_digits` | "{ if (digits.length < 4) { // test_cause: // [\"\\\"\\\\u0" | `"\"\\u0\""` |
| 4389 | `read_digits` | "{ // test_cause: // [\"\\\"\\\\u0\\\"\", \"read_digits\", \"expected_four_digits" | `"\"\\u0\""` |
| 4398 | `read_digits` | " else if (Number.parseInt(digits, 16) > 0x10ffff) { // test_cause: //" | `"\"\\u{}\""` |
| 4398 | `read_digits` | "{ // test_cause: // [\"\\\"\\\\u{110000}\\\"\", \"read_digits\", \"too_many_digi" | `"\"\\u{110000}\""` |
| 4408 | `read_digits` | " char_after(); " | `"0x"` |
| 4420 | `read_line` | "&& line_disable === undefined" | `"/////////////////////////////////////////////////////////////////////////////////"` |
| 4421 | `read_line` | "&& !state.mode_json" | `"/////////////////////////////////////////////////////////////////////////////////"` |
| 4422 | `read_line` | "&& token_1" | `"/////////////////////////////////////////////////////////////////////////////////"` |
| 4423 | `read_line` | "&& !mode_regexp" | `"/////////////////////////////////////////////////////////////////////////////////"` |
| 4425 | `read_line` | "{ // test_cause: // [\"///////////////////////////////////////////////" | `"/////////////////////////////////////////////////////////////////////////////////"` |
| 4437 | `read_line` | "{ return line_source; }" | `"\t"` |
| 4437 | `read_line` | "{ return line_source; } line_source = line" | `"\t"` |
| 4437 | `read_line` | "{ return line_source; } line_source = line" | `"\t"` |
| 4439 | `read_line` | " line_source = line_list[line].line_source; line_whole" | `"\t"` |
| 4448 | `read_line` | "{ // test_cause: // [\"/*jslint-disable*/\", \"read_line\", \"(live)\", \"\"," | `"/*jslint-disable*/"` |
| 4448 | `read_line` | "{ // test_cause: // [\"/*jslint-disable*/\", \"read_line\", \"(live)\", \"\"," | `"\t"` |
| 4454 | `read_line` | " else if (line_source === \"/*jslint-enable*/\") { if (line_" | `"\t"` |
| 4454 | `read_line` | "{ if (line_disable === undefined) { // test_cause: // [\"/" | `"/*jslint-enable*/"` |
| 4455 | `read_line` | "{ // test_cause: // [\"/*jslint-enable*/\", \"read_line\", \"unopened_enab" | `"/*jslint-enable*/"` |
| 4461 | `read_line` | " line_disable = undefined; } else if ( " | `"\t"` |
| 4463 | `read_line` | " else if ( line_source.endsWith(\" //jslint-ignore-line\") |" | `"\t"` |
| 4464 | `read_line` | "|| line_source.endsWith(\" //jslint-quiet\")" | `"\t"` |
| 4466 | `read_line` | "{ // test_cause: // [\"0 //jslint-ignore-line\", \"read_line\", \"(live)\"," | `"0 //jslint-ignore-line"` |
| 4472 | `read_line` | " if (line_disable !== undefined) " | `"\t"` |
| 4472 | `read_line` | " if (line_disable !== undefined) { // test_cause: // [\" // /*" | `"\t"` |
| 4473 | `read_line` | "{ // test_cause: // [\" // /*jslint-disable*/ // 0 // \", \"read_line\", " | `"/*jslint-disable*/"` |
| 4482 | `read_line` | " // jslint_rgx_tab if (line_source.indexOf(\"\\t\") >= 0)" | `"\t"` |
| 4482 | `read_line` | " // jslint_rgx_tab if (line_source.indexOf(\"\\t\") >= 0)" | `"\t"` |
| 4484 | `read_line` | "{ if (!option_dict.white) { // test_cause: // [\" \\t0\", \"r" | `"\t"` |
| 4494 | `read_line` | " if (!option_dict.white && line_source.endsWith(\" \")" | `"\t"` |
| 4495 | `read_line` | "{ // test_cause: // [\" \", \"read_line\", \"unexpected_trailing_space\", \"" | `"\t"` |
| 4495 | `read_line` | "{ // test_cause: // [\" \", \"read_line\", \"unexpected_trailing_space\", \"" | `"\t"` |
| 4502 | `read_line` | " return line_source; " | `"\t"` |
| 4523 | `token_create` | "&& id !== \";\"" | `"\t"` |
| 4523 | `token_create` | "{ mode_directive = false; }" | `"\t"` |
| 4533 | `token_create` | "&& token_prv.thru === from" | `"!"` |
| 4534 | `token_create` | "&& (id === \"(comment)\" || id === \"(regexp)\" || id === \"/\")" | `"!"` |
| 4535 | `token_create` | "|| id === \"(regexp)\"" | `"!"` |
| 4535 | `token_create` | "|| id === \"/\"" | `"!"` |
| 4535 | `token_create` | "&& (token_prv.id === \"(comment)\" || token_prv.id === \"(reg" | `"/ /"` |
| 4536 | `token_create` | "|| token_prv.id === \"(regexp)\"" | `"/ /"` |
| 4537 | `token_create` | "{ // test_cause: // [\"/**//**/\", \"token_create\", \"expected_space_a_b\"" | `"/**//**/"` |
| 4549 | `token_create` | "&& id === \"(number)\"" | `".0"` |
| 4549 | `token_create` | "{ // test_cause: // [\" .0\", \"token_create\", \"expected_a_before_b\", \"." | `".0"` |
| 4557 | `token_create` | "&& the_token.identifier" | `".0"` |
| 4557 | `token_create` | "{ the_token.dot = true; }" | `"aa.$"` |
| 4572 | `token_create` | "case \"${\":" | `"`${`"` |
| 4573 | `token_create` | "case \"(\":" | `"(0)"` |
| 4574 | `token_create` | "case \"[\":" | `"[]"` |
| 4575 | `token_create` | "case \"{\": opener_stack.unshift(the_token); bre" | `"[]"` |
| 4578 | `token_create` | "case \")\":" | `")"` |
| 4579 | `token_create` | "case \"]\": // PR-503 - Fix jslint crashing before warning about dangli" | `")"` |
| 4583 | `token_create` | "|| empty()" | `")"` |
| 4585 | `token_create` | "&& opener_popped.id !== \"(\"" | `")"` |
| 4585 | `token_create` | "|| (id === \"]\" && opener_popped.id !== \"[\")" | `"]"` |
| 4586 | `token_create` | "&& opener_popped.id !== \"[\"" | `"]"` |
| 4587 | `token_create` | "{ // test_cause: // [\" );\", \"token_create\", \"unexpected_a\", \")\", 2] /" | `")"` |
| 4597 | `token_create` | " break;" | `"[]"` |
| 4599 | `token_create` | "case \";\": if (opener_stack[0]?.for_loop) { " | `";"` |
| 4600 | `token_create` | "?.for_loop" | `"for(;;);"` |
| 4600 | `token_create` | "{ opener_stack[0].for_loop.for_semicolon = [ " | `"for(;;);"` |
| 4611 | `token_create` | "case \"=>\": // PR-511 - Stop on line-break before '=>', which is a Syn" | `"=>0"` |
| 4615 | `token_create` | "{ // test_cause: // [\"()//\\n =>0\", \"token_create\", \"unexpected_a\", \"=" | `"()\n =>0"` |
| 4623 | `token_create` | " if (token_prv_expr.identifier) { token_pr" | `"=>0"` |
| 4624 | `token_create` | "{ token_prv_expr.fart = the_token; }" | `"aa=>0"` |
| 4628 | `token_create` | "case \"}\": if (opener_stack[0]?.id === \"{\" || opener_stack[" | `"}"` |
| 4629 | `token_create` | "?.id" | `"{}"` |
| 4629 | `token_create` | "|| opener_stack[0]?.id === \"${\"" | `"}"` |
| 4629 | `token_create` | "?.id" | `"`${\"`\"}`"` |
| 4629 | `token_create` | "{ opener_stack.shift(); }" | `"{}"` |
| 4633 | `token_create` | " switch (token_prv_expr.id + \" \" + id) { " | `"\t"` |
| 4633 | `token_create` | " switch (token_prv_expr.id + \" \" + id) { case \") =>\": " | `"\t"` |
| 4635 | `token_create` | "case \") =>\": opener_popped.fart = the_token; b" | `"()=>0"` |
| 4638 | `token_create` | "case \"] =\": opener_popped.assignment = the_token; " | `";[,aa]=0"` |
| 4644 | `token_create` | "case \"await (\": if (token_prv_expr.for_loop) { " | `"for await(aa in aa){}"` |
| 4645 | `token_create` | "{ the_token.for_loop = token_prv_expr.for_loop; " | `"for await(aa in aa){}"` |
| 4650 | `token_create` | "case \"for (\":" | `"for(;;);"` |
| 4654 | `token_create` | "case \"for await\": the_token.for_loop = token_prv_expr; " | `"for(;;);"` |
| 4657 | `token_create` | " // The previous token is used to detect adjacency problems. " | `"\t"` |
| 4657 | `token_create` | " // The previous token is used to detect adjacency problems. " | `"\t"` |
| 4668 | `token_create` | "{ token_prv_expr = token_prv; }" | `"\t"` |
| 4670 | `token_create` | " return the_token; " | `"\t"` |
| 4689 | `jslint_phase2_lex` | "|| token_1.id === \"[\"" | `"\t"` |
| 4693 | `jslint_phase2_lex` | "{ if (lex_token().id === \"(end)\") { break; " | `"\t"` |
| 4694 | `jslint_phase2_lex` | "{ break; }" | `"\t"` |
| 4762 | `advance` | "&& token_now.id !== \"function\"" | `"aa"` |
| 4763 | `advance` | "&& token_now.id !== \"async\"" | `"aa"` |
| 4765 | `advance` | "{ // PR-516 - Bugfix - A keyword such as 'return' names no function, " | `"aa"` |
| 4774 | `advance` | "|| token_now.id === \"default\"" | `"eval"` |
| 4775 | `advance` | "|| token_prv.id === \".\"" | `"eval"` |
| 4776 | `advance` | "|| token_prv.id === \"?.\"" | `"eval"` |
| 4777 | `advance` | "|| ( token_nxt.id === \":\" " | `"eval"` |
| 4779 | `advance` | "&& (token_prv.id === \"{\" || token_prv.id === \"" | `"ignore:"` |
| 4780 | `advance` | "|| token_prv.id === \",\"" | `"ignore:"` |
| 4783 | `advance` | "? token_now.id" | `"aa"` |
| 4784 | `advance` | ": \"anonymous\"" | `"eval"` |
| 4786 | `advance` | " else if ( token_now.id === \"(string)\" && jsli" | `"\t"` |
| 4787 | `advance` | "&& jslint_rgx_identifier.test(token_now.value)" | `"''"` |
| 4789 | `advance` | "{ anon = token_now.value; }" | `"\"aa\"?.0"` |
| 4795 | `advance` | "&& token_nxt.id !== id" | `"\t"` |
| 4795 | `advance` | "{ return ( match === undefined // test_ca" | `"}"` |
| 4802 | `advance` | "? stop(\"expected_a_b\", token_nxt, id, artifact())" | `"}"` |
| 4807 | `advance` | ": stop( \"expected_a_b_from_c_d\", " | `"(/./"` |
| 4816 | `advance` | " // Promote the tokens, skipping comments. token_prv = token" | `"\t"` |
| 4822 | `advance` | "{ token_nxt = token_list[token_ii]; state.toke" | `"\t"` |
| 4826 | `advance` | "{ if (token_nxt.id === \"(end)\") { " | `"\t"` |
| 4826 | `advance` | "{ if (token_nxt.id === \"(end)\") { " | `"\t"` |
| 4827 | `advance` | "{ token_ii -= 1; }" | `"\t"` |
| 4831 | `advance` | " if (state.mode_json) " | `"[//]"` |
| 4831 | `advance` | " if (state.mode_json) { // test_cause: // [\"[//]\", \"advan" | `"[//]"` |
| 4832 | `advance` | "{ // test_cause: // [\"[//]\", \"advance\", \"unexpected_a\", \"(comment)\", " | `"[//]"` |
| 4855 | `parse_assignment_led` | "&& left.arity === \"variable\"" | `"0=0"` |
| 4855 | `parse_assignment_led` | "{ the_token.expression = right; the_to" | `"aa=0"` |
| 4855 | `parse_assignment_led` | "{ the_token.expression = right; the_to" | `"0=0"` |
| 4866 | `parse_assignment_led` | " else { the_token.expression = [left, right]; " | `"0=0"` |
| 4871 | `parse_assignment_led` | "|| right.arity === \"postassign\"" | `"0=0"` |
| 4873 | `parse_assignment_led` | "{ // test_cause: // [\"aa=aa++\", \"parse_assignment_led\", \"unexpected_a" | `"aa=aa++"` |
| 4873 | `parse_assignment_led` | "{ // test_cause: // [\"aa=aa++\", \"parse_assignment_led\", \"unexpected_a" | `"0=0"` |
| 4895 | `block` | "&& special !== \"body\"" | `";{}"` |
| 4895 | `block` | "&& special !== \"naked\"" | `";{}"` |
| 4899 | `block` | "{ // PR-504 - Add implicit scope_block for: // - if-else // - for-loo" | `"aa:do"` |
| 4917 | `block` | "&& special !== \"naked\"" | `";{}"` |
| 4917 | `block` | "{ advance(\"{\"); }" | `"()=>{}"` |
| 4919 | `block` | " the_block = token_now; the_block.scope_block = true; " | `";{}"` |
| 4923 | `block` | "{ check_ordered_var(the_block); }" | `";{}"` |
| 4932 | `block` | "&& function_stack.length === 2" | `"()=>{}"` |
| 4933 | `block` | "&& token_nxt.value === \"use strict\"" | `"()=>{}"` |
| 4935 | `block` | "{ token_nxt.statement = true; advance(\"(string" | `";{}"` |
| 4942 | `block` | "{ if (!option_dict.devel && special !== \"ignore\") { // te" | `";{}"` |
| 4942 | `block` | "{ if (!option_dict.devel && special !== \"ignore\") { // te" | `";{}"` |
| 4943 | `block` | "{ // test_cause: // [\"function aa(){}\", \"block\", \"empty_block\", \"{\", " | `";{}"` |
| 4951 | `block` | " else { the_block.disrupt = parsed_block[parsed_block.leng" | `";{aa:0}"` |
| 4953 | `block` | " scope_block = scope_block_pop(); if (!implicit) { " | `";{}"` |
| 4955 | `block` | "{ advance(\"}\"); }" | `";{}"` |
| 4973 | `check_left` | "&& ( left.arity !== \"ternary\" || " | `"0()"` |
| 4975 | `check_left` | "|| ( !check_left(left.expression[1" | `"(0?0:0)()"` |
| 4980 | `check_left` | "&& ( left.arity !== \"binary\" || " | `"0()"` |
| 4982 | `check_left` | "|| (id !== \".\" && id !== \"?.\" && id !== \"(\" && id !== " | `"(0+0)?.0"` |
| 4983 | `check_left` | "&& id !== \"?.\"" | `"(0+0)?.0"` |
| 4983 | `check_left` | "&& id !== \"(\"" | `"(0+0)?.0"` |
| 4983 | `check_left` | "&& id !== \"[\"" | `"(0+0)?.0"` |
| 4985 | `check_left` | "{ warn(\"unexpected_a\", right || token_nxt); re" | `"0()"` |
| 4986 | `check_left` | "|| token_nxt" | `"(0?0:0)()"` |
| 4988 | `check_left` | " return true; " | `"aa.$"` |
| 5003 | `check_mutation` | "&& the_thing.id !== \".\"" | `"0=0"` |
| 5004 | `check_mutation` | "&& the_thing.id !== \"[\"" | `"0=0"` |
| 5005 | `check_mutation` | "&& the_thing.id !== \"{\"" | `"0=0"` |
| 5007 | `check_mutation` | "{ // test_cause: // [\" 0=0\", \"check_mutation\", \"bad_assignment_a\", \"0" | `"0=0"` |
| 5015 | `check_mutation` | " if (the_optional) { // PR-514 - Bugfix - An optional-chain i" | `"aa=0"` |
| 5016 | `check_mutation` | "{ // PR-514 - Bugfix - An optional-chain is never an assignment targe" | `"aa?.[aa]=0"` |
| 5027 | `check_mutation` | " return true; " | `"aa=0"` |
| 5035 | `check_not_top_level` | "{ // test_cause: // [\" for(;;){}\", \"check_not_top_level\", \"unexpected" | `"aa:do"` |
| 5056 | `` | "&& !token.ellipsis" | `"({aa})=>0"` |
| 5060 | `` | "{ warn(\"expected_a_b_before_c_d\", token, type, bb," | `"aa={bb,aa}"` |
| 5072 | `` | "|| token.id" | `"switch(0){case 0:}"` |
| 5073 | `` | "case \"(number)\": return { order: 1" | `"switch(0){case 0:}"` |
| 5080 | `` | "case \"(string)\": return { order: 2" | `"switch(0){case \"aa\":case 0:break;}"` |
| 5087 | `` | "case true: return { order: 3, " | `"switch(0){case bb:case aa:break;}"` |
| 5102 | `` | "&& bb" | `"switch(0){case 1:case 0:break;}"` |
| 5102 | `` | "&& ( aa.order > bb.order || " | `"switch(0){case 1:case 0:break;}"` |
| 5104 | `` | "|| (aa.order === bb.order && aa.value > bb.value)" | `"switch(0){case 1:case 0:break;}"` |
| 5105 | `` | "&& aa.value > bb.value" | `"switch(0){case 1:case 0:break;}"` |
| 5107 | `` | "{ warn( \"expected_a_b_before_c_d\"," | `"switch(0){case 1:case 0:break;}"` |
| 5131 | `check` | "&& !variable_prv.for_init" | `"let aa;let aa"` |
| 5132 | `check` | "&& variable_prv.id" | `"let aa;let aa"` |
| 5135 | `check` | "case \"const\":" | `"const bb=0;const aa=0"` |
| 5136 | `check` | "case \"let\":" | `"let aa;let aa"` |
| 5137 | `check` | "case \"var\": if ( option_dict.beta " | `"let aa;let aa"` |
| 5147 | `check` | "{ // test_cause: // [\"const bb=0;const aa=0\", \"check\", \"expected_a_b_" | `"let bb;let aa"` |
| 5164 | `check` | "case \"import\":" | `"import \"aa\";let aa"` |
| 5165 | `check` | "case false: // test_cause: // [\"import \\\"aa\\\";let aa\", \"check\", \"(liv" | `"let aa;"` |
| 5171 | `check` | "default: if ( (variable_prv.id !==" | `"String();let aa"` |
| 5173 | `check` | "|| the_variable.id === \"var\"" | `"if(0){let aa}aa"` |
| 5173 | `check` | "&& option_dict.beta" | `"String();let aa"` |
| 5174 | `check` | "&& !option_dict.variable" | `"String();let aa"` |
| 5176 | `check` | "{ // test_cause: // [\"String();const aa=0\", \"check\", \"var_on_top_a_b\"" | `"String();let aa"` |
| 5190 | `check_ordered_var` | "case \"const\":" | `"const aa=0;++aa"` |
| 5191 | `check_ordered_var` | "case \"let\": check(scope_block.variable_prv, \"block\"); " | `"let aa;"` |
| 5195 | `check_ordered_var` | "case \"var\": check(scope_function.variable_prv, \"function\")" | `"var[aa]=0"` |
| 5199 | `check_ordered_var` | "default: scope_block.variable_prv = the_variable; " | `"0"` |
| 5220 | `condition` | "{ // test_cause: // [\"while((0)){}\", \"condition\", \"unexpected_a\", \"(\"" | `"while((0)){}"` |
| 5220 | `condition` | "{ // test_cause: // [\"while((0)){}\", \"condition\", \"unexpected_a\", \"(\"" | `"if(0){}"` |
| 5231 | `condition` | "case \"%\": // test_cause: // [\"if(0%0){}\", \"condition\", \"unexpected_a\"" | `"if(0%0){}"` |
| 5238 | `condition` | "case \"&\": // test_cause: // [\"if(0&0){}\", \"condition\", \"unexpected_a\"" | `"if(0&0){}"` |
| 5245 | `condition` | "case \"(number)\": // test_cause: // [\"if(0){}\", \"condition\", \"unexpect" | `"if(0){}"` |
| 5252 | `condition` | "case \"(string)\": // test_cause: // [\"if(\\\"aa\\\"){}\", \"condition\", \"une" | `"if(\"aa\"){}"` |
| 5259 | `condition` | "case \"*\": // test_cause: // [\"if(0*0){}\", \"condition\", \"unexpected_a\"" | `"if(0*0){}"` |
| 5266 | `condition` | "case \"+\": // test_cause: // [\"if(0+0){}\", \"condition\", \"unexpected_a\"" | `"if(0+0){}"` |
| 5273 | `condition` | "case \"-\": // test_cause: // [\"if(0-0){}\", \"condition\", \"unexpected_a\"" | `"if(0-0){}"` |
| 5280 | `condition` | "case \"/\": // test_cause: // [\"if(0/0){}\", \"condition\", \"unexpected_a\"" | `"if(0/0){}"` |
| 5287 | `condition` | "case \"<<\": // test_cause: // [\"if(0<<0){}\", \"condition\", \"unexpected_" | `"if(0<<0){}"` |
| 5294 | `condition` | "case \">>\": // test_cause: // [\"if(0>>0){}\", \"condition\", \"unexpected_" | `"if(0>>0){}"` |
| 5301 | `condition` | "case \">>>\": // test_cause: // [\"if(0>>>0){}\", \"condition\", \"unexpecte" | `"if(0>>>0){}"` |
| 5308 | `condition` | "case \"?\": // test_cause: // [\"if(0?0:0){}\", \"condition\", \"unexpected_" | `"if(0?0:0){}"` |
| 5315 | `condition` | "case \"^\": // test_cause: // [\"if(0^0){}\", \"condition\", \"unexpected_a\"" | `"if(0^0){}"` |
| 5322 | `condition` | "case \"typeof\": // test_cause: // [\"if(typeof 0){}\", \"condition\", \"une" | `"if(typeof 0){}"` |
| 5329 | `condition` | "case \"|\": // test_cause: // [\"if(0|0){}\", \"condition\", \"unexpected_a\"" | `"if(0|0){}"` |
| 5336 | `condition` | "case \"~\": // test_cause: // [\"if(~0){}\", \"condition\", \"unexpected_a\"," | `"if(~0){}"` |
| 5343 | `condition` | " return the_value; " | `"if(0){}"` |
| 5355 | `constant` | "? value" | `"\t"` |
| 5356 | `constant` | ": function () { token_now.constant = true; " | `"\t"` |
| 5358 | `the_symbol.nud_prefix` | "{ token_now.value = value; }" | `"NaN===NaN"` |
| 5370 | `constant_Function` | "{ // test_cause: // [\" Function\", \"constant_Function\", \"unexpected_a\"" | `"Function"` |
| 5377 | `constant_Function` | " else if (token_nxt.id !== \"(\") { // test_cause: // [\" // /*jslint ev" | `"/*jslint eval*/\nFunction"` |
| 5401 | `constant_eval` | "{ // test_cause: // [\" eval\", \"constant_eval\", \"unexpected_a\", \"eval\"" | `"eval"` |
| 5408 | `constant_eval` | " else if (token_nxt.id !== \"(\") { // test_cause: // [\"/*jslint eval*/" | `"/*jslint eval*/\neval"` |
| 5468 | `the_symbol.led_infix` | "{ return f(left); }" | `"0()"` |
| 5468 | `the_symbol.led_infix` | "{ return f(left); } the_token." | `"0&0"` |
| 5470 | `the_symbol.led_infix` | " the_token.expression = [left, parse_expression(bp)]; " | `"0&0"` |
| 5482 | `infix_dot` | "|| ( name.id !== \"at\" && " | `"\"\".aa"` |
| 5490 | `infix_dot` | "&& name.id !== \"replace\"" | `"\"\".aa"` |
| 5491 | `infix_dot` | "&& name.id !== \"toLowerCase\"" | `"\"\".aa"` |
| 5492 | `infix_dot` | "&& name.id !== \"toUpperCase\"" | `"\"\".aa"` |
| 5493 | `infix_dot` | "&& name.id !== \"toWellFormed\"" | `"\"\".aa"` |
| 5496 | `infix_dot` | "&& ( left.id !== \"[\" || ( " | `"aa.$"` |
| 5498 | `infix_dot` | "|| ( name.id !== \"at\" && " | `"aa=[]?.aa"` |
| 5501 | `infix_dot` | "&& name.id !== \"every\"" | `"aa=[]?.aa"` |
| 5502 | `infix_dot` | "&& name.id !== \"filter\"" | `"aa=[]?.aa"` |
| 5503 | `infix_dot` | "&& name.id !== \"find\"" | `"aa=[]?.aa"` |
| 5504 | `infix_dot` | "&& name.id !== \"findIndex\"" | `"aa=[]?.aa"` |
| 5505 | `infix_dot` | "&& name.id !== \"flat\"" | `"aa=[]?.aa"` |
| 5506 | `infix_dot` | "&& name.id !== \"flatMap\"" | `"aa=[]?.aa"` |
| 5507 | `infix_dot` | "&& name.id !== \"forEach\"" | `"aa=[]?.aa"` |
| 5508 | `infix_dot` | "&& name.id !== \"includes\"" | `"aa=[]?.aa"` |
| 5509 | `infix_dot` | "&& name.id !== \"join\"" | `"aa=[]?.aa"` |
| 5510 | `infix_dot` | "&& name.id !== \"map\"" | `"aa=[]?.aa"` |
| 5511 | `infix_dot` | "&& name.id !== \"reduce\"" | `"aa=[]?.aa"` |
| 5512 | `infix_dot` | "&& name.id !== \"some\"" | `"aa=[]?.aa"` |
| 5513 | `infix_dot` | "&& name.id !== \"toReversed\"" | `"aa=[]?.aa"` |
| 5514 | `infix_dot` | "&& name.id !== \"toSorted\"" | `"aa=[]?.aa"` |
| 5517 | `infix_dot` | "&& (left.id !== \"+\" || name.id !== \"slice\")" | `"aa.$"` |
| 5518 | `infix_dot` | "|| name.id !== \"slice\"" | `"(0+0)?.0"` |
| 5518 | `infix_dot` | "&& ( left.id !== \"(regexp)\" || " | `"aa.$"` |
| 5520 | `infix_dot` | "|| (name.id !== \"exec\" && name.id !== \"test\")" | `"(/./)?.0"` |
| 5521 | `infix_dot` | "&& name.id !== \"test\"" | `"(/./)?.0"` |
| 5523 | `infix_dot` | "{ // test_cause: // [\"(/./)?.0\", \"check_left\", \"unexpected_a\", \"?.\", " | `"aa.$"` |
| 5539 | `infix_dot` | "&& (name.id === \"[\" || name.id === \"(\")" | `"aa?.0"` |
| 5540 | `infix_dot` | "|| name.id === \"(\"" | `"aa?.0"` |
| 5541 | `infix_dot` | "{ // test_cause: // [\"aa?.(bb)\", \"infix_dot\", \"(live)\", \"\", 0] // [\"a" | `"aa?.(bb)"` |
| 5552 | `infix_dot` | " if (!name.identifier) " | `"aa.$"` |
| 5552 | `infix_dot` | " if (!name.identifier) { // test_cause: // [\"(0+0)?.0\", \"infi" | `"aa.$"` |
| 5553 | `infix_dot` | "{ // test_cause: // [\"(0+0)?.0\", \"infix_dot\", \"expected_identifier_a\"" | `"aa.0"` |
| 5562 | `infix_dot` | " advance(); survey(name); // The property name is not" | `"aa.$"` |
| 5574 | `infix_fart_unwrapped` | "{ // test_cause: // [\" 0=>0\", \"infix_fart_unwrapped\", \"expected_ident" | `"0=>0"` |
| 5581 | `infix_fart_unwrapped` | " // PR-499 - Update ES2015-feature arrow, to continue parsing unwrapp" | `"aa=>0"` |
| 5592 | `infix_grave` | "{ // test_cause: // [\"aa?.aa``\", \"infix_grave\", \"unexpected_a\", \"?.\"," | `"aa?.aa``"` |
| 5612 | `infix_lbracket` | "|| the_subscript.id === \"`\"" | `"0[0]"` |
| 5612 | `infix_lbracket` | "{ name = survey(the_subscript); // PR-404 - Add new sub-d" | `"aa[`aa`]"` |
| 5617 | `infix_lbracket` | "{ // test_cause: // [\"aa[`aa`]\", \"infix_lbracket\", \"subscript_a\", \"aa" | `"aa[`aa`]"` |
| 5638 | `infix_lparen` | "&& left.id !== \"=>\"" | `"0()"` |
| 5638 | `infix_lparen` | "{ // test_cause: // [\"(0?0:0)()\", \"check_left\", \"unexpected_a\", \"(\", " | `"0()"` |
| 5647 | `infix_lparen` | "{ // Parse/loop through each token in expression (...). " | `"aa((0))"` |
| 5651 | `infix_lparen` | "{ if (token_nxt.id === \"...\") { // test_cause: // [\"a" | `"aa((0))"` |
| 5652 | `infix_lparen` | "{ // test_cause: // [\"aa(...aa)\", \"infix_lparen\", \"(live)\", \"\", 0] " | `"aa(...aa)"` |
| 5658 | `infix_lparen` | " else { the_argument = parse_expression(10); " | `"aa((0))"` |
| 5660 | `infix_lparen` | " the_paren.expression.push(the_argument); " | `"aa((0))"` |
| 5662 | `infix_lparen` | "{ break; }" | `"aa((0))"` |
| 5662 | `infix_lparen` | "{ break; } advance" | `"aa((0))"` |
| 5664 | `infix_lparen` | " advance(\",\"); }" | `"String(0,0);"` |
| 5667 | `infix_lparen` | " advance(\")\", the_paren); if (the_paren.expression.len" | `"0()"` |
| 5669 | `infix_lparen` | "{ if ( the_argument.wrapped === true && /" | `"aa((0))"` |
| 5671 | `infix_lparen` | "&& // PR-483 - Allow parenthesis after ellipsis inside a function cal" | `"aa((0))"` |
| 5676 | `infix_lparen` | "{ // test_cause: // [\"aa((0))\", \"infix_lparen\", \"unexpected_a\", \"(\", " | `"aa((0))"` |
| 5805 | `name_declare` | "{ name.arity = \"variable\"; }" | `"aa=0"` |
| 5808 | `name_declare` | "{ return; }" | `"aa=0"` |
| 5808 | `name_declare` | "{ return; } // Declare a name into the current sc" | `"aa=0"` |
| 5810 | `name_declare` | " // Declare a name into the current scope_declared's context. The rol" | `"aa:do"` |
| 5810 | `name_declare` | " // Declare a name into the current scope_declared's context. The rol" | `"aa:do"` |
| 5818 | `name_declare` | "&& id !== \"ignore\"" | `"let undefined"` |
| 5818 | `name_declare` | "{ // test_cause: // [\"let undefined\", \"name_declare\", \"reserved_a\", \"" | `"let undefined"` |
| 5818 | `name_declare` | "{ // test_cause: // [\"let undefined\", \"name_declare\", \"reserved_a\", \"" | `"aa:do"` |
| 5825 | `name_declare` | " // Has the name been declared in this context? // PR-514 - Bugfix -" | `"aa:do"` |
| 5833 | `name_declare` | "|| scope_declared.context[id]" | `"aa:do"` |
| 5834 | `name_declare` | "{ // test_cause: // [\"let aa;(function aa(){})\", \"name_declare\", \"red" | `"let aa;let aa"` |
| 5834 | `name_declare` | "{ // test_cause: // [\"let aa;(function aa(){})\", \"name_declare\", \"red" | `"aa:do"` |
| 5834 | `name_declare` | "{ // test_cause: // [\"let aa;(function aa(){})\", \"name_declare\", \"red" | `"aa:do"` |
| 5844 | `name_declare` | " // Has the name been declared in an outer context? block_st" | `"aa:do"` |
| 5844 | `name_declare` | " // Has the name been declared in an outer context? block_st" | `"aa:do"` |
| 5850 | `` | "&& role" | `"let aa;if(0)let aa"` |
| 5851 | `` | "case \"label\": if (earlier.role !== \"label\") { // test" | `"let aa;aa:while(0){}"` |
| 5861 | `` | "case false: break;" | `"aa:do"` |
| 5863 | `` | "default: if (earlier.role === \"label\") { // test_caus" | `"let aa;if(0)let aa"` |
| 5864 | `` | "{ // test_cause: // [\"aa:while(0){let aa}\", \"name_declare\", \"redefini" | `"aa:while(0){let aa}"` |
| 5885 | `name_declare` | "{ // PR-516 - Omit a named function expression's name from its declar" | `"aa:do"` |
| 5891 | `name_declare` | " // Warn about variable redefinition. if (earlier " | `"aa:do"` |
| 5895 | `name_declare` | "&& id === \"ignore\"" | `"let aa;if(0)let aa"` |
| 5895 | `name_declare` | "{ if (earlier.role === \"variable\") { // test_cause: // [\"" | `"let ignore;(ignore)=>0"` |
| 5895 | `name_declare` | "{ if (earlier.role === \"variable\") { // test_cause: // [\"" | `"aa:do"` |
| 5895 | `name_declare` | "{ if (earlier.role === \"variable\") { // test_cause: // [\"" | `"aa:do"` |
| 5904 | `name_declare` | " if ( earlier " | `"aa:do"` |
| 5906 | `name_declare` | "&& role !== \"parameter\"" | `"let aa;if(0)let aa"` |
| 5907 | `name_declare` | "&& (role !== \"exception\" || earlier.role !== \"exception\")" | `"let aa;if(0)let aa"` |
| 5908 | `name_declare` | "|| earlier.role !== \"exception\"" | `"function aa(){try{aa();}catch(aa){aa();}}"` |
| 5909 | `name_declare` | "{ // test_cause: // [\"for(let aa;;)let aa\", \"name_declare\", \"redefini" | `"let aa;if(0)let aa"` |
| 5909 | `name_declare` | "{ // test_cause: // [\"for(let aa;;)let aa\", \"name_declare\", \"redefini" | `"aa:do"` |
| 5929 | `name_declare` | " if ( option_dict.beta && global_dict[" | `"aa:do"` |
| 5932 | `name_declare` | "&& role !== \"parameter\"" | `"let Array"` |
| 5934 | `name_declare` | "{ // test_cause: // [\"let Array\", \"name_declare\", \"redefinition_globa" | `"let Array"` |
| 5951 | `optional_chain` | "&& !thing.wrapped" | `"0=0"` |
| 5951 | `optional_chain` | "{ if (thing.id === \"?.\" || thing.optional === true) { " | `"0=0"` |
| 5952 | `optional_chain` | "|| thing.optional === true" | `"0=0"` |
| 5952 | `optional_chain` | "{ return thing; }" | `"aa?.aa``"` |
| 5952 | `optional_chain` | "{ return thing; } if (thing.ar" | `"0=0"` |
| 5954 | `optional_chain` | " if (thing.arity !== \"binary\") { return; " | `"0=0"` |
| 5954 | `optional_chain` | " if (thing.arity !== \"binary\") { return; " | `"0=0"` |
| 5955 | `optional_chain` | "{ return; }" | `"0=0"` |
| 5955 | `optional_chain` | "{ return; } switch (thing.id) " | `"0=0"` |
| 5957 | `optional_chain` | " switch (thing.id) { " | `"aa+aa=0"` |
| 5957 | `optional_chain` | " switch (thing.id) { case \"(\":" | `"aa+aa=0"` |
| 5963 | `optional_chain` | "case \".\": thing = thing.expression; br" | `"aa?.aa.aa=0"` |
| 5966 | `optional_chain` | "default: // test_cause: // [\"aa+aa=0\", \"optional_chain\", \"(live)\", \"\"" | `"aa+aa=0"` |
| 6050 | `parse_expression` | "{ advance(); }" | `"!"` |
| 6054 | `parse_expression` | "&& the_symbol.nud_prefix !== undefined" | `"!"` |
| 6054 | `parse_expression` | "{ // test_cause: // [\"0\", \"parse_expression\", \"(live)\", \"\", 0] " | `"!"` |
| 6054 | `parse_expression` | "{ // test_cause: // [\"0\", \"parse_expression\", \"(live)\", \"\", 0] " | `"!"` |
| 6060 | `parse_expression` | " else if (token_now.identifier) { // test_cause: // [\"aa\", \"parse_exp" | `"!"` |
| 6060 | `parse_expression` | " else if (token_now.identifier) { // test_cause: // [\"aa\", \"parse_exp" | `"!"` |
| 6060 | `parse_expression` | "{ // test_cause: // [\"aa\", \"parse_expression\", \"(live)\", \"\", 0] " | `"aa"` |
| 6060 | `parse_expression` | "{ // test_cause: // [\"aa\", \"parse_expression\", \"(live)\", \"\", 0] " | `"!"` |
| 6067 | `parse_expression` | " else { // test_cause: // [\"!\", \"parse_expression\", \"unexpected_a\", \"" | `"!"` |
| 6075 | `parse_expression` | " // Parse/loop through each symbol in expression. while (tru" | `"0"` |
| 6075 | `parse_expression` | " // Parse/loop through each symbol in expression. while (tru" | `"0"` |
| 6079 | `parse_expression` | "{ the_symbol = syntax_dict[token_nxt.id]; if (" | `"0"` |
| 6082 | `parse_expression` | "|| the_symbol.led_infix === undefined" | `"(0)"` |
| 6083 | `parse_expression` | "|| the_symbol.lbp <= rbp" | `"0&0"` |
| 6085 | `parse_expression` | "{ break; }" | `"0"` |
| 6085 | `parse_expression` | "{ break; } // PR-514 - Bugfix - A line br" | `"0"` |
| 6085 | `parse_expression` | "{ break; } // PR-514 - Bugfix - A line br" | `"0"` |
| 6087 | `parse_expression` | " // PR-514 - Bugfix - A line break before a postfix '++' or '--' ends" | `"0&0"` |
| 6087 | `parse_expression` | " // PR-514 - Bugfix - A line break before a postfix '++' or '--' ends" | `"0&0"` |
| 6094 | `parse_expression` | "|| token_nxt.id === \"--\"" | `"0&0"` |
| 6094 | `parse_expression` | "&& token_nxt.line !== token_now.line" | `"aa\n++aa"` |
| 6096 | `parse_expression` | "{ // test_cause: // [\" // aa // ++aa // \", \"parse_expression\", \"(live" | `"aa\n++aa"` |
| 6096 | `parse_expression` | "{ // test_cause: // [\" // aa // ++aa // \", \"parse_expression\", \"(live" | `"0&0"` |
| 6105 | `parse_expression` | " advance(); left = the_symbol.led_infix(left);" | `"0&0"` |
| 6105 | `parse_expression` | " advance(); left = the_symbol.led_infix(left);" | `"0"` |
| 6108 | `parse_expression` | " return left; " | `"0"` |
| 6118 | `parse_json` | "case \"(number)\": if (!jslint_rgx_json_number.test(token_nx" | `"[0x0]"` |
| 6119 | `parse_json` | "{ // test_cause: // [\"[-0x0]\", \"parse_json\", \"unexpected_a\", \"0x0\", 3" | `"[0x0]"` |
| 6129 | `parse_json` | "case \"(string)\": if (token_nxt.quote !== \"\\\"\") { // test_" | `"['']"` |
| 6130 | `parse_json` | "{ // test_cause: // [\"['']\", \"parse_json\", \"unexpected_a\", \"'\", 2] " | `"['']"` |
| 6139 | `parse_json` | "case \"-\": negative = token_nxt; negative.arity" | `"[-.0]"` |
| 6148 | `parse_json` | "case \"[\": // test_cause: // [\"[]\", \"parse_json\", \"(live)\", \"\", 0] " | `"[]"` |
| 6156 | `parse_json` | "{ while (true) { // Recurse parse_json. " | `"['']"` |
| 6162 | `parse_json` | "{ break; } " | `"['']"` |
| 6167 | `parse_json` | " advance(\"]\", container); return container;" | `"[]"` |
| 6170 | `parse_json` | "case \"false\":" | `"[false]"` |
| 6171 | `parse_json` | "case \"null\":" | `"[null]"` |
| 6172 | `parse_json` | "case \"true\": // test_cause: // [\"[false]\", \"parse_json\", \"(live)\", \"\"" | `"[null]"` |
| 6181 | `parse_json` | "case \"{\": // test_cause: // [\"{}\", \"parse_json\", \"(live)\", \"\", 0] " | `"{}"` |
| 6193 | `parse_json` | "{ // JSON // Parse/loop through each property in {...}. " | `"{/./"` |
| 6198 | `parse_json` | "{ if (token_nxt.quote !== \"\\\"\") { // test_cause: " | `"{/./"` |
| 6199 | `parse_json` | "{ // test_cause: // [\"{...}\", \"parse_json\", \"unexpected_a\", \"...\", 2]" | `"{/./"` |
| 6213 | `parse_json` | "{ // test_cause: // [\"{\\\"aa\\\":0,\\\"aa\\\":0}\", \"parse_json\", \"duplicate_" | `"{\"aa\":0,\"aa\":0}"` |
| 6213 | `parse_json` | "{ // test_cause: // [\"{\\\"aa\\\":0,\\\"aa\\\":0}\", \"parse_json\", \"duplicate_" | `"{\"aa\":0"` |
| 6213 | `parse_json` | "{ // test_cause: // [\"{\\\"aa\\\":0,\\\"aa\\\":0}\", \"parse_json\", \"duplicate_" | `"{\"aa\":0"` |
| 6219 | `parse_json` | "{ // test_cause: // [\"{\\\"__proto__\\\":0}\", \"parse_json\", \"weird_proper" | `"{\"__proto__\":0}"` |
| 6225 | `parse_json` | " else { is_dup[token_now.value] = token_now; " | `"{\"aa\":0"` |
| 6240 | `parse_json` | "{ break; } " | `"{\"aa\":0"` |
| 6242 | `parse_json` | " advance(\",\"); }" | `"{\"aa\":0,\"aa\":0}"` |
| 6245 | `parse_json` | " advance(\"}\", container); return container;" | `"{}"` |
| 6248 | `parse_json` | "default: // test_cause: // [\"[-.0]\", \"parse_json\", \"unexpected_a\", \"." | `"[.0]"` |
| 6271 | `parse_statement_block` | "{ switch (token_nxt.id) { case \"(end)\": " | `"\t"` |
| 6273 | `parse_statement_block` | "case \"(end)\":" | `"\t"` |
| 6274 | `parse_statement_block` | "case \"case\":" | `"\t"` |
| 6275 | `parse_statement_block` | "case \"default\":" | `"\t"` |
| 6276 | `parse_statement_block` | "case \"else\":" | `"\t"` |
| 6277 | `parse_statement_block` | "case \"}\": // test_cause: // [\";\", \"parse_statement_block\", \"(live)\", " | `"\t"` |
| 6287 | `parse_statement_block` | " a_statement = parse_statement_single(); state" | `"!"` |
| 6287 | `parse_statement_block` | " a_statement = parse_statement_single(); state" | `"!"` |
| 6290 | `parse_statement_block` | "{ // test_cause: // [\"while(0){break;0}\", \"parse_statement_block\", \"u" | `"while(0){break;0}"` |
| 6290 | `parse_statement_block` | "{ // test_cause: // [\"while(0){break;0}\", \"parse_statement_block\", \"u" | `"0"` |
| 6296 | `parse_statement_block` | " disrupt = a_statement.disrupt; }" | `"0"` |
| 6310 | `parse_statement_single` | "{ semicolon(); return stmt_semicolon(); " | `";"` |
| 6310 | `parse_statement_single` | "{ semicolon(); return stmt_semicolon(); " | `"!"` |
| 6310 | `parse_statement_single` | "{ semicolon(); return stmt_semicolon(); " | `"!"` |
| 6313 | `parse_statement_single` | " advance(); if (token_now.identifier " | `"!"` |
| 6313 | `parse_statement_single` | " advance(); if (token_now.identifier && token_nxt.id =" | `"!"` |
| 6315 | `parse_statement_single` | "&& token_nxt.id === \":\"" | `"aa"` |
| 6315 | `parse_statement_single` | "{ the_statement = stmt_label(); if (the_statem" | `"aa:"` |
| 6315 | `parse_statement_single` | "{ the_statement = stmt_label(); if (the_statem" | `"!"` |
| 6317 | `parse_statement_single` | "{ return the_statement; }" | `"aa:while(0){aa}"` |
| 6320 | `parse_statement_single` | " // Parse the statement. first = token_now; first.st" | `"!"` |
| 6320 | `parse_statement_single` | " // Parse the statement. first = token_now; first.st" | `"!"` |
| 6328 | `parse_statement_single` | "&& the_symbol.fud_stmt !== undefined" | `"!"` |
| 6329 | `parse_statement_single` | "&& // PR-318 - Bugfix - Fixes issues #316, #317 - dynamic-import(). " | `";{}"` |
| 6333 | `parse_statement_single` | "&& token_nxt.id === \"(\"" | `"import {"` |
| 6334 | `parse_statement_single` | "{ the_symbol.disrupt = false; the_symbol.state" | `";{}"` |
| 6334 | `parse_statement_single` | "{ the_symbol.disrupt = false; the_symbol.state" | `"!"` |
| 6334 | `parse_statement_single` | "{ the_symbol.disrupt = false; the_symbol.state" | `"!"` |
| 6339 | `parse_statement_single` | " else { // It is an expression statement. the_statement " | `"!"` |
| 6339 | `parse_statement_single` | " else { // It is an expression statement. the_statement " | `"!"` |
| 6344 | `parse_statement_single` | "&& the_statement.id !== \"(\"" | `"(0)"` |
| 6344 | `parse_statement_single` | "{ // test_cause: // [\" (0)\", \"parse_statement_single\", \"unexpected_a\"" | `"(0)"` |
| 6344 | `parse_statement_single` | "{ // test_cause: // [\" (0)\", \"parse_statement_single\", \"unexpected_a\"" | `"0"` |
| 6344 | `parse_statement_single` | "{ // test_cause: // [\" (0)\", \"parse_statement_single\", \"unexpected_a\"" | `"0"` |
| 6351 | `parse_statement_single` | " semicolon(); } check_ordered_var(the_stat" | `"0"` |
| 6353 | `parse_statement_single` | " check_ordered_var(the_statement); return the_statemen" | `"0"` |
| 6395 | `the_symbol.nud_prefix` | "{ return f(); }" | `"/="` |
| 6395 | `the_symbol.nud_prefix` | "{ return f(); } the_token.expr" | `"!"` |
| 6397 | `the_symbol.nud_prefix` | " the_token.expression = parse_expression(150); " | `"!"` |
| 6415 | `prefix_async` | "|| token_nxt" | `"async function aa(){}"` |
| 6418 | `prefix_async` | "&& token_nxt.identifier" | `"async aa=>0"` |
| 6418 | `prefix_async` | "{ // PR-503 - Parse async fart (unwrapped). advance(); " | `"async aa=>0"` |
| 6429 | `prefix_async` | " else if (token_nxt.fart) { // PR-414 - Parse async fart. " | `"async function aa(){}"` |
| 6442 | `prefix_async` | "{ // test_cause: // [\" // async function aa(){} // \", \"prefix_async\"," | `"async aa=>0"` |
| 6459 | `prefix_await` | "&& scope_function !== token_global" | `"function aa(){await 0}"` |
| 6459 | `prefix_await` | "{ // test_cause: // [\"function aa(){aa=await 0}\", \"prefix_await\", \"un" | `"function aa(){await 0}"` |
| 6467 | `prefix_await` | "{ scope_function.async = 2; }" | `"async function aa(){return await aa**0;}"` |
| 6471 | `prefix_await` | "{ // PR-405 - Bugfix - Fix expression after \"await\" mis-identified as" | `"function aa(){await 0}"` |
| 6496 | `name_parse` | "case \"...\": advance(\"...\"); name = tok" | `"let[...0]=0"` |
| 6500 | `name_parse` | "{ // test_cause: // [\"let[... ...]=0\", \"name_parse\", \"unexpected_a_af" | `"let[... ...]=0"` |
| 6506 | `name_parse` | " if (optional) { // test_cause: // [\"function aa(aa=0" | `"let[...0]=0"` |
| 6507 | `name_parse` | "{ // test_cause: // [\"function aa(aa=0,...){}\", \"name_parse\", \"requir" | `"function aa(aa=0,...){}"` |
| 6521 | `name_parse` | "case \"[\":" | `"([aa])=>0"` |
| 6522 | `name_parse` | "case \"{\": if (the_function?.id === \"=>\" && !option_dic" | `"([aa])=>0"` |
| 6523 | `name_parse` | "?.id" | `"([aa])=>0"` |
| 6523 | `name_parse` | "&& !option_dict.fart" | `"([aa])=>0"` |
| 6523 | `name_parse` | "{ // test_cause: // [\"([aa])=>0\", \"name_parse\", \"use_function_not_far" | `"([aa])=>0"` |
| 6531 | `name_parse` | "{ // test_cause: // [\"function aa(aa=0,[]){}\", \"name_parse\", \"require" | `"function aa(aa=0,[]){}"` |
| 6554 | `name_parse` | " if (!name.identifier) " | `"(,aa)=>0"` |
| 6554 | `name_parse` | " if (!name.identifier) { // test_cause: // [\"function aa(" | `"(,aa)=>0"` |
| 6554 | `name_parse` | " if (!name.identifier) { // test_cause: // [\"function aa(" | `"(,aa)=>0"` |
| 6555 | `name_parse` | "{ // test_cause: // [\"function aa(...0){}\", \"name_parse\", \"expected_i" | `"(,aa)=>0"` |
| 6555 | `name_parse` | "{ // test_cause: // [\"function aa(...0){}\", \"name_parse\", \"expected_i" | `"(,aa)=>0"` |
| 6555 | `name_parse` | "{ // test_cause: // [\"function aa(...0){}\", \"name_parse\", \"expected_i" | `"(,aa)=>0"` |
| 6568 | `name_parse` | " if (is_lbrace) " | `";[,aa]=0"` |
| 6568 | `name_parse` | " if (is_lbrace) { survey(name); " | `";[,aa]=0"` |
| 6569 | `name_parse` | "{ survey(name); }" | `"({aa})=>0"` |
| 6571 | `name_parse` | " advance(token_nxt.id); if (is_lbrace " | `";[,aa]=0"` |
| 6573 | `name_parse` | "&& token_nxt.id === \":\"" | `"({aa})=>0"` |
| 6573 | `name_parse` | "{ advance(\":\"); if (!the_function_topl" | `"let{aa:[aa]}=0"` |
| 6573 | `name_parse` | "{ advance(\":\"); if (!the_function_topl" | `";[,aa]=0"` |
| 6578 | `name_parse` | "{ // test_cause: // [\"let{aa:...aa}=0\", \"name_parse\", \"unexpected_a\"," | `"let{aa:...aa}=0"` |
| 6584 | `name_parse` | " if (!token_nxt.identifier) { // test_cause: // [\"let" | `";[,aa]=0"` |
| 6585 | `name_parse` | "{ // test_cause: // [\"let{aa:[aa]}=0\", \"name_parse\", \"(live)\", \"\", 0]" | `"let{aa:[aa]}=0"` |
| 6610 | `name_parse` | " name_declare( scope_declared, // " | `";[,aa]=0"` |
| 6610 | `name_parse` | " name_declare( scope_declared, // " | `";[,aa]=0"` |
| 6610 | `name_parse` | " name_declare( scope_declared, // " | `";[,aa]=0"` |
| 6623 | `name_parse` | "{ optional = the_function_toplevel && token_now; " | `";[aa=0]=0"` |
| 6624 | `name_parse` | "&& token_now" | `"(aa=aa)=>0"` |
| 6626 | `name_parse` | "{ the_destructure.open = true; }" | `";[aa=0]=0"` |
| 6630 | `name_parse` | "{ // PR-514 - Bugfix - No <post_s_var> walks a default in '[aa = bb] " | `";[aa=0]=0"` |
| 6649 | `name_parse` | " if (optional) " | `";[,aa]=0"` |
| 6649 | `name_parse` | " if (optional) { // test_cause: // [\"function aa(aa=0,bb)" | `";[,aa]=0"` |
| 6650 | `name_parse` | "{ // test_cause: // [\"function aa(aa=0,bb){}\", \"name_parse\", \"require" | `"function aa(aa=0,bb){}"` |
| 6658 | `prefix_destructure` | "{ if (!is_lbrace && !the_function_toplevel && token_nxt.id" | `"(,aa)=>0"` |
| 6659 | `prefix_destructure` | "&& !the_function_toplevel" | `"(,aa)=>0"` |
| 6659 | `prefix_destructure` | "&& token_nxt.id === \",\"" | `";[,aa]=0"` |
| 6659 | `prefix_destructure` | "{ // test_cause: // [\"([,aa])=>0\", \"prefix_destructure\", \"(live)\", \"\"" | `";[,aa]=0"` |
| 6668 | `prefix_destructure` | "{ the_function.parameter_count += 1; }" | `"(,aa)=>0"` |
| 6675 | `prefix_destructure` | "{ // Break early from ellipsis. if (the_function_top" | `"let[...aa]=0"` |
| 6675 | `prefix_destructure` | "{ // Break early from ellipsis. if (the_function_top" | `";[,aa]=0"` |
| 6679 | `prefix_destructure` | "{ the_function.parameter_rest = true; " | `"/*jslint getset*/\naa={set aa(...aa){}}"` |
| 6683 | `prefix_destructure` | " if (token_nxt.id !== \",\") " | `";[,aa]=0"` |
| 6683 | `prefix_destructure` | " if (token_nxt.id !== \",\") { break; " | `";[,aa]=0"` |
| 6684 | `prefix_destructure` | "{ break; }" | `";[,aa]=0"` |
| 6684 | `prefix_destructure` | "{ break; } advance(\",\"); " | `";[,aa]=0"` |
| 6686 | `prefix_destructure` | " advance(\",\"); }" | `"let{bb,aa}=0"` |
| 6688 | `prefix_destructure` | " name_list.push(...sub_list); if (the_function_topleve" | `";[,aa]=0"` |
| 6690 | `prefix_destructure` | "{ return the_destructure; }" | `"([aa])=>0"` |
| 6690 | `prefix_destructure` | "{ return the_destructure; } if (is_lbrace)" | `";[,aa]=0"` |
| 6690 | `prefix_destructure` | "{ return the_destructure; } if (is_lbrace)" | `";[,aa]=0"` |
| 6692 | `prefix_destructure` | " if (is_lbrace) " | `";[,aa]=0"` |
| 6692 | `prefix_destructure` | " if (is_lbrace) { // test_cause: // [\" // function aa({bb,aa}" | `";[,aa]=0"` |
| 6692 | `prefix_destructure` | " if (is_lbrace) { // test_cause: // [\" // function aa({bb,aa}" | `";[,aa]=0"` |
| 6693 | `prefix_destructure` | "{ // test_cause: // [\" // function aa({bb,aa}){} // \", \"check_ordered" | `"({aa})=>0"` |
| 6693 | `prefix_destructure` | "{ // test_cause: // [\" // function aa({bb,aa}){} // \", \"check_ordered" | `";[,aa]=0"` |
| 6706 | `prefix_destructure` | " advance(\"]\"); return the_destructure; " | `";[,aa]=0"` |
| 6729 | `prefix_function` | "&& token_nxt.identifier" | `"aa={aa()}"` |
| 6729 | `prefix_function` | "&& token_nxt" | `"function aa(){}"` |
| 6735 | `prefix_function` | "|| token_now" | `"function(){}"` |
| 6740 | `prefix_function` | "{ the_function.arity = \"binary\"; }" | `"()=>0"` |
| 6743 | `prefix_function` | "{ // A function statement must have a name that will be in the parent" | `"function(){}"` |
| 6747 | `prefix_function` | "{ // test_cause: // [\"function(){}\", \"prefix_function\", \"expected_ide" | `"function(){}"` |
| 6753 | `prefix_function` | " if (scope_function.switch > 0 && scope_block.function_bo" | `"function aa(){}"` |
| 6755 | `prefix_function` | "&& scope_block.function_body" | `"switch(0){case 0:function aa(){}}"` |
| 6755 | `prefix_function` | "{ // PR-514 - Warn a function-declaration directly in a case, as ESLi" | `"switch(0){case 0:function aa(){}}"` |
| 6768 | `prefix_function` | " else { // A function expression may have an optional name. // PR-51" | `"()=>0"` |
| 6768 | `prefix_function` | " else { // A function expression may have an optional name. // PR-51" | `"()=>0"` |
| 6777 | `prefix_function` | "{ advance(); name_declare( // 2.fun.1 - Mark " | `"function aa(){}"` |
| 6805 | `prefix_function` | "|| 0" | `"()=>0"` |
| 6814 | `prefix_function` | "|| the_function.name" | `"()=>0"` |
| 6815 | `prefix_function` | "|| ( mode_fart_unwrapped ?" | `"()=>0"` |
| 6818 | `prefix_function` | "? \"anonymous\"" | `"aa=>0"` |
| 6819 | `prefix_function` | ": anon" | `"()=>0"` |
| 6825 | `prefix_function` | "? token_prv.id" | `"aa=>0"` |
| 6826 | `prefix_function` | ": \"(\"" | `"()=>0"` |
| 6852 | `prefix_function` | "{ advance(\"(\"); token_now.arity = \"function\"; " | `"aa={aa()}"` |
| 6852 | `prefix_function` | "{ advance(\"(\"); token_now.arity = \"function\"; " | `"()=>0"` |
| 6857 | `prefix_function` | "{ // test_cause: // [\" aa=>0\", \"prefix_function\", \"wrap_fart_paramete" | `"aa=>0"` |
| 6878 | `prefix_function` | " else { const lparen = token_now; let default_" | `"()=>0"` |
| 6886 | `prefix_function` | "&& token_nxt.id !== \"(end)\"" | `"(,aa)=>0"` |
| 6886 | `prefix_function` | "{ // PR-500 - Unify ES2015-destructure-logic. - function ([aa]) {...}" | `"(,aa)=>0"` |
| 6901 | `prefix_function` | " advance(\")\"); // PR-516 - Bugfix - Copy <signature> from" | `"()=>0"` |
| 6910 | `prefix_function` | "{ if (token.id !== \"(comment)\") { " | `"()=>0"` |
| 6911 | `prefix_function` | "{ const piece = ( ( " | `"()=>0"` |
| 6914 | `prefix_function` | "&& ( token" | `"()=>0"` |
| 6916 | `prefix_function` | "|| token_before.thru < token.from" | `"()=>0"` |
| 6923 | `prefix_function` | ": \"\"" | `"()=>0"` |
| 6928 | `prefix_function` | "{ depth -= 1; }" | `"()=>0"` |
| 6935 | `prefix_function` | "&& ( depth < defau" | `"(aa=aa)=>0"` |
| 6937 | `prefix_function` | "|| (depth === default_depth && token.id ==" | `"(aa=aa)=>0"` |
| 6940 | `prefix_function` | "{ if ( default_meg" | `"(aa=aa)=>0"` |
| 6953 | `prefix_function` | "&& default_from === undefined" | `"(aa=aa)=>0"` |
| 6953 | `prefix_function` | "{ default_depth = depth; " | `"(aa=aa)=>0"` |
| 6960 | `prefix_function` | "{ depth += 1; }" | `"()=>0"` |
| 6968 | `prefix_function` | "&& !mode_fart_unwrapped" | `"()=>0"` |
| 6968 | `prefix_function` | "{ advance(\"=>\"); }" | `"()=>0"` |
| 6968 | `prefix_function` | "{ advance(\"=>\"); } if (mode_fart && token_" | `"()=>0"` |
| 6971 | `prefix_function` | "&& token_nxt.id !== \"{\"" | `"()=>0"` |
| 6971 | `prefix_function` | "{ // The function's body is an expression. // PR-384 - Bugfix - Fixe" | `"()=>0"` |
| 6971 | `prefix_function` | "{ // The function's body is an expression. // PR-384 - Bugfix - Fixe" | `"()=>0"` |
| 6978 | `prefix_function` | "&& syntax_dict[token_nxt.id].fud_stmt" | `"()=>0"` |
| 6980 | `prefix_function` | "{ // test_cause: // [\"()=>delete aa\", \"prefix_function\", \"unexpected_" | `"()=>delete aa"` |
| 6991 | `prefix_function` | " the_function.expression = parse_expression(0); } " | `"()=>0"` |
| 6993 | `prefix_function` | " else if (mode_fart) { // The function's body is a block. " | `"()=>{}"` |
| 6993 | `prefix_function` | "{ // The function's body is a block. if (!option_dict.fa" | `"()=>{}"` |
| 7005 | `prefix_function` | " else { the_function.block = block(\"body\"); if" | `"aa={aa()}"` |
| 7008 | `prefix_function` | "&& token_nxt.line === token_now.line" | `"function aa(){}"` |
| 7009 | `prefix_function` | "&& !option_dict.white" | `"function aa(){}0"` |
| 7011 | `prefix_function` | "{ // PR-503 - Fix jslint unable to continue parsing 'function aa(){}0" | `"function aa(){}0"` |
| 7011 | `prefix_function` | "{ // PR-503 - Fix jslint unable to continue parsing 'function aa(){}0" | `"aa=function(){}"` |
| 7027 | `prefix_function` | "|| token_nxt.id === \"?.\"" | `"aa=function(){}"` |
| 7033 | `prefix_function` | "{ // test_cause: // [\" function aa(){}\\n .aa\", \"prefix_function\", \"un" | `"function aa(){}\n.aa"` |
| 7042 | `prefix_function` | " // Check functions are ordered. // PR-514 - Bugfix - Check only fun" | `"()=>0"` |
| 7064 | `` | "&& level === the_function.level + 1" | `"function aa(){function bb(){}}\nbb"` |
| 7065 | `` | "&& name" | `"function aa(){function bb(){}}\nbb"` |
| 7069 | `` | "&& name.id" | `"function aa(){function bb(){}}\nbb"` |
| 7097 | `property_parse` | "&& name.id === \"`\"" | `"aa={...aa}"` |
| 7097 | `property_parse` | "{ // test_cause: // [\"aa={`aa`:0}\", \"property_parse\", \"unexpected_a\"," | `"aa={`aa`:0}"` |
| 7103 | `property_parse` | " // Issue #401 - Add ES2018-syntax for object-literal-spread-operator" | `"aa={aa()}"` |
| 7107 | `property_parse` | "&& token_nxt.id === \"...\"" | `"aa={...aa}"` |
| 7107 | `property_parse` | "{ // test_cause: // [\"aa={...aa}\", \"property_parse\", \"(live)\", \"\", 0]" | `"aa={...aa}"` |
| 7107 | `property_parse` | "{ // test_cause: // [\"aa={...aa}\", \"property_parse\", \"(live)\", \"\", 0]" | `"aa={aa()}"` |
| 7114 | `property_parse` | " advance(); if ( (name.id === " | `"aa={aa()}"` |
| 7117 | `property_parse` | "|| name.id === \"set\"" | `"aa={aa()}"` |
| 7117 | `property_parse` | "&& token_nxt.identifier" | `"aa={get aa}"` |
| 7119 | `property_parse` | "{ if (!option_dict.getset) { // test_cause: // [\"aa={" | `"aa={get aa}"` |
| 7119 | `property_parse` | "{ if (!option_dict.getset) { // test_cause: // [\"aa={" | `"aa={aa()}"` |
| 7120 | `property_parse` | "{ // test_cause: // [\"aa={get aa(){}}\", \"property_parse\", \"unexpected" | `"aa={get aa}"` |
| 7133 | `property_parse` | "|| seen[id] === true" | `"aa={get aa}"` |
| 7133 | `property_parse` | "{ // test_cause: // [\"aa={get aa(){},get aa(){}}\", \"property_parse\", " | `"aa={get aa(){},get aa(){}}"` |
| 7142 | `property_parse` | " else { id = survey(name); if (typeof " | `"aa={aa()}"` |
| 7144 | `property_parse` | "{ // test_cause: // [\"aa={aa,aa}\", \"property_parse\", \"duplicate_a\", \"" | `"aa={aa,aa}"` |
| 7144 | `property_parse` | "{ // test_cause: // [\"aa={aa,aa}\", \"property_parse\", \"duplicate_a\", \"" | `"aa={aa()}"` |
| 7152 | `property_parse` | " if (!name.identifier) " | `"aa={aa()}"` |
| 7153 | `property_parse` | "{ // test_cause: // [\"aa={\\\"aa\\\":0}\", \"property_parse\", \"(live)\", \"\"," | `"aa={\"aa\":0}"` |
| 7162 | `property_parse` | " if (token_nxt.id === \"}\" " | `"aa={aa()}"` |
| 7162 | `property_parse` | " if (token_nxt.id === \"}\" || token_nxt.id === \",\"" | `"aa={aa()}"` |
| 7163 | `property_parse` | "|| token_nxt.id === \",\"" | `"aa={aa()}"` |
| 7163 | `property_parse` | "{ if (typeof extra === \"string\") { // test_cause: // " | `"aa={aa,aa}"` |
| 7163 | `property_parse` | "{ if (typeof extra === \"string\") { // test_cause: // " | `"aa={aa()}"` |
| 7164 | `property_parse` | "{ // test_cause: // [\"aa={get aa}\", \"property_parse\", \"(live)\", \"\", 0" | `"aa={get aa}"` |
| 7170 | `property_parse` | " value = parse_expression(Infinity, true); " | `"aa={aa()}"` |
| 7172 | `property_parse` | " else if (token_nxt.id === \"(\") { // test_cause: // [\"aa={aa()}\", \"pr" | `"aa={aa()}"` |
| 7172 | `property_parse` | "{ // test_cause: // [\"aa={aa()}\", \"property_parse\", \"(live)\", \"\", 0] " | `"aa={aa()}"` |
| 7188 | `property_parse` | "? full" | `"aa={get aa(){}}"` |
| 7189 | `property_parse` | ": id" | `"aa={aa()}"` |
| 7196 | `property_parse` | " else { if (typeof extra === \"string\") { // test_caus" | `"aa={aa:0,}"` |
| 7196 | `property_parse` | " else { if (typeof extra === \"string\") { // test_caus" | `"aa={aa,aa}"` |
| 7197 | `property_parse` | "{ // test_cause: // [\"aa={get aa.aa}\", \"property_parse\", \"(live)\", \"\"" | `"aa={get aa.aa}"` |
| 7203 | `property_parse` | " the_colon = token_nxt; advance(\":\"); " | `"aa={aa:0,}"` |
| 7208 | `property_parse` | "&& value.id !== \"function\"" | `"aa={aa:aa}"` |
| 7210 | `property_parse` | "{ // test_cause: // [\"aa={aa:aa}\", \"property_parse\", \"unexpected_a\", " | `"aa={aa:aa}"` |
| 7217 | `property_parse` | " value.name_alias = name; if (typeof extra ===" | `"aa={aa,aa}"` |
| 7217 | `property_parse` | " value.name_alias = name; if (typeof extra ===" | `"aa={aa,aa}"` |
| 7219 | `property_parse` | "{ value.extra = extra; }" | `"aa={get aa(){}}"` |
| 7221 | `property_parse` | " return value; " | `"aa={aa,aa}"` |
| 7225 | `prefix_lbrace` | "{ // Parse/loop through each property in {...}. while (t" | `"aa={aa()}"` |
| 7229 | `prefix_lbrace` | "{ the_brace.expression.push(property_parse()); " | `"aa={aa()}"` |
| 7231 | `prefix_lbrace` | "{ break; }" | `"aa={...aa}"` |
| 7231 | `prefix_lbrace` | "{ break; } advance" | `"aa={...aa}"` |
| 7231 | `prefix_lbrace` | "{ break; } advance" | `"aa={...aa}"` |
| 7233 | `prefix_lbrace` | " advance(\",\"); if (token_nxt.id === \"}" | `"aa={aa,aa}"` |
| 7233 | `prefix_lbrace` | " advance(\",\"); if (token_nxt.id === \"}" | `"aa={aa,aa}"` |
| 7235 | `prefix_lbrace` | "{ // test_cause: // [\"aa={aa:0,}\", \"prefix_lbrace\", \"unexpected_a\", \"" | `"aa={aa:0,}"` |
| 7244 | `prefix_lbrace` | " // test_cause: // [\"aa={bb,aa}\", \"check_ordered\", \"expected_a_b_befo" | `"aa={}&&{}"` |
| 7265 | `prefix_lbracket` | "{ the_token = token_now.assignment; the_token." | `";[,aa]=0"` |
| 7292 | `prefix_lbracket` | " if (token_nxt.id !== \"]\") " | `"+[]"` |
| 7292 | `prefix_lbracket` | " if (token_nxt.id !== \"]\") { // Parse/loop through each eleme" | `"+[]"` |
| 7293 | `prefix_lbracket` | "{ // Parse/loop through each element in [...]. while (tr" | `"aa=[0,]"` |
| 7297 | `prefix_lbracket` | "{ if (!state.mode_json && token_nxt.id === \"...\") { /" | `"aa=[0,]"` |
| 7298 | `prefix_lbracket` | "{ // test_cause: // [\"aa=[...aa]\", \"prefix_lbracket\", \"(live)\", \"\", 0" | `"aa=[...aa]"` |
| 7307 | `prefix_lbracket` | " else { the_token.expression.push(parse_expression" | `"aa=[0,]"` |
| 7310 | `prefix_lbracket` | "{ break; }" | `"aa[[0]]"` |
| 7312 | `prefix_lbracket` | " advance(\",\"); if (token_nxt.id === \"]" | `"aa=[0,]"` |
| 7312 | `prefix_lbracket` | " advance(\",\"); if (token_nxt.id === \"]" | `"aa=[0,]"` |
| 7314 | `prefix_lbracket` | "{ // test_cause: // [\"aa=[0,]\", \"prefix_lbracket\", \"unexpected_a\", \"," | `"aa=[0,]"` |
| 7323 | `prefix_lbracket` | " advance(\"]\"); return the_token; " | `"+[]"` |
| 7334 | `prefix_lparen` | "{ return prefix_function(token_now.fart, true, false); " | `"()=>0"` |
| 7334 | `prefix_lparen` | "{ return prefix_function(token_now.fart, true, false); " | `"(0)"` |
| 7336 | `prefix_lparen` | " // test_cause: // [\"(0)\", \"prefix_lparen\", \"(live)\", \"\", 0] " | `"(0)"` |
| 7342 | `prefix_lparen` | "{ // test_cause: // [\" ((0))\", \"prefix_lparen\", \"unexpected_a\", \"(\", " | `"((0))"` |
| 7349 | `prefix_lparen` | " the_value.wrapped = true; advance(\")\", the_paren); " | `"(0)"` |
| 7364 | `prefix_new` | "{ advance(\"`\"); right = infix_grave(right); " | `"new aa``.aa()"` |
| 7372 | `prefix_new` | "{ // PR-514 - Bugfix - Rbp 160 lets an optional-chain into the callee" | `"new aa?.aa()"` |
| 7382 | `prefix_new` | "{ // test_cause: // [\"new aa\", \"prefix_new\", \"expected_a_before_b\", \"" | `"new aa"` |
| 7395 | `prefix_tick` | "{ warning_list.push(...the_tick.warning_list_untagged); " | `"`\\\n`"` |
| 7404 | `prefix_tick` | "{ advance(\"(string)\"); the_tick.value." | `"0``"` |
| 7407 | `prefix_tick` | "{ break; }" | `"0``"` |
| 7407 | `prefix_tick` | "{ break; } advance" | `"0``"` |
| 7409 | `prefix_tick` | " advance(\"${\"); // test_cause: // [\"let aa=`${}`\", \"p" | `"`${\"`\"}`"` |
| 7418 | `prefix_tick` | " advance(\"`\"); return the_tick; " | `"0``"` |
| 7445 | `semicolon` | "{ advance(\";\"); }" | `";"` |
| 7445 | `semicolon` | "{ advance(\";\"); } else { // test_cause: // [\" 0//" | `"0"` |
| 7447 | `semicolon` | " else { // test_cause: // [\" 0//c\", \"semicolon\", \"expected_a_after_b\"" | `"0"` |
| 7483 | `stmt_break` | "&& scope_function.switch < 1" | `"break"` |
| 7483 | `stmt_break` | "|| scope_function.finally > 0" | `"while(0){break;0}"` |
| 7485 | `stmt_break` | "{ // test_cause: // [\" break\", \"stmt_break\", \"unexpected_a\", \"break\"," | `"break"` |
| 7494 | `stmt_break` | "&& token_now.line === token_nxt.line" | `"break aa"` |
| 7494 | `stmt_break` | "{ block_stack.some(function (scope_block) { // PR-514 - B" | `"break aa"` |
| 7500 | `` | "{ return true; }" | `"break aa"` |
| 7502 | `` | " the_label = scope_block.context[token_nxt.id]; " | `"function aa(){aa:while(aa){break aa;}}"` |
| 7502 | `` | " the_label = scope_block.context[token_nxt.id]; " | `"function aa(){aa:while(aa){break aa;}}"` |
| 7504 | `` | "?.role" | `"function aa(){aa:while(aa){break aa;}}"` |
| 7504 | `` | "{ the_label = undefined; }" | `"function aa(){aa:while(aa){break aa;}}"` |
| 7504 | `` | "{ the_label = undefined; } " | `"function aa(){aa:while(aa){break aa;}}"` |
| 7504 | `` | "{ the_label = undefined; } " | `"function aa(){aa:while(aa){break aa;}}"` |
| 7507 | `` | "{ the_label.used = true; retur" | `"function aa(){aa:while(aa){break aa;}}"` |
| 7512 | `stmt_break` | "{ // test_cause: // [\" // aa:while(0){(function(){while(0){break aa}}" | `"break aa"` |
| 7532 | `stmt_continue` | "|| scope_function.finally > 0" | `"while(0){try{}finally{continue}}"` |
| 7532 | `stmt_continue` | "{ // test_cause: // [\"continue\", \"stmt_continue\", \"unexpected_a\", \"co" | `"continue"` |
| 7578 | `stmt_delete` | "&& [\".\", \"?.\", \"[\"].includes(the_value.expression[0].id)" | `"delete aa[aa]&&aa"` |
| 7579 | `stmt_delete` | "&& the_value.expression[0].arity === \"binary\"" | `"delete aa[aa]&&aa"` |
| 7581 | `stmt_delete` | "{ // test_cause: // [\"delete aa[aa]&&aa\", \"stmt_delete\", \"unexpected_" | `"delete aa[aa]&&aa"` |
| 7589 | `stmt_delete` | " else if ( ![\".\", \"?.\", \"[\"].includes(the_value.id) || " | `"delete 0"` |
| 7592 | `stmt_delete` | "{ // test_cause: // [\"delete 0\", \"stmt_delete\", \"expected_a_b\", \"0\", " | `"delete 0"` |
| 7613 | `stmt_do` | "{ // test_cause: // [\"function aa(){ do{break}while(0)}\", \"stmt_do\", " | `"function aa(){do{break}while(0)}"` |
| 7633 | `stmt_export` | "{ if (export_dict.default !== undefined) { // test_cause:" | `"export default {}"` |
| 7634 | `stmt_export` | "{ // test_cause: // [\" // export default 0;export default 0 // \", \"st" | `"export default 0;export default 0"` |
| 7646 | `stmt_export` | "|| the_thing.expression[0].id !== \".\"" | `"export default Object.freeze({})"` |
| 7647 | `stmt_export` | "|| the_thing.expression[0].expression.id !== \"Object\"" | `"export default Object.freeze({})"` |
| 7648 | `stmt_export` | "|| the_thing.expression[0].name.id !== \"freeze\"" | `"export default Object.freeze({})"` |
| 7650 | `stmt_export` | "{ // test_cause: // [\"export default {}\", \"stmt_export\", \"freeze_expo" | `"export default {}"` |
| 7659 | `stmt_export` | " else { // test_cause: // [\" // export default Object.freeze({}) // \"" | `"export default Object.freeze({})"` |
| 7670 | `stmt_export` | " else { // PR-439 - Add grammar for \"export async function ...\". " | `"export"` |
| 7674 | `stmt_export` | "|| token_nxt.id === \"async\"" | `"export"` |
| 7674 | `stmt_export` | "{ // test_cause: // [\"export async function aa(){}\", \"stmt_export\", \"" | `"export function aa(){}"` |
| 7702 | `stmt_export` | " else if ( token_nxt.id === \"var\" || t" | `"export"` |
| 7703 | `stmt_export` | "|| token_nxt.id === \"let\"" | `"export"` |
| 7704 | `stmt_export` | "|| token_nxt.id === \"const\"" | `"export"` |
| 7706 | `stmt_export` | "{ // test_cause: // [\"export const\", \"stmt_export\", \"unexpected_a\", \"" | `"export let"` |
| 7715 | `stmt_export` | " else if (token_nxt.id === \"{\") { // test_cause: // [\"export {}\", \"st" | `"export"` |
| 7715 | `stmt_export` | "{ // test_cause: // [\"export {}\", \"stmt_export\", \"(live)\", \"\", 0] " | `"export {}"` |
| 7721 | `stmt_export` | "{ if (!token_nxt.identifier) { // test_cause: // " | `"export {}"` |
| 7722 | `stmt_export` | "{ // test_cause: // [\"export {}\", \"stmt_export\", \"expected_identifier" | `"export {}"` |
| 7729 | `stmt_export` | " the_id = token_nxt.id; export" | `"export"` |
| 7733 | `stmt_export` | "{ // test_cause: // [\"export {aa}\", \"stmt_export\", \"unexpected_a\", \"a" | `"export {aa}"` |
| 7739 | `stmt_export` | " else { the_name.used = true; " | `"let aa;export{aa,aa}"` |
| 7741 | `stmt_export` | "{ // test_cause: // [\"let aa;export{aa,aa}\", \"stmt_export\", \"duplicat" | `"let aa;export{aa,aa}"` |
| 7752 | `stmt_export` | "{ break; } " | `"export {aa}"` |
| 7754 | `stmt_export` | " advance(\",\"); }" | `"let aa;export{aa,aa}"` |
| 7768 | `stmt_export` | " else { // test_cause: // [\"export\", \"stmt_export\", \"unexpected_a\", \"" | `"export"` |
| 7775 | `stmt_export` | " state.mode_module = true; return the_export; " | `"export {aa}"` |
| 7795 | `stmt_for` | "{ if (the_for.for_semicolon) { // test_cause: // [\" // fu" | `"for await(aa in aa){}"` |
| 7796 | `stmt_for` | "{ // test_cause: // [\" // function aa(){for await(;;){}} // \", \"stmt_" | `"function aa(){for await(;;){}}"` |
| 7805 | `stmt_for` | "{ // test_cause: // [\"()=>{for await(aa of aa){}}\", \"stmt_for\", \"unex" | `"()=>{for await(aa of aa){}}"` |
| 7818 | `stmt_for` | "{ switch (token_nxt.id) { case \";\": // test_c" | `"for(;;);"` |
| 7818 | `stmt_for` | "{ switch (token_nxt.id) { case \";\": // test_c" | `"for(;;);"` |
| 7820 | `stmt_for` | "case \";\": // test_cause: // [\"for(;;){}\", \"stmt_for\", \"expected_a_b\"," | `"for(;;);"` |
| 7827 | `stmt_for` | "case \"const\":" | `"for(const aa;;){}"` |
| 7828 | `stmt_for` | "case \"var\": // test_cause: // [\"for(const aa;;){}\", \"stmt_for\", \"expe" | `"for(var aa;;){}"` |
| 7836 | `stmt_for` | "case \"let\": // test_cause: // [\"for(let aa;;){}\", \"stmt_for\", \"(live)" | `"for(let aa;;){}"` |
| 7842 | `stmt_for` | "default: // test_cause: // [\"for(aa;;){}\", \"stmt_for\", \"expected_a\", " | `"for(aa;;){}"` |
| 7854 | `stmt_for` | "{ // test_cause: // [\"for(aa=0,bb=0;;){}\", \"stmt_for\", \"(live)\", \"\", " | `"for(aa=0,bb=0;;){}"` |
| 7854 | `stmt_for` | "{ // test_cause: // [\"for(aa=0,bb=0;;){}\", \"stmt_for\", \"(live)\", \"\", " | `"for(;;);"` |
| 7864 | `stmt_for` | "{ // test_cause: // [\"for(;;){}\", \"stmt_for\", \"unexpected_a\", \";\", 6]" | `"for(;;);"` |
| 7870 | `stmt_for` | " else { the_for.for_semicolon[1] = parse_expression(0)" | `"/*jslint for*/\nfunction aa(bb,cc){for(0;0;0){break;}}"` |
| 7875 | `stmt_for` | "{ // test_cause: // [\"for(;;){}\", \"stmt_for\", \"unexpected_a\", \")\", 7]" | `"for(;;);"` |
| 7881 | `stmt_for` | " else { the_for.for_semicolon[2] = parse_expression(0)" | `"/*jslint for*/\nfunction aa(bb,cc){for(0;0;0){break;}}"` |
| 7884 | `stmt_for` | " else { switch (token_nxt.id) { case \"const\": " | `"for(aa 0){}"` |
| 7884 | `stmt_for` | " else { switch (token_nxt.id) { case \"const\": " | `"for(;;);"` |
| 7886 | `stmt_for` | "case \"const\":" | `"for(const aa=aa){}"` |
| 7887 | `stmt_for` | "case \"let\": // test_cause: // [\"for(const aa in aa){}\", \"stmt_for\", \"" | `"for(let aa=aa){}"` |
| 7896 | `stmt_for` | "case \"var\": // test_cause: // [\"for(var aa in aa){}\", \"stmt_for\", \"ex" | `"for(var aa=aa){}"` |
| 7904 | `stmt_for` | "default: // test_cause: // [\"for(aa in aa){}\", \"stmt_for\", \"expected_" | `"for(aa 0){}"` |
| 7914 | `stmt_for` | "case \"const\":" | `"for(const aa=aa){}"` |
| 7915 | `stmt_for` | "case \"let\":" | `"for(let aa=aa){}"` |
| 7916 | `stmt_for` | "case \"var\": the_variable = parse_statement_single(); " | `"for(let aa=aa){}"` |
| 7921 | `stmt_for` | "default: // PR-514 - Bugfix - Parse the target at rbp 110, which stop" | `"for(aa 0){}"` |
| 7929 | `stmt_for` | "&& token_nxt.id !== \"of\"" | `"for(aa 0){}"` |
| 7929 | `stmt_for` | "{ // test_cause: // [\"for(aa 0){}\", \"stmt_for\", \"expected_a_b\", \"0\", " | `"for(aa 0){}"` |
| 7941 | `stmt_for` | " advance(); the_operator = token_now; " | `"for(aa in aa){}"` |
| 7948 | `stmt_for` | " the_variable.for_init = true; switch (the_ope" | `"for(aa in aa){}"` |
| 7951 | `stmt_for` | "case \"in\": if (for_await) { // test_cause: // [\"for a" | `"for(aa in aa){}"` |
| 7952 | `stmt_for` | "{ // test_cause: // [\"for await(aa in aa){}\", \"stmt_for\", \"expected_a" | `"for await(aa in aa){}"` |
| 7980 | `stmt_for` | "case \"of\": // test_cause: // [\"for(aa of aa){}\", \"stmt_for\", \"(live)\"" | `"for(aa of aa){}"` |
| 7991 | `stmt_for` | "default: // test_cause: // [\"for(const aa=aa){}\", \"stmt_for\", \"expect" | `"for(let aa=aa){}"` |
| 8005 | `stmt_for` | " advance(\")\"); the_for.block = block(); if (th" | `"for(;;);"` |
| 8008 | `stmt_for` | "{ // test_cause: // [\" // /*jslint for*/ // function aa(bb,cc){for(0;" | `"/*jslint for*/\nfunction aa(bb,cc){for(0;0;0){break;}}"` |
| 8028 | `stmt_if` | "{ advance(\"else\"); the_else = token_now; " | `"if(0){0}else{0}"` |
| 8028 | `stmt_if` | "{ advance(\"else\"); the_else = token_now; " | `"if(0){}"` |
| 8033 | `stmt_if` | "? parse_statement_single()" | `"if(0){0}else if(0){0}"` |
| 8034 | `stmt_if` | ": block()" | `"if(0){0}else{0}"` |
| 8041 | `stmt_if` | "{ if (the_if.else.disrupt === true) { // test_cause: " | `"if(0){break;}else{}"` |
| 8042 | `stmt_if` | "{ // test_cause: // [\"if(0){break}else{break}\", \"stmt_if\", \"(live)\", " | `"if(0){break}else{break}"` |
| 8048 | `stmt_if` | " else { // test_cause: // [\"if(0){break;}else{}\", \"stmt_if\", \"unexpec" | `"if(0){break;}else{}"` |
| 8069 | `stmt_import` | "{ // test_cause: // [\"import \\\"aa\\\"\", \"stmt_import\", \"expected_a_b\", " | `"import \"aa\""` |
| 8078 | `stmt_import` | " if (token_nxt.id === \"*\") { advance(\"*\");" | `"import {"` |
| 8079 | `stmt_import` | "{ advance(\"*\"); advance(\"as\"); " | `"import * as"` |
| 8089 | `stmt_import` | " if (token_nxt.identifier) { name = token_" | `"import {"` |
| 8090 | `stmt_import` | "{ name = token_nxt; advance(); " | `"import aa from \"!aa\""` |
| 8093 | `stmt_import` | "{ // test_cause: // [\"import ignore from \\\"aa\\\"\", \"stmt_import\", \"une" | `"import ignore from \"aa\""` |
| 8117 | `stmt_import` | " else { advance(\"{\"); if (token_nxt.id" | `"import {"` |
| 8121 | `stmt_import` | "{ // test_cause: // [\"import {\", \"stmt_import\", \"expected_identifier_" | `"import {"` |
| 8127 | `stmt_import` | " name = token_nxt; adv" | `"import {aa as 0}"` |
| 8130 | `stmt_import` | "{ advance(\"as\"); " | `"import {aa as 0}"` |
| 8138 | `stmt_import` | " name = token_nxt; " | `"import {ignore} from \"aa\""` |
| 8171 | `stmt_import` | " advance(\"}\"); } // PR-347 - Disable warn" | `"import aa from \"!aa\""` |
| 8200 | `stmt_import` | "{ // test_cause: // [\"import aa from \\\"!aa\\\"\", \"stmt_import\", \"bad_mo" | `"import aa from \"!aa\""` |
| 8223 | `stmt_label` | "{ // test_cause: // [\" ignore:\", \"stmt_label\", \"unexpected_a\", \"ignor" | `"ignore:"` |
| 8233 | `stmt_label` | "case \"do\":" | `"aa:do"` |
| 8234 | `stmt_label` | "case \"for\":" | `"aa:do"` |
| 8235 | `stmt_label` | "case \"switch\":" | `"aa:do"` |
| 8236 | `stmt_label` | "case \"while\": // test_cause: // [\"aa:do\", \"stmt_label\", \"(live)\", \"\"," | `"aa:do"` |
| 8245 | `stmt_label` | "default: // test_cause: // [\"()=>{aa:0}\", \"stmt_label\", \"unexpected_l" | `"aa:"` |
| 8258 | `stmt_label` | " // PR-504 - Add hidden scope_block for: // - label-name sco" | `"aa:do"` |
| 8305 | `stmt_return` | "{ // test_cause: // [\" // function aa(){try{}finally{return;}} // \", " | `"function aa(){try{}finally{return;}}"` |
| 8315 | `stmt_return` | "&& the_return.line === token_nxt.line" | `"function aa(aa) {return aa;}"` |
| 8315 | `stmt_return` | "{ the_return.expression = parse_expression(10); }" | `"function aa(aa) {return aa;}"` |
| 8347 | `stmt_switch` | "{ // test_cause: // [\" // function aa(){try{}finally{switch(0){}}} //" | `"function aa(){try{}finally{switch(0){}}}"` |
| 8362 | `stmt_switch` | "{ // Loop through cases with breaks. the_case = token_nx" | `"switch(0){case 0:}"` |
| 8362 | `stmt_switch` | "{ // Loop through cases with breaks. the_case = token_nx" | `"switch(0){case 0:}"` |
| 8369 | `stmt_switch` | "{ // Loop through fallthrough cases. advance(\"case\")" | `"switch(0){case 0:}"` |
| 8376 | `stmt_switch` | "{ // test_cause: // [\" // switch(0){case 0:break;case 0:break} // \", " | `"switch(0){case 0:break;case 0:break}"` |
| 8376 | `stmt_switch` | "{ // test_cause: // [\" // switch(0){case 0:break;case 0:break} // \", " | `"switch(0){case 0:}"` |
| 8388 | `stmt_switch` | "{ break; }" | `"switch(0){case 0:}"` |
| 8391 | `stmt_switch` | " // test_cause: // [\" // switch(0){case 1:case 0:break;} // \", \"check" | `"switch(0){case 0:}"` |
| 8412 | `stmt_switch` | "{ // test_cause: // [\" // switch(0){case 0:default:} // \", \"stmt_swit" | `"switch(0){case 0:}"` |
| 8425 | `stmt_switch` | " the_case.block = parsed_block; the_cases.push" | `"switch(0){case 0:;}"` |
| 8429 | `stmt_switch` | "{ if (last.id === \"break\" && last.label_break === unde" | `"switch(0){case 1:case 0:break;}"` |
| 8430 | `stmt_switch` | "&& last.label_break === undefined" | `"switch(0){case 1:case 0:break;}"` |
| 8430 | `stmt_switch` | "{ the_disrupt = false; }" | `"switch(0){case 1:case 0:break;}"` |
| 8433 | `stmt_switch` | " else { // test_cause: // [\"switch(0){case 0:;}\", \"stmt_switch\", \"exp" | `"switch(0){case 0:;}"` |
| 8440 | `stmt_switch` | "{ break; }" | `"switch(0){case 0:;}"` |
| 8443 | `stmt_switch` | " // test_cause: // [\" // switch(0){case 1:break;case 0:break;} // \", " | `"switch(0){case 0:}"` |
| 8468 | `stmt_switch` | "{ the_default = token_nxt; advance(\"default\");" | `"switch(0){case 0:default:}"` |
| 8474 | `stmt_switch` | "{ // test_cause: // [\" // switch(0){case 0:break;default:} // \", \"stm" | `"switch(0){case 0:default:}"` |
| 8483 | `stmt_switch` | " else { the_last = the_switch.else[ " | `"switch(0){case 0:break;default:break;}"` |
| 8488 | `stmt_switch` | "&& the_last.label_break === undefined" | `"switch(0){case 0:break;default:break;}"` |
| 8490 | `stmt_switch` | "{ // test_cause: // [\" // switch(0){case 0:break;default:break;} // \"" | `"switch(0){case 0:break;default:break;}"` |
| 8502 | `stmt_switch` | " else { the_disrupt = false; }" | `"switch(0){case 0:}"` |
| 8516 | `stmt_throw` | "{ // test_cause: // [\"try{throw 0}catch(){}\", \"stmt_throw\", \"unexpect" | `"try{throw 0}catch(){}"` |
| 8531 | `stmt_try` | "{ // test_cause: // [\"try{try{}catch(){}}catch(){}\", \"stmt_try\", \"une" | `"try{try{}catch(){}}catch(){}"` |
| 8539 | `stmt_try` | "{ // test_cause: // [\"try\", \"stmt_try\", \"expected_a_b\", \"(end)\", 3] " | `"try"` |
| 8545 | `stmt_try` | " the_try.block = block(); the_disrupt = the_try.block." | `"try{}finally;"` |
| 8548 | `stmt_try` | "{ ignored = \"ignore\"; the_catch = token_nxt; " | `"try{}catch(){}"` |
| 8558 | `stmt_try` | "{ advance(\"(\"); if (!token_nxt.identif" | `"try{}catch(){}"` |
| 8560 | `stmt_try` | "{ // test_cause: // [\"try{}catch(){}\", \"stmt_try\", \"expected_identifi" | `"try{}catch(){}"` |
| 8566 | `stmt_try` | " if (token_nxt.id !== \"ignore\") { " | `"try{}catch(aa);"` |
| 8566 | `stmt_try` | " if (token_nxt.id !== \"ignore\") { " | `"try{}finally;"` |
| 8567 | `stmt_try` | "{ ignored = undefined; the_cat" | `"try{}catch(aa);"` |
| 8596 | `stmt_try` | "{ // test_cause: // [\"try{}catch(aa);\", \"stmt_try\", \"expected_a_b\", \"" | `"try{}catch(aa);"` |
| 8603 | `stmt_try` | " the_catch.block = block(ignored); if (the_cat" | `"try{}finally;"` |
| 8605 | `stmt_try` | "{ the_disrupt = false; }" | `"try{}catch(aa){}aa"` |
| 8622 | `stmt_try` | " if (token_nxt.id === \"finally\") { scope_function." | `"try{}finally;"` |
| 8623 | `stmt_try` | "{ scope_function.finally += 1; advance(\"finall" | `"try{}finally;"` |
| 8627 | `stmt_try` | "{ // test_cause: // [\"try{}finally;\", \"stmt_try\", \"expected_a_b\", \";\"" | `"try{}finally;"` |
| 8633 | `stmt_try` | " the_try.finally = block(); the_disrupt = the_" | `"try{}finally{aa}"` |
| 8637 | `stmt_try` | " the_try.disrupt = the_disrupt; scope_function.try -= " | `"try{}finally{aa}"` |
| 8648 | `stmt_var` | "? scope_function" | `"var[aa]=0"` |
| 8654 | `stmt_var` | ": scope_block" | `"let 0"` |
| 8661 | `advance_operator` | "case \"=\": the_variable.operator = the_operator; " | `"let aa=0"` |
| 8665 | `advance_operator` | "case \"in\":" | `"let aa in 0"` |
| 8666 | `advance_operator` | "case \"of\": if (for_init) { // test_cause: // [\"for(le" | `"let aa in 0"` |
| 8667 | `advance_operator` | "{ // test_cause: // [\"for(let aa in 0){}\", \"advance_operator\", \"(live" | `"for(let aa in 0){}"` |
| 8678 | `advance_operator` | " // test_cause: // [\"let aa in 0\", \"advance_operator\", \"(live)\", \"\", " | `"let aa in 0"` |
| 8689 | `advance_operator` | "default: if (readonly) { the_varia" | `"let aa;"` |
| 8690 | `advance_operator` | "{ the_variable.operator = the_operator; " | `"for(const aa;;){}"` |
| 8700 | `stmt_var` | "{ if (mode_var === undefined) { mode_var =" | `"let 0"` |
| 8701 | `stmt_var` | "{ mode_var = the_variable.id; }" | `"let 0"` |
| 8701 | `stmt_var` | "{ mode_var = the_variable.id; } else if (t" | `"let 0"` |
| 8703 | `stmt_var` | " else if (the_variable.id !== mode_var) { // test_cause: // [\"let aa;" | `"let aa;let aa"` |
| 8703 | `stmt_var` | "{ // test_cause: // [\"let aa;var aa\", \"stmt_var\", \"expected_a_b\", \"va" | `"let aa;var aa"` |
| 8718 | `stmt_var` | "{ // test_cause: // [\"switch(0){case 0:var aa}\", \"stmt_var\", \"var_swi" | `"switch(0){case 0:var aa}"` |
| 8725 | `stmt_var` | "{ if (token_nxt.id === \"{\" || token_nxt.id === \"[\") { " | `"let 0"` |
| 8726 | `stmt_var` | "|| token_nxt.id === \"[\"" | `"let 0"` |
| 8726 | `stmt_var` | "{ if (the_variable.id === \"var\") { // test_cause: // " | `"let[0]=0"` |
| 8727 | `stmt_var` | "{ // test_cause: // [\"var[aa]=0\", \"stmt_var\", \"unexpected_a\", \"var\", " | `"var[aa]=0"` |
| 8750 | `stmt_var` | " else if (token_nxt.identifier) { name = token_nxt; " | `"let 0"` |
| 8750 | `stmt_var` | " else if (token_nxt.identifier) { name = token_nxt; " | `"let 0"` |
| 8750 | `stmt_var` | "{ name = token_nxt; advance(); " | `"let aa;"` |
| 8753 | `stmt_var` | "{ // test_cause: // [\" // let ignore;function aa(ignore) {} // \", \"st" | `"let ignore;(ignore)=>0"` |
| 8765 | `stmt_var` | "case \"=\":" | `"let aa=0"` |
| 8766 | `stmt_var` | "case \"in\":" | `"let aa=0"` |
| 8767 | `stmt_var` | "case \"of\": name.expression = parse_expression(0); " | `"let aa=0"` |
| 8770 | `stmt_var` | " name_declare( // 3.var.1 - Mark 'declared', the vari" | `"let 0"` |
| 8788 | `stmt_var` | " else { // test_cause: // [\"let 0\", \"stmt_var\", \"expected_identifier_" | `"let 0"` |
| 8795 | `stmt_var` | " if (token_nxt.id !== \",\") { break; " | `"let aa;"` |
| 8796 | `stmt_var` | "{ break; } // test_cause: // [\"let aa,bb\"" | `"let aa;"` |
| 8798 | `stmt_var` | " // test_cause: // [\"let aa,bb\", \"stmt_var\", \"expected_a_b\", \",\", 7] " | `"let aa,bb"` |
| 8806 | `stmt_var` | "|| token_nxt.id === \";\"" | `"for(let aa;;){}"` |
| 8806 | `stmt_var` | "{ semicolon(); }" | `"let aa;"` |
| 8806 | `stmt_var` | "{ semicolon(); } return the_variable; " | `"let aa;"` |
| 8818 | `stmt_while` | "{ // test_cause: // [\"function aa(){ while(0){break}}\", \"stmt_while\"," | `"function aa(){while(0){break}}"` |
| 8818 | `stmt_while` | "{ // test_cause: // [\"function aa(){ while(0){break}}\", \"stmt_while\"," | `"while(0);"` |
| 8846 | `survey` | "case \"(number)\": // PR-409 - jquery - Tolerate numeric object-key `{0" | `"String({0:0})"` |
| 8856 | `survey` | "case \"(string)\": id = name.value; if (!jslint_" | `"aa={\"aa\":0}"` |
| 8860 | `survey` | " break;" | `"aa={\"aa\":0}"` |
| 8862 | `survey` | "case \"`\": if (name.value.length === 1) { i" | `"aa[`aa`]"` |
| 8870 | `survey` | "default: if (!name.identifier) { // test_cause: // [\"Stri" | `"aa.$"` |
| 8871 | `survey` | "{ // test_cause: // [\"String({+:0})\", \"survey\", \"expected_identifier_" | `"String({+:0})"` |
| 8878 | `survey` | " // If we have seen this name before, increment its count. i" | `"aa.$"` |
| 8878 | `survey` | " // If we have seen this name before, increment its count. i" | `"aa.$"` |
| 8882 | `survey` | "{ property_dict[id] += 1; return id; }" | `"aa={aa,aa}"` |
| 8882 | `survey` | "{ property_dict[id] += 1; return id; }" | `"aa.$"` |
| 8885 | `survey` | " // If this is the first time seeing this property name, and if there" | `"aa.$"` |
| 8885 | `survey` | " // If this is the first time seeing this property name, and if there" | `"aa.$"` |
| 8891 | `survey` | "{ if (tenure[id] !== true) { // test_cause: // [\"/*proper" | `"/*property aa*/\naa.bb"` |
| 8892 | `survey` | "{ // test_cause: // [\"/*property aa*/\\naa.bb\", \"survey\", \"unregistere" | `"/*property aa*/\naa.bb"` |
| 8899 | `survey` | " else if ( !option_dict.nomen && name.identifi" | `"aa.$"` |
| 8901 | `survey` | "&& jslint_rgx_weird_property.test(id)" | `"aa.$"` |
| 8903 | `survey` | "{ // test_cause: // [\"aa.$\", \"survey\", \"weird_property_a\", \"$\", 4] //" | `"aa.$"` |
| 8913 | `survey` | " property_dict[id] = 1; return id; " | `"aa.$"` |
| 8925 | `symbol` | "{ the_symbol = empty(); the_symbol.id = id; " | `"\t"` |
| 8928 | `symbol` | "|| 0" | `"\t"` |
| 8951 | `parse_ternary_led` | "{ // test_cause: // [\"0?0:0\", \"parse_ternary_led\", \"use_open\", \"?\", 2" | `"0?0:0"` |
| 9117 | `jslint_phase3_parse` | "{ state.token_tree = parse_json(); advance(\"(end)\"); " | `"[]"` |
| 9121 | `jslint_phase3_parse` | " // Because browsers encourage combining of script files, the first t" | `"\t"` |
| 9133 | `jslint_phase3_parse` | " else if (token_nxt.value === \"use strict\") { advance(\"(string" | `"\t"` |
| 9166 | `` | "|| Object.values(export_dict).includes(the_functio" | `"()=>0"` |
| 9168 | `` | "&& level === 1" | `"function aa(){}"` |
| 9169 | `` | "&& name" | `"function aa(){}"` |
| 9173 | `` | "&& name.id" | `"function aa(){}"` |
| 9243 | `` | "{ a_set = empty(); when[arity] = a_set" | `"\t"` |
| 9251 | `` | "{ i_set = []; a_set[id] = i_set; " | `"\t"` |
| 9277 | `` | "{ // If there are tasks associated with the token's id... " | `"!0"` |
| 9282 | `` | "{ i_set.forEach(function (task) { " | `"~0"` |
| 9291 | `` | "{ i_set.forEach(function (task) { " | `"!0"` |
| 9306 | `check_assignable` | "{ // PR-514 - An undeclared <name> returns false with no warning, sin" | `"aa=0"` |
| 9317 | `check_assignable` | " if (the_variable.readonly) { // test_cause: // [\"const aa=0;" | `"const aa=0;++aa"` |
| 9318 | `check_assignable` | "{ // test_cause: // [\"const aa=0;++aa\", \"check_assignable\", \"bad_assi" | `"const aa=0;++aa"` |
| 9332 | `check_assignable` | " return true; " | `"let aa=0;aa+=0;"` |
| 9373 | `` | "?.role" | `"let aa=aa"` |
| 9373 | `` | "{ // test_cause: // [\"aa:while(0){aa}\", \"name_lookup\", \"(live)\", \"\", " | `"aa:while(0){aa}"` |
| 9382 | `` | "&& ii > ii_function" | `"let aa=aa"` |
| 9382 | `` | "{ // PR-516 - Bugfix - Mark closure only if found outside the current" | `"let aa=()=>aa"` |
| 9392 | `name_lookup` | "&& global_dict[id] === undefined" | `"aa"` |
| 9392 | `name_lookup` | "{ if (the_label) { // test_cause: // [\"aa:while(0){aa}\", " | `"aa"` |
| 9393 | `name_lookup` | "{ // test_cause: // [\"aa:while(0){aa}\", \"name_lookup\", \"label_a\", \"aa" | `"aa:while(0){aa}"` |
| 9400 | `name_lookup` | " // test_cause: // [\"(function aa(){})aa\", \"name_lookup\", \"undeclared" | `"aa"` |
| 9422 | `name_lookup` | " // If it isn't in any of those either, perhaps it is a predefined gl" | `"String();"` |
| 9422 | `name_lookup` | " // If it isn't in any of those either, perhaps it is a predefined gl" | `"String();"` |
| 9427 | `name_lookup` | "{ the_variable = { // 3.glo.2 - Mark 'alive', the global-" | `"String();"` |
| 9451 | `name_lookup` | "{ // PR-514 - Deviation kept 2026-09-29. A function reading a 'let' d" | `"let aa=aa"` |
| 9469 | `name_lookup` | " return the_variable; " | `"String();"` |
| 9481 | `post_a_assignment` | "{ if ( lvalue.arity === \"variable\" && " | `"0&=0"` |
| 9483 | `post_a_assignment` | "&& check_assignable(lvalue, lvalue.variable)" | `"aa+=0"` |
| 9484 | `post_a_assignment` | "&& (thing.id === \"??=\" || thing.id === \"||=\")" | `"let aa=0;aa+=0;"` |
| 9496 | `post_a_assignment` | "&& ( right.id === \"function\" || " | `"0&=0"` |
| 9501 | `post_a_assignment` | "&& right.id !== \"(number)\"" | `"0&=0"` |
| 9502 | `post_a_assignment` | "&& (right.id !== \"(string)\" || thing.id !== \"+" | `"aa-=undefined"` |
| 9506 | `post_a_assignment` | "{ // test_cause: // [\"aa-=undefined\", \"post_a_assignment\", \"unexpecte" | `"aa-=undefined"` |
| 9514 | `post_a_assignment` | " if (thing.name_list) " | `"0=0"` |
| 9514 | `post_a_assignment` | " if (thing.name_list) { for (const name of thing.n" | `"0=0"` |
| 9515 | `post_a_assignment` | "{ for (const name of thing.name_list) { co" | `"aa=0"` |
| 9516 | `post_a_assignment` | "{ const the_variable = name_lookup(name); " | `"aa=0"` |
| 9518 | `post_a_assignment` | "{ // 3.var.3 - Mark 'assigned', the variable, after assignment. " | `"let aa;aa=!aa**aa;"` |
| 9526 | `post_a_assignment` | " if (lvalue.id === \".\" " | `"0=0"` |
| 9526 | `post_a_assignment` | " if (lvalue.id === \".\" && thing.expression[1].id === \"undefine" | `"0=0"` |
| 9527 | `post_a_assignment` | "&& thing.expression[1].id === \"undefined\"" | `"aa?.aa.aa=0"` |
| 9527 | `post_a_assignment` | "{ // test_cause: // [\" // let aa; aa.aa=undefined; // \", \"post_a_assi" | `"let aa;aa.aa=undefined;"` |
| 9544 | `post_a_pluseq` | "{ if ( right.value === \"\" || " | `"aa+=0"` |
| 9547 | `post_a_pluseq` | "&& right.value === \"0\"" | `"aa+=0"` |
| 9547 | `post_a_pluseq` | "|| right.id === \"(boolean)\"" | `"function aa() {\n    for (\n        let bb = 0;\nbb < 0;\n        bb += 1\n    ) {\n        aa(bb);\n    }\n}"` |
| 9548 | `post_a_pluseq` | "|| right.id === \"null\"" | `"function aa() {\n    for (\n        let bb = 0;\nbb < 0;\n        bb += 1\n    ) {\n        aa(bb);\n    }\n}"` |
| 9549 | `post_a_pluseq` | "|| right.id === \"undefined\"" | `"function aa() {\n    for (\n        let bb = 0;\nbb < 0;\n        bb += 1\n    ) {\n        aa(bb);\n    }\n}"` |
| 9550 | `post_a_pluseq` | "|| Number.isNaN(right.value)" | `"function aa() {\n    for (\n        let bb = 0;\nbb < 0;\n        bb += 1\n    ) {\n        aa(bb);\n    }\n}"` |
| 9552 | `post_a_pluseq` | "{ // test_cause: // [\"let aa=0;aa+=0;\", \"post_a_pluseq\", \"unexpected_" | `"aa+=0"` |
| 9564 | `post_b_and` | "|| is_equal(thing.expression[0], thing.expression[1])" | `"0&&0"` |
| 9565 | `post_b_and` | "|| thing.expression[0].constant === true" | `"aa&&bb??cc"` |
| 9566 | `post_b_and` | "|| thing.expression[1].constant === true" | `"aa&&bb??cc"` |
| 9568 | `post_b_and` | "{ // test_cause: // [\"aa=(()=>0)&&(()=>0)\", \"post_b_and\", \"weird_cond" | `"0&&0"` |
| 9589 | `post_b_binary` | "{ if ( is_weird(thing.expression[0]) || " | `"0!=0"` |
| 9593 | `post_b_binary` | "|| ( thing.expression[0].constant " | `"0<0<0"` |
| 9595 | `post_b_binary` | "&& thing.expression[1].constant === true" | `"0<0<0"` |
| 9598 | `post_b_binary` | "{ // test_cause: // [\"if(0===0){0}\", \"post_b_binary\", \"weird_relation" | `"0!=0"` |
| 9607 | `post_b_binary` | "case \"(\":" | `"0()"` |
| 9608 | `post_b_binary` | "case \"=>\":" | `"0()"` |
| 9613 | `post_b_binary` | "case \"`\": break;" | `"0()"` |
| 9615 | `post_b_binary` | "case \"+\": if (!option_dict.convert) { if (" | `"aa+aa=0"` |
| 9617 | `post_b_binary` | "{ // test_cause: // [\"let aa=\\\"\\\"+0;\", \"post_b_binary\", \"expected_a_b" | `"let aa=\"\"+0;"` |
| 9623 | `post_b_binary` | " else if (thing.expression[1].value === \"\") { // test_cause: // [\"let" | `"aa+aa=0"` |
| 9623 | `post_b_binary` | "{ // test_cause: // [\"let aa=0+\\\"\\\";\", \"post_b_binary\", \"expected_a_b" | `"let aa=0+\"\";"` |
| 9632 | `post_b_binary` | "case \".\":" | `"aa.$"` |
| 9633 | `post_b_binary` | "case \"?.\": if (thing.expression.id === \"RegExp\") { // PR-" | `"aa.$"` |
| 9634 | `post_b_binary` | "{ // PR-499 - Relax warning for ES2025-feature RegExp.escape(). " | `"aa=RegExp.aa"` |
| 9647 | `post_b_binary` | "case \"[\": if (thing.expression[0].id === \"window\") { // t" | `"0[0]"` |
| 9648 | `post_b_binary` | "{ // test_cause: // [\"aa=window[0]\", \"post_b_binary\", \"weird_expressi" | `"aa=window[0]"` |
| 9655 | `post_b_binary` | "{ // test_cause: // [\"aa=self[0]\", \"post_b_binary\", \"weird_expression" | `"aa=self[0]"` |
| 9663 | `post_b_binary` | "default: right = thing.expression[1]; if ( " | `"0&0"` |
| 9666 | `post_b_binary` | "&& right.id === thing.id" | `"0- -0"` |
| 9667 | `post_b_binary` | "&& right.arity === \"unary\"" | `"0- -0"` |
| 9668 | `post_b_binary` | "&& !right.wrapped" | `"0- -0"` |
| 9670 | `post_b_binary` | "{ // test_cause: // [\"0- -0\", \"post_b_binary\", \"wrap_subexpression_a_" | `"0- -0"` |
| 9679 | `post_b_binary` | "&& thing.expression[0].arity === \"unary\"" | `"0**0"` |
| 9680 | `post_b_binary` | "&& !thing.expression[0].wrapped" | `"aa=-0**0"` |
| 9681 | `post_b_binary` | "&& // PR-xxx - deadcode-confirmed - A 'void' here never showed its wa" | `"aa=-0**0"` |
| 9692 | `post_b_binary` | "{ // PR-514 - Bugfix - A unary operator before '**' is a SyntaxError," | `"aa=-0**0"` |
| 9725 | `post_b_binary` | "{ // PR-514 - Bugfix - An unwrapped '&&' or '||' operand of '??' is a" | `"aa&&bb??cc"` |
| 9733 | `` | "|| thang.id === \"||\"" | `"aa&&bb??cc"` |
| 9733 | `` | "&& !thang.wrapped" | `"aa&&bb??cc"` |
| 9735 | `` | "{ // test_cause: // [\"aa&&bb??cc\", \"post_b_binary\", \"wrap_subexpressi" | `"aa&&bb??cc"` |
| 9746 | `post_b_binary` | "&& right.constant === true" | `"0&0"` |
| 9748 | `post_b_binary` | "{ thing.constant = true; }" | `"0&0"` |
| 9755 | `post_b_lbracket` | "{ // test_cause: // [\"aa=RegExp[0]\", \"post_b_lbracket\", \"weird_expres" | `"aa=RegExp[0]"` |
| 9762 | `post_b_lbracket` | "{ // test_cause: // [\"aa[[0]]\", \"post_b_lbracket\", \"weird_expression_" | `"aa[[0]]"` |
| 9779 | `post_b_lparen` | "{ the_new = left; left = left.expression; " | `"new aa()"` |
| 9783 | `post_b_lparen` | "{ if (!thing.wrapped) { // test_cause: // [\"aa=function()" | `"(function(){}())"` |
| 9784 | `post_b_lparen` | "{ // test_cause: // [\"aa=function(){}()\", \"post_b_lparen\", \"wrap_imme" | `"aa=function(){}()"` |
| 9791 | `post_b_lparen` | " else if (left.identifier) { if (the_new !== undefined) { " | `"0()"` |
| 9791 | `post_b_lparen` | "{ if (the_new !== undefined) { // PR-xxx - deadcode-confi" | `"aa((0))"` |
| 9792 | `post_b_lparen` | "{ // PR-xxx - deadcode-confirmed - A branch for 'new Function' never " | `"new aa()"` |
| 9806 | `post_b_lparen` | "|| left.id === \"BigInt\"" | `"new Array()"` |
| 9807 | `post_b_lparen` | "|| left.id === \"Boolean\"" | `"new Array()"` |
| 9808 | `post_b_lparen` | "|| left.id === \"Number\"" | `"new Array()"` |
| 9809 | `post_b_lparen` | "|| left.id === \"String\"" | `"new Array()"` |
| 9810 | `post_b_lparen` | "|| left.id === \"Symbol\"" | `"new Array()"` |
| 9812 | `post_b_lparen` | "{ // test_cause: // [\"new BigInt()\", \"post_b_lparen\", \"unexpected_a\"," | `"new aa()"` |
| 9823 | `post_b_lparen` | " else if (left.id === \"Array\") { arg = thing.expre" | `"new Array()"` |
| 9823 | `post_b_lparen` | "{ arg = thing.expression; if (" | `"new Array()"` |
| 9832 | `post_b_lparen` | " else if (left.id === \"Object\") { // test_cause: // [\"new Object()\", " | `"new Object()"` |
| 9832 | `post_b_lparen` | "{ // test_cause: // [\"new Object()\", \"post_b_lparen\", \"expected_a_b\"," | `"new Object()"` |
| 9844 | `post_b_lparen` | " else { if ( left.id[0] >= \"A\" && " | `"aa((0))"` |
| 9847 | `post_b_lparen` | "&& left.id !== \"BigInt\"" | `"String();"` |
| 9848 | `post_b_lparen` | "&& left.id !== \"Boolean\"" | `"String();"` |
| 9849 | `post_b_lparen` | "&& left.id !== \"Number\"" | `"String();"` |
| 9850 | `post_b_lparen` | "&& left.id !== \"String\"" | `"String();"` |
| 9851 | `post_b_lparen` | "&& left.id !== \"Symbol\"" | `"let Aa;let bb=Aa();"` |
| 9853 | `post_b_lparen` | "{ // test_cause: // [\"let Aa;let bb=Aa();\", \"post_b_lparen\", \"expecte" | `"let Aa;let bb=Aa();"` |
| 9861 | `post_b_lparen` | " else if (left.id === \".\") { cack = the_new !== undefined;" | `"0()"` |
| 9861 | `post_b_lparen` | "{ cack = the_new !== undefined; if (left.expre" | `"new aa``.aa()"` |
| 9863 | `post_b_lparen` | "&& left.name.id === \"UTC\"" | `"new Date.UTC()"` |
| 9863 | `post_b_lparen` | "{ // test_cause: // [\"new Date.UTC()\", \"post_b_lparen\", \"(live)\", \"\"," | `"new Date.UTC()"` |
| 9870 | `post_b_lparen` | "{ if (the_new !== undefined) { // test_cause: // [\"ne" | `"new aa``.aa()"` |
| 9871 | `post_b_lparen` | "{ // test_cause: // [\"new Date.UTC()\", \"post_b_lparen\", \"unexpected_a" | `"new aa``.aa()"` |
| 9877 | `post_b_lparen` | " else { // test_cause: // [\"let Aa;let bb=Aa.Aa();\", \"post_b_lparen\"," | `"let Aa;let bb=Aa.Aa();"` |
| 9890 | `post_b_lparen` | "{ paren = left.expression; if (paren.i" | `"new Date().getTime()"` |
| 9922 | `post_b_or` | "|| thing.expression[0].constant === true" | `"0&&0||0"` |
| 9924 | `post_b_or` | "{ // test_cause: // [\"aa=0||0\", \"post_b_or\", \"weird_condition_a\", \"||" | `"0&&0||0"` |
| 9943 | `post_s_export_toplevel` | "{ // test_cause: // [\" // if(0){import aa from \"aa\";} // \", \"post_s_e" | `"if(0){import aa from \"aa\";}"` |
| 9955 | `post_s_for` | "{ // Recurse walk_statement. walk_statement(thing.for_se" | `"for(;;);"` |
| 9970 | `post_s_function` | "{ // test_cause: // [\"aa=(function(){})\", \"post_s_function\", \"unexpec" | `"aa=(function(){})"` |
| 9991 | `post_s_try` | "{ // PR-504 - Add hidden scope_block for: // - catch-variable " | `"try{}catch(aa){}aa"` |
| 10017 | `` | "{ // test_cause: // [\"function aa([aa=aa]){}\", \"name_lookup\", \"tempor" | `"let aa=0"` |
| 10041 | `post_t_ternary` | "|| is_equal(thing.expression[1], thing.expression[2])" | `"(aa&&!aa?0:1)"` |
| 10043 | `post_t_ternary` | "{ // test_cause: // [\"let aa=(aa?`${0}`:`${0}`)\", \"post_t_ternary\", \"" | `"0?0:0"` |
| 10050 | `post_t_ternary` | " else if (is_equal(thing.expression[0], thing.expression[1])) { // te" | `"(aa&&!aa?0:1)"` |
| 10050 | `post_t_ternary` | "{ // test_cause: // [\"let aa;let bb=(aa?aa:0);\", \"post_t_ternary\", \"e" | `"let aa;let bb=(aa?aa:0);"` |
| 10056 | `post_t_ternary` | " else if (is_equal(thing.expression[0], thing.expression[2])) { // te" | `"(aa&&!aa?0:1)"` |
| 10056 | `post_t_ternary` | "{ // test_cause: // [\"let aa;let bb=(aa?0:aa);\", \"post_t_ternary\", \"e" | `"let aa;let bb=(aa?0:aa);"` |
| 10062 | `post_t_ternary` | " else if ( thing.expression[1].id === \"true\" && " | `"(aa&&!aa?0:1)"` |
| 10063 | `post_t_ternary` | "&& thing.expression[2].id === \"false\"" | `"let aa;let bb=(aa?true:false);"` |
| 10065 | `post_t_ternary` | "{ // test_cause: // [\"let aa;let bb=(aa?true:false);\", \"post_t_ternar" | `"let aa;let bb=(aa?true:false);"` |
| 10071 | `post_t_ternary` | " else if ( thing.expression[1].id === \"false\" && " | `"(aa&&!aa?0:1)"` |
| 10072 | `post_t_ternary` | "&& thing.expression[2].id === \"true\"" | `"let aa;let bb=(aa?false:true);"` |
| 10074 | `post_t_ternary` | "{ // test_cause: // [\"let aa;let bb=(aa?false:true);\", \"post_t_ternar" | `"let aa;let bb=(aa?false:true);"` |
| 10080 | `post_t_ternary` | " else if ( thing.expression[0].wrapped !== true && " | `"(aa&&!aa?0:1)"` |
| 10081 | `post_t_ternary` | "&& ( thing.expression[0].id === \"||\" || " | `"(aa&&!aa?0:1)"` |
| 10086 | `post_t_ternary` | "{ // test_cause: // [\"(aa&&!aa?0:1)\", \"post_t_ternary\", \"wrap_subexpr" | `"(aa&&!aa?0:1)"` |
| 10102 | `post_u_plus` | "{ // test_cause: // [\"aa=+0\", \"post_u_plus\", \"expected_a_b\", \"+\", 4] " | `"+[]"` |
| 10109 | `post_u_plus` | "&& right.expression[0].id === \"new\"" | `"+new aa()"` |
| 10109 | `post_u_plus` | "{ // test_cause: // [\" // /*jslint convert*/let aa=+new Date(); // \"," | `"+new aa()"` |
| 10117 | `post_u_plus` | " else if ( right.constant || right.id === \"{\" " | `"+[]"` |
| 10118 | `post_u_plus` | "|| right.id === \"{\"" | `"+[]"` |
| 10119 | `post_u_plus` | "|| (right.id === \"[\" && right.arity !== \"binary\")" | `"+[]"` |
| 10120 | `post_u_plus` | "&& right.arity !== \"binary\"" | `"+[]"` |
| 10121 | `post_u_plus` | "{ // test_cause: // [\"/*jslint convert*/aa=+{};\", \"post_u_plus\", \"une" | `"+[]"` |
| 10131 | `post_u_unary` | "{ if (thing.expression.every(function (thing) { " | `"`\\\n`"` |
| 10134 | `post_u_unary` | "{ thing.constant = true; }" | `"`\\\n`"` |
| 10137 | `post_u_unary` | " else if (thing.id === \"!\") { if (thing.expression.constan" | `"!0"` |
| 10137 | `post_u_unary` | "{ if (thing.expression.constant === true) { // test_cause" | `"!0"` |
| 10138 | `post_u_unary` | "{ // test_cause: // [\"let aa=!0;\", \"post_u_unary\", \"unexpected_a\", \"!" | `"!0"` |
| 10145 | `post_u_unary` | " else if (thing.id === \"!!\") { if (!option_dict.convert) {" | `"~0"` |
| 10145 | `post_u_unary` | "{ if (!option_dict.convert) { // test_cause: // [\"let aa=" | `"let aa=!!0;"` |
| 10146 | `post_u_unary` | "{ // test_cause: // [\"let aa= !!0;\", \"post_u_unary\", \"expected_a_b\", " | `"let aa=!!0;"` |
| 10154 | `post_u_unary` | " else if ( thing.id !== \"[\" && thing.id !== \"{" | `"~0"` |
| 10155 | `post_u_unary` | "&& thing.id !== \"{\"" | `"~0"` |
| 10156 | `post_u_unary` | "&& thing.id !== \"function\"" | `"~0"` |
| 10157 | `post_u_unary` | "&& thing.id !== \"new\"" | `"~0"` |
| 10159 | `post_u_unary` | "{ if (thing.expression.constant === true) { " | `"~0"` |
| 10160 | `post_u_unary` | "{ thing.constant = true; }" | `"~0"` |
| 10170 | `pre_a_bitwise` | "&& thing.id" | `"~0"` |
| 10171 | `pre_a_bitwise` | "case \"&\":" | `"0&0"` |
| 10172 | `pre_a_bitwise` | "case \"&=\":" | `"0&0"` |
| 10173 | `pre_a_bitwise` | "case \"<<\":" | `"0&0"` |
| 10174 | `pre_a_bitwise` | "case \"<<=\":" | `"0&0"` |
| 10175 | `pre_a_bitwise` | "case \">>\":" | `"0&0"` |
| 10176 | `pre_a_bitwise` | "case \">>=\":" | `"0&0"` |
| 10177 | `pre_a_bitwise` | "case \">>>\":" | `"0&0"` |
| 10178 | `pre_a_bitwise` | "case \">>>=\":" | `"0&0"` |
| 10179 | `pre_a_bitwise` | "case \"^\":" | `"0&0"` |
| 10180 | `pre_a_bitwise` | "case \"^=\":" | `"0&0"` |
| 10181 | `pre_a_bitwise` | "case \"|\":" | `"0&0"` |
| 10182 | `pre_a_bitwise` | "case \"|=\":" | `"0&0"` |
| 10183 | `pre_a_bitwise` | "case \"~\": // test_cause: // [\"0&0\", \"pre_a_bitwise\", \"unexpected_a\", " | `"~0"` |
| 10204 | `pre_a_bitwise` | "&& thing.id !== \"&&\"" | `"~0"` |
| 10205 | `pre_a_bitwise` | "&& thing.id !== \"||\"" | `"~0"` |
| 10206 | `pre_a_bitwise` | "&& thing.id !== \"=\"" | `"~0"` |
| 10207 | `pre_a_bitwise` | "&& // PR-514 - Bugfix - Skip the 'of' or 'in' node of a for-loop-head" | `"~0"` |
| 10212 | `pre_a_bitwise` | "&& Array.isArray(thing.expression)" | `"~0"` |
| 10213 | `pre_a_bitwise` | "&& thing.expression.length === 2" | `"0&0"` |
| 10214 | `pre_a_bitwise` | "&& ( relationop[thing.expression[0].id] ==" | `"0&0"` |
| 10216 | `pre_a_bitwise` | "|| relationop[thing.expression[1].id] === true" | `"0&0"` |
| 10219 | `pre_a_bitwise` | "{ // test_cause: // [\"0<0<0\", \"pre_a_bitwise\", \"unexpected_a\", \"<\", 4" | `"0<0<0"` |
| 10232 | `pre_b_binary` | "{ left = thing.expression[0]; right = thing.ex" | `"0!=0"` |
| 10235 | `pre_b_binary` | "|| right.id === \"NaN\"" | `"0!=0"` |
| 10235 | `pre_b_binary` | "{ // test_cause: // [\"NaN===NaN\", \"pre_b_binary\", \"number_isNaN\", \"==" | `"NaN===NaN"` |
| 10241 | `pre_b_binary` | " else if (left.id === \"typeof\") { if (right.id !== \"(s" | `"0!=0"` |
| 10241 | `pre_b_binary` | "{ if (right.id !== \"(string)\") { i" | `"typeof 0===0"` |
| 10242 | `pre_b_binary` | "{ if (right.id !== \"typeof\") { // test_cause: // " | `"typeof 0===0"` |
| 10251 | `pre_b_binary` | " else { value = right.value; i" | `"typeof 0===\"aa\""` |
| 10253 | `pre_b_binary` | "{ // test_cause: // [\" // typeof aa===\"undefined\" // \", \"pre_b_binary" | `"typeof aa===\"undefined\""` |
| 10261 | `pre_b_binary` | " else if ( value !== \"bigint\" && " | `"typeof 0===\"aa\""` |
| 10263 | `pre_b_binary` | "&& value !== \"function\"" | `"typeof 0===\"aa\""` |
| 10264 | `pre_b_binary` | "&& value !== \"number\"" | `"typeof 0===\"aa\""` |
| 10265 | `pre_b_binary` | "&& value !== \"object\"" | `"typeof 0===\"aa\""` |
| 10266 | `pre_b_binary` | "&& value !== \"string\"" | `"typeof 0===\"aa\""` |
| 10267 | `pre_b_binary` | "&& value !== \"symbol\"" | `"typeof 0===\"aa\""` |
| 10269 | `pre_b_binary` | "{ // test_cause: // [\"typeof 0===\\\"aa\\\"\", \"pre_b_binary\", \"expected_t" | `"typeof 0===\"aa\""` |
| 10290 | `pre_b_in` | "{ // test_cause: // [\"aa in aa\", \"pre_b_in\", \"infix_in\", \"in\", 4] " | `"aa in aa"` |
| 10316 | `pre_b_of` | "{ // test_cause: // [\"0 of 0\", \"pre_b_of\", \"unexpected_a\", \"of\", 3] " | `"0 of 0"` |
| 10327 | `` | "&& !thang.wrapped" | `"0&&0||0"` |
| 10327 | `` | "{ // test_cause: // [\"0&&0||0\", \"pre_b_or\", \"wrap_subexpression_a_b\"," | `"0&&0||0"` |
| 10343 | `pre_s_for` | "{ walk_statement(thing.for_semicolon[0]); walk" | `"for(;;);"` |
| 10347 | `pre_s_for` | "{ switch (thing.for_of.id) { case \"const\": " | `"for(aa in aa){}"` |
| 10349 | `pre_s_for` | "case \"const\":" | `"for(const aa in aa){}"` |
| 10350 | `pre_s_for` | "case \"let\":" | `"for(let aa in 0){}"` |
| 10351 | `pre_s_for` | "case \"var\": // PR-514 - Bugfix - Walk the iterable of destructured 'f" | `"for(let aa in 0){}"` |
| 10360 | `pre_s_for` | "default: walk_expression(thing.for_of);" | `"for(aa in aa){}"` |
| 10373 | `pre_s_function` | "&& !scope_block.function_body" | `"function aa(){}"` |
| 10373 | `pre_s_function` | "{ // test_cause: // [\"if(0){function aa(){}}\", \"pre_s_function\", \"une" | `"if(0){function aa(){}}"` |
| 10387 | `pre_s_function` | "{ if (thing.parameter_count !== 0) { // test_cause: // [\"" | `"aa={get aa(){}}"` |
| 10388 | `pre_s_function` | "{ // test_cause: // [\" // /*jslint getset*/ // aa={get aa(aa){}} // \"" | `"/*jslint getset*/\naa={get aa(aa){}}"` |
| 10398 | `pre_s_function` | " else if (thing.extra === \"set\") { // PR-514 - Bugfix - A setter's on" | `"()=>0"` |
| 10398 | `pre_s_function` | "{ // PR-514 - Bugfix - A setter's one parameter cannot be a rest-para" | `"/*jslint getset*/\naa={set aa(){}}"` |
| 10404 | `pre_s_function` | "|| thing.parameter_rest" | `"/*jslint getset*/\naa={set aa(...aa){}}"` |
| 10427 | `pre_v_var` | "{ thing.variable = the_variable; the_variable." | `"String();"` |
| 10434 | `walk_expression` | "{ if (Array.isArray(thing)) { // test_cause: // [\"(functi" | `"!0"` |
| 10435 | `walk_expression` | "{ // test_cause: // [\"(function(){}())\", \"walk_expression\", \"(live)\"," | `"+[]"` |
| 10435 | `walk_expression` | "{ // test_cause: // [\"(function(){}())\", \"walk_expression\", \"(live)\"," | `"!0"` |
| 10442 | `walk_expression` | " else { preamble(thing); walk_expressi" | `"!0"` |
| 10448 | `walk_expression` | "|| thing.id === \"=>\"" | `"!0"` |
| 10448 | `walk_expression` | "{ // test_cause: // [\"aa=()=>0\", \"walk_expression\", \"(live)\", \"\", 0] " | `"aa=()=>0"` |
| 10459 | `walk_expression` | "|| thing.arity === \"postassign\"" | `"!0"` |
| 10460 | `walk_expression` | "{ // test_cause: // [\"if(++aa){}\", \"walk_expression\", \"unexpected_a\"," | `"aa=aa++"` |
| 10460 | `walk_expression` | "{ // test_cause: // [\"if(++aa){}\", \"walk_expression\", \"unexpected_a\"," | `"!0"` |
| 10472 | `walk_expression` | "{ // test_cause: // [\"aa[aa=0]\", \"walk_expression\", \"unexpected_state" | `"aa[aa=0]"` |
| 10489 | `walk_statement` | "{ return; }" | `"0"` |
| 10489 | `walk_statement` | "{ return; } if (Array.isArray(thing)) " | `"\t"` |
| 10491 | `walk_statement` | " if (Array.isArray(thing)) " | `"\t"` |
| 10492 | `walk_statement` | "{ // test_cause: // [\"+[]\", \"walk_statement\", \"(live)\", \"\", 0] // Re" | `"\t"` |
| 10492 | `walk_statement` | "{ // test_cause: // [\"+[]\", \"walk_statement\", \"(live)\", \"\", 0] // Re" | `"\t"` |
| 10501 | `walk_statement` | " // PR-504 - Add hidden scope_block for: // - label-name if " | `"0"` |
| 10501 | `walk_statement` | " // PR-504 - Add hidden scope_block for: // - label-name if " | `"0"` |
| 10506 | `walk_statement` | "{ scope_block = scope_block_push(thing.label_name, false);" | `"aa:while(0){aa}"` |
| 10508 | `walk_statement` | " if (thing.scope_block) " | `"0"` |
| 10509 | `walk_statement` | "{ scope_block = scope_block_push(thing, false); }" | `";{}"` |
| 10511 | `walk_statement` | " preamble(thing); walk_expression(thing.expression); " | `"0"` |
| 10511 | `walk_statement` | " preamble(thing); walk_expression(thing.expression); " | `"0"` |
| 10514 | `walk_statement` | "{ if (thing.id !== \"(\") { // test_cause: // [\"0&&0\", \"wal" | `"0&0"` |
| 10514 | `walk_statement` | "{ if (thing.id !== \"(\") { // test_cause: // [\"0&&0\", \"wal" | `"0"` |
| 10515 | `walk_statement` | "{ // test_cause: // [\"0&&0\", \"walk_statement\", \"unexpected_expression" | `"0&0"` |
| 10522 | `walk_statement` | " else if ( thing.arity !== \"statement\" && thin" | `"0"` |
| 10522 | `walk_statement` | " else if ( thing.arity !== \"statement\" && thin" | `"0"` |
| 10523 | `walk_statement` | "&& thing.arity !== \"assignment\"" | `"0"` |
| 10524 | `walk_statement` | "&& thing.id !== \"import\"" | `"0"` |
| 10526 | `walk_statement` | "{ // test_cause: // [\"!0\", \"walk_statement\", \"unexpected_expression_a" | `"0"` |
| 10536 | `walk_statement` | " // Recurse walk_statement. walk_statement(thing.block); " | `"0"` |
| 10543 | `walk_statement` | "{ scope_block = scope_block_pop(); }" | `";{}"` |
| 10545 | `walk_statement` | " if (thing.label_name) " | `"0"` |
| 10546 | `walk_statement` | "{ scope_block = scope_block_pop(); }" | `"aa:while(0){aa}"` |
| 10669 | `at_margin` | "{ return expected_at(at); }" | `"String(\n0);"` |
| 10677 | `` | "&& name.scope_declared === the_block" | `"let aa;"` |
| 10677 | `` | "{ // test_cause: // [\"function aa(aa) {return aa;}\", \"delve\", \"(live)" | `"let aa;"` |
| 10682 | `` | "{ // test_cause: // [\"function aa(){bb:while(aa){aa();}}\", \"delve\", \"" | `"let aa;"` |
| 10682 | `` | "{ // test_cause: // [\"function aa(){bb:while(aa){aa();}}\", \"delve\", \"" | `"let aa;"` |
| 10691 | `` | " else if (!name.assigned) { // test_cause: // [\"let aa;aa&&=0;aa();\"," | `"String();"` |
| 10691 | `` | "{ // test_cause: // [\"let aa;aa&&=0;aa();\", \"delve\", \"unassigned_var_" | `"let aa;aa();"` |
| 10745 | `no_space_only` | "{ // test_cause: // [\"String( 0);\", \"no_space_only\", \"unexpected_spac" | `"String( );"` |
| 10760 | `one_space` | "|| !open" | `"let aa={\naa:\n0};"` |
| 10760 | `one_space` | "{ if (left.thru + 1 !== right.from && nr_comments_skipped " | `"let aa;"` |
| 10761 | `one_space` | "&& nr_comments_skipped === 0" | `"let aa=0;"` |
| 10761 | `one_space` | "{ // test_cause: // [\"String(0,0);\", \"one_space\", \"expected_space_a_b" | `"let aa=0;"` |
| 10774 | `one_space` | " if (right.from !== margin) " | `"let aa={\naa:\n0};"` |
| 10774 | `one_space` | " if (right.from !== margin) { // test_cause: // [\" // let aa=" | `"let aa={\naa:\n0};"` |
| 10775 | `one_space` | "{ // test_cause: // [\" // let aa={ // aa: // 0}; // \", \"one_space\", \"" | `"let aa={\naa:\n0};"` |
| 10789 | `one_space_only` | "|| left.thru + 1 !== right.from" | `"String(String?0:1);"` |
| 10789 | `one_space_only` | "{ warn(\"expected_space_a_b\", right, artifact(left), artifa" | `"String(String?0:1);"` |
| 10815 | `whitage_closer` | "&& right.id !== \";\"" | `"String(\n0);"` |
| 10815 | `whitage_closer` | "{ // test_cause: // [\" // String( // 0); // \", \"whitage_closer\", \"(li" | `"String(\n0);"` |
| 10832 | `whitage_closer` | " // test_cause: // [\"String( );\", \"whitage_closer\", \"(live)\", \"\", 0] " | `"String();"` |
| 10845 | `whitage_default` | "case \"${\":" | `"let aa=`${0}`;"` |
| 10846 | `whitage_default` | "case \"(\":" | `"String();"` |
| 10847 | `whitage_default` | "case \"[\":" | `"String();"` |
| 10848 | `whitage_default` | "case \"{\": whitage_opener(); return;" | `"String();"` |
| 10851 | `whitage_default` | " if (right.id === closer) " | `"let aa;"` |
| 10852 | `whitage_default` | "{ whitage_closer(); return; }" | `"String(0);"` |
| 10855 | `whitage_default` | " // Left is not an opener, and right is not a closer. // The nature o" | `"let aa;"` |
| 10860 | `whitage_default` | "{ if (left.id === \"else\") { // test_cause: // [\" // let a" | `"let aa;"` |
| 10861 | `whitage_default` | "{ // test_cause: // [\" // let aa=0;if(aa){aa();}else if(aa){aa();} //" | `"let aa=0;if(aa){aa();}else if(aa){aa();}"` |
| 10870 | `whitage_default` | " // test_cause: // [\"let aa;\", \"whitage_default\", \"(live)\", \"\", 0] " | `"let aa;"` |
| 10878 | `whitage_default` | " // If left is ',' or ';' or right is a statement, then if open, // r" | `"let aa;"` |
| 10878 | `whitage_default` | " // If left is ',' or ';' or right is a statement, then if open, // r" | `"let aa;"` |
| 10886 | `whitage_default` | " if (right.role === \"label\") " | `"let aa;"` |
| 10887 | `whitage_default` | "{ if (right.from !== 0) { // test_cause: // [\" // functio" | `"function aa(){\n    aa();bb:while(aa){aa();}}"` |
| 10899 | `whitage_default` | " if (left.id === \",\") " | `"let aa;"` |
| 10900 | `whitage_default` | "{ if ( !open || (closer ==" | `"String(0,0);"` |
| 10902 | `whitage_default` | "|| (closer === \"]\" && left.line === right.line)" | `"String(\n0,0);"` |
| 10904 | `whitage_default` | "{ // test_cause: // [\"String(0,0);\", \"whitage_default\", \"(live)\", \"\"," | `"String(0,0);"` |
| 10911 | `whitage_default` | " // test_cause: // [\" // String( // 0,0); // \", \"whitage_default\", \"(" | `"String(\n0,0);"` |
| 10920 | `whitage_default` | " // If right is a ternary operator, line it up on the margin. " | `"let aa;"` |
| 10924 | `whitage_default` | "{ if (open) { // test_cause: // [\" // String( // String?0" | `"String(String?0:1);"` |
| 10925 | `whitage_default` | "{ // test_cause: // [\" // String( // String?0:1); // \", \"whitage_defa" | `"String(\nString?0:1);"` |
| 10935 | `whitage_default` | " // test_cause: // [\"String(String?0:1);\", \"whitage_default\", \"use_op" | `"String(String?0:1);"` |
| 10942 | `whitage_default` | " if ( left.id === \".\" " | `"let aa;"` |
| 10942 | `whitage_default` | " if ( left.id === \".\" || left.id === \"" | `"let aa;"` |
| 10944 | `whitage_default` | "|| left.id === \"?.\"" | `"let aa;"` |
| 10945 | `whitage_default` | "|| left.id === \"...\"" | `"let aa;"` |
| 10946 | `whitage_default` | "|| right.id === \",\"" | `"let aa;"` |
| 10947 | `whitage_default` | "|| right.id === \";\"" | `"let aa;"` |
| 10948 | `whitage_default` | "|| right.id === \":\"" | `"let aa;"` |
| 10949 | `whitage_default` | "|| ( right.arity === \"binary\" && " | `"let aa;"` |
| 10951 | `whitage_default` | "&& (right.id === \"(\" || right.id === \"[\")" | `"String();"` |
| 10952 | `whitage_default` | "|| right.id === \"[\"" | `"String?.aa();"` |
| 10953 | `whitage_default` | "|| ( right.arity === \"function\" && " | `"let aa;"` |
| 10955 | `whitage_default` | "&& left.id !== \"function\"" | `"function aa(bb){return;}"` |
| 10958 | `whitage_default` | "{ // test_cause: // [\"String(...String);\", \"whitage_default\", \"(live)" | `"let aa;"` |
| 10958 | `whitage_default` | "{ // test_cause: // [\"String(...String);\", \"whitage_default\", \"(live)" | `"let aa;"` |
| 10965 | `whitage_default` | " if (right.id === \".\" " | `"let aa;"` |
| 10965 | `whitage_default` | " if (right.id === \".\" || right.id === \"?.\"" | `"let aa;"` |
| 10966 | `whitage_default` | "|| right.id === \"?.\"" | `"let aa;"` |
| 10966 | `whitage_default` | "{ if (left.line === right.line) { // test_cause: // [\"Str" | `"String?.aa();"` |
| 10966 | `whitage_default` | "{ if (left.line === right.line) { // test_cause: // [\"Str" | `"let aa;"` |
| 10967 | `whitage_default` | "{ // test_cause: // [\"String?.aa();\", \"whitage_default\", \"(live)\", \"\"" | `"String?.aa();"` |
| 10977 | `whitage_default` | " if (left.id === \";\") " | `"let aa;"` |
| 10977 | `whitage_default` | " if (left.id === \";\") { if (open) { // test_cause" | `"let aa;"` |
| 10978 | `whitage_default` | "{ if (open) { // test_cause: // [\" // function aa() { // " | `"function aa() {\n    for (\n        let bb = 0;\nbb < 0;\n        bb += 1\n    ) {\n        aa(bb);\n    }\n}"` |
| 10997 | `whitage_default` | " if (left.getset === true) " | `"let aa;"` |
| 10998 | `whitage_default` | "{ // PR-514 - Bugfix - On one line, <one_space> still lets a comment " | `"/*jslint getset*/\nString({get aa() {\n    return;\n}});"` |
| 11003 | `whitage_default` | "{ // test_cause: // [\" // /*jslint getset*/ // String({get aa() { // " | `"/*jslint getset*/\nString({get aa() {\n    return;\n}});"` |
| 11014 | `whitage_default` | " else { // test_cause: // [\" // /*jslint getset*/ // String({ // " | `"/*jslint getset*/\nString({\n    get\n    aa() {\n        return;\n    }\n});"` |
| 11030 | `whitage_default` | " if ( left.arity === \"ternary\" " | `"let aa;"` |
| 11030 | `whitage_default` | " if ( left.arity === \"ternary\" || left" | `"let aa;"` |
| 11032 | `whitage_default` | "|| left.id === \"case\"" | `"let aa;"` |
| 11033 | `whitage_default` | "|| left.id === \"catch\"" | `"let aa;"` |
| 11034 | `whitage_default` | "|| left.id === \"else\"" | `"let aa;"` |
| 11035 | `whitage_default` | "|| left.id === \"finally\"" | `"let aa;"` |
| 11036 | `whitage_default` | "|| left.id === \"while\"" | `"let aa;"` |
| 11037 | `whitage_default` | "|| left.id === \"await\"" | `"let aa;"` |
| 11038 | `whitage_default` | "|| right.id === \"catch\"" | `"let aa;"` |
| 11039 | `whitage_default` | "|| right.id === \"else\"" | `"let aa;"` |
| 11040 | `whitage_default` | "|| right.id === \"finally\"" | `"let aa;"` |
| 11041 | `whitage_default` | "|| (right.id === \"while\" && !right.statement)" | `"let aa;"` |
| 11042 | `whitage_default` | "|| (left.id === \")\" && right.id === \"{\")" | `"let aa;"` |
| 11043 | `whitage_default` | "&& right.id === \"{\"" | `"if(String()){String();}"` |
| 11044 | `whitage_default` | "{ // test_cause: // [\"if(String()){String();}\", \"whitage_default\", \"(" | `"String(String?0:1);"` |
| 11044 | `whitage_default` | "{ // test_cause: // [\"if(String()){String();}\", \"whitage_default\", \"(" | `"let aa;"` |
| 11051 | `whitage_default` | " if ( // There is a space between left and right. " | `"let aa;"` |
| 11051 | `whitage_default` | " if ( // There is a space between left and right. " | `"let aa;"` |
| 11056 | `whitage_default` | "|| spaceop[right.id] === true" | `"let aa;"` |
| 11057 | `whitage_default` | "|| ( left.arity === \"binary\" && " | `"let aa;"` |
| 11059 | `whitage_default` | "&& (left.id === \"+\" || left.id === \"-\")" | `"let aa = [\n    0\n    + 0\n];"` |
| 11061 | `whitage_default` | "|| ( right.arity === \"binary\" && " | `"let aa;"` |
| 11063 | `whitage_default` | "&& (right.id === \"+\" || right.id === \"-\")" | `"let aa = [\n    0\n    + 0\n];"` |
| 11065 | `whitage_default` | "|| left.id === \"function\"" | `"let aa;"` |
| 11066 | `whitage_default` | "|| left.id === \":\"" | `"let aa;"` |
| 11067 | `whitage_default` | "|| left.id === \"async\"" | `"let aa;"` |
| 11068 | `whitage_default` | "|| ( ( left.identifier" | `"let aa;"` |
| 11071 | `whitage_default` | "|| left.id === \"(string)\"" | `"let aa=`${0}`;"` |
| 11072 | `whitage_default` | "|| left.id === \"(number)\"" | `"let aa=`${0}`;"` |
| 11074 | `whitage_default` | "&& ( right.identifier || " | `"let aa;"` |
| 11076 | `whitage_default` | "|| right.id === \"(string)\"" | `"let aa=`${0}`;"` |
| 11077 | `whitage_default` | "|| right.id === \"(number)\"" | `"let aa=`${0}`;"` |
| 11080 | `whitage_default` | "|| (left.arity === \"statement\" && right.id !== \";\")" | `"let aa=`${0}`;"` |
| 11081 | `whitage_default` | "&& right.id !== \";\"" | `"if(String()){String();}"` |
| 11082 | `whitage_default` | "{ // test_cause: // [\"let aa=0;\", \"whitage_default\", \"(live)\", \"\", 0]" | `"let aa;"` |
| 11082 | `whitage_default` | "{ // test_cause: // [\"let aa=0;\", \"whitage_default\", \"(live)\", \"\", 0]" | `"let aa;"` |
| 11089 | `whitage_default` | " if (left.arity === \"unary\" " | `"let aa=`${0}`;"` |
| 11089 | `whitage_default` | " if (left.arity === \"unary\" && left.id !== \"`\"" | `"let aa=`${0}`;"` |
| 11090 | `whitage_default` | "&& left.id !== \"`\"" | `"let aa=`${0}`;"` |
| 11107 | `whitage_opener` | "|| (left.line !== right.line)" | `"String();"` |
| 11126 | `whitage_opener` | "case \"${\": closer = \"}\"; break;" | `"let aa=`${0}`;"` |
| 11129 | `whitage_opener` | "case \"(\": closer = \")\"; break;" | `"String();"` |
| 11132 | `whitage_opener` | "case \"[\": closer = \"]\"; break;" | `"let aa=[];"` |
| 11135 | `whitage_opener` | "case \"{\": closer = \"}\"; break;" | `"let aa={};"` |
| 11139 | `whitage_opener` | "{ whitage_closer(); return; }" | `"String();"` |
| 11139 | `whitage_opener` | "{ whitage_closer(); return; } " | `"String();"` |
| 11142 | `whitage_opener` | " if (opening) " | `"String(0);"` |
| 11142 | `whitage_opener` | " if (opening) { // test_cause: // [\" // String( // 0); // \", " | `"String(0);"` |
| 11143 | `whitage_opener` | "{ // test_cause: // [\" // String( // 0); // \", \"whitage_opener\", \"(li" | `"String(\n0);"` |
| 11153 | `whitage_opener` | "{ if (right.from !== 0) { // test_cause: // [\" // fun" | `"function aa(){\n bb:while(aa){aa();}}"` |
| 11164 | `whitage_opener` | " else if (right.switch) { at_margin(-mode_indent); " | `"String(\n0);"` |
| 11166 | `whitage_opener` | " else { at_margin(0); }" | `"String(\n0);"` |
| 11170 | `whitage_opener` | " if ( (right.statement " | `"String(0);"` |
| 11170 | `whitage_opener` | " if ( (right.statement || right.role === \"label\"" | `"String(0);"` |
| 11172 | `whitage_opener` | "|| right.role === \"label\"" | `"String(0);"` |
| 11172 | `whitage_opener` | "&& (!right.for_init || left.line !== right.line)" | `"if(String()){String();}"` |
| 11174 | `whitage_opener` | "{ // test_cause: // [\" // function aa(){bb:while(aa){aa();}} // \", \"w" | `"if(String()){String();}"` |
| 11174 | `whitage_opener` | "{ // test_cause: // [\" // function aa(){bb:while(aa){aa();}} // \", \"w" | `"String(0);"` |
| 11187 | `whitage_opener` | " open = false; // test_cause: // [\"String(0);\", \"whitage_open" | `"String(0);"` |
| 11212 | `` | "|| right.id === \"(end)\"" | `"let aa;"` |
| 11212 | `` | "{ nr_comments_skipped += 1; return; }" | `"let aa;"` |
| 11215 | `` | " // If left is an opener and right is not the closer, then push the p" | `"let aa;"` |
| 11215 | `` | " // If left is an opener and right is not the closer, then push the p" | `"let aa;"` |
| 11228 | `` | "{ // PR-511 - Binary operators at end-of-line - A tagged-megastring i" | `"String(\n0);"` |
| 11236 | `` | "&& right.id !== \".\"" | `"let aa = [\n    0\n    + 0\n];"` |
| 11237 | `` | "&& right.id !== \"?.\"" | `"let aa = [\n    0\n    + 0\n];"` |
| 11238 | `` | "&& right.id !== \"`\"" | `"let aa = [\n    0\n    + 0\n];"` |
| 11240 | `` | "{ // test_cause: // [\" // let aa = [ // 0 // + 0 // ]; // \", " | `"let aa = [\n    0\n    + 0\n];"` |
| 11266 | `` | " nr_comments_skipped = 0; delete left.alive; d" | `"let aa;"` |
