(set -e
printf '> #!/bin/sh
> 
> git clone https://github.com/mapbox/node-sqlite3 node-sqlite3-js \\
>     --branch=v5.0.2 \\
>     --depth=1 \\
>     --single-branch
> 
> cd node-sqlite3-js
> npm install
> 
> node --input-type=module --eval '"'"'
> 
> /*jslint node*/
> import jslint from "../jslint.mjs";
> (async function () {
> 
> // Create V8 coverage report from program `npm run test` in javascript.
> 
>     await jslint.v8CoverageReportCreate({
>         coverageDir: "../.artifact/coverage_sqlite3_js/",
>         processArgv: [
>             "--exclude=tes?/",
>             "--exclude=tes[!0-9A-Z_a-z-]/",
>             "--exclude=tes[0-9A-Z_a-z-]/",
>             "--exclude=tes[^0-9A-Z_a-z-]/",
>             "--exclude=test/**/*.js",
>             "--exclude=test/suppor*/*elper.js",
>             "--exclude=test/suppor?/?elper.js",
>             "--exclude=test/support/helper.js",
>             "--include=**/*.cjs",
>             "--include=**/*.js",
>             "--include=**/*.mjs",
>             "--include=li*/*.js",
>             "--include=li?/*.js",
>             "--include=lib/",
>             "--include=lib/**/*.js",
>             "--include=lib/*.js",
>             "--include=lib/sqlite3.js",
>             "npm", "run", "test"
>         ]
>     });
> }());
> 
> '"'"'


'
#!/bin/sh

git clone https://github.com/mapbox/node-sqlite3 node-sqlite3-js \
    --branch=v5.0.2 \
    --depth=1 \
    --single-branch 2>/dev/null || true


cd node-sqlite3-js

git checkout 60a022c511a37788e652c271af23174566a80c30
npm install

node --input-type=module --eval '

/*jslint node*/
import jslint from "../jslint.mjs";
(async function () {

// Create V8 coverage report from program `npm run test` in javascript.

    await jslint.v8CoverageReportCreate({
        coverageDir: "../.artifact/coverage_sqlite3_js/",
        processArgv: [
            "--exclude=tes?/",
            "--exclude=tes[!0-9A-Z_a-z-]/",
            "--exclude=tes[0-9A-Z_a-z-]/",
            "--exclude=tes[^0-9A-Z_a-z-]/",
            "--exclude=test/**/*.js",
            "--exclude=test/suppor*/*elper.js",
            "--exclude=test/suppor?/?elper.js",
            "--exclude=test/support/helper.js",
            "--include=**/*.cjs",
            "--include=**/*.js",
            "--include=**/*.mjs",
            "--include=li*/*.js",
            "--include=li?/*.js",
            "--include=lib/",
            "--include=lib/**/*.js",
            "--include=lib/*.js",
            "--include=lib/sqlite3.js",
            "npm", "run", "test"
        ]
    });
}());

'
)
