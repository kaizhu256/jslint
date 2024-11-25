# JSLint, The JavaScript Code Quality Tool

Douglas Crockford
douglas@crockford.com

## Status
| Branch | [master<br>(v2021.5.27)](https://github.com/kaizhu256/jslint/tree/master) | [beta<br>(testing)](https://github.com/kaizhu256/jslint/tree/beta) | [alpha<br>(development)](https://github.com/kaizhu256/jslint/tree/alpha) |
|--:|:--:|:--:|:--:|
| CI | [![ci](https://github.com/kaizhu256/jslint/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/kaizhu256/jslint/actions?query=branch%3Amaster) | [![ci](https://github.com/kaizhu256/jslint/actions/workflows/ci.yml/badge.svg?branch=beta)](https://github.com/kaizhu256/jslint/actions?query=branch%3Abeta) | [![ci](https://github.com/kaizhu256/jslint/actions/workflows/ci.yml/badge.svg?branch=alpha)](https://github.com/kaizhu256/jslint/actions?query=branch%3Aalpha) |
| Coverage | [![coverage](https://kaizhu256.github.io/jslint/branch.master/.build/coverage/coverage-badge.svg)](https://kaizhu256.github.io/jslint/branch.master/.build/coverage/index.html) | [![coverage](https://kaizhu256.github.io/jslint/branch.beta/.build/coverage/coverage-badge.svg)](https://kaizhu256.github.io/jslint/branch.beta/.build/coverage/index.html) | [![coverage](https://kaizhu256.github.io/jslint/branch.alpha/.build/coverage/coverage-badge.svg)](https://kaizhu256.github.io/jslint/branch.alpha/.build/coverage/index.html) |
| Demo | [<img src="image-window-maximize-regular.svg" height="30">](https://kaizhu256.github.io/jslint/branch.master/index.html) | [<img src="image-window-maximize-regular.svg" height="30">](https://kaizhu256.github.io/jslint/branch.beta/index.html) | [<img src="image-window-maximize-regular.svg" height="30">](https://kaizhu256.github.io/jslint/branch.alpha/index.html) |
| Artifacts | [<img src="image-folder-open-solid.svg" height="30">](https://github.com/kaizhu256/jslint/tree/gh-pages/branch.master/.build) | [<img src="image-folder-open-solid.svg" height="30">](https://github.com/kaizhu256/jslint/tree/gh-pages/branch.beta/.build) | [<img src="image-folder-open-solid.svg" height="30">](https://github.com/kaizhu256/jslint/tree/gh-pages/branch.alpha/.build) |

## Live Web Demo
- [https://kaizhu256.github.io/jslint/index.html](https://kaizhu256.github.io/jslint/index.html)

[![screenshot](https://kaizhu256.github.io/jslint/branch.beta/.build/screenshot.browser._2fjslint_2fbranch.beta_2findex.html.png)](https://kaizhu256.github.io/jslint/index.html)

## Installation
1. Download [https://www.jslint.com/jslint.js](https://www.jslint.com/jslint.js) and rename to `jslint.mjs`
```shell
#!/bin/sh
curl -L https://www.jslint.com/jslint.js > jslint.mjs
```

2. To run `jslint.mjs` from command-line:
```shell
#!/bin/sh
node jslint.mjs hello.js

# stderr:
# jslint hello.js
# 1 Use double quotes, not single quotes. // line 1, column 14
#     console.log('hello world');
```

3. To load `jslint.mjs` as es-module:
```javascript
/*jslint devel*/
import jslint from "./jslint.mjs";
let code = "console.log('hello world');\n";
let result = jslint(code);
result.warnings.forEach(function ({
    formatted_message
}) {
    console.error(formatted_message);
});

// stderr:
// 1 Undeclared 'console'. // line 1, column 1
//     console.log('hello world');
// 2 Use double quotes, not single quotes. // line 1, column 14
//     console.log('hello world');
```

## Description
- [jslint.js](jslint.js) contains the jslint function. It parses and analyzes a source file, returning an object with information about the file. It can also take an object that sets options.

- [index.html](index.html) runs the jslint.js function in a web page. The page also depends on `browser.js`.

- [browser.js](browser.js) runs the web user interface and generates the results reports in HTML.

- [help.html](help.html) describes JSLint's usage. Please [read it](https://kaizhu256.github.io/jslint/help.html).

- [function.html](function.html) describes the jslint function and the results it produces.

JSLint can be run anywhere that JavaScript (or Java) can run.

The place to express yourself in programming is in the quality of your ideas and
the efficiency of their execution. The role of style in programming is the same
as in literature: It makes for better reading. A great writer doesn't express
herself by putting the spaces before her commas instead of after, or by putting
extra spaces inside her parentheses. A great writer will slavishly conform to
some rules of style, and that in no way constrains her power to express herself
creatively. See for example William Strunk's The Elements of Style
[https://www.crockford.com/style.html].

This applies to programming as well. Conforming to a consistent style improves
readability, and frees you to express yourself in ways that matter. JSLint here
plays the part of a stern but benevolent editor, helping you to get the style
right so that you can focus your creative energy where it is most needed.

## Changelog
- [CHANGELOG.md](CHANGELOG.md)
