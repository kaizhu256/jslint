(set -e
printf '> #!/bin/sh
> 
> printf "function foo() {\\nreturn  0;\\n}\\nfoo();\\n" > hello.js
> 
> # Autofix whitespace-warnings in file '"'"'hello.js'"'"', rewriting it IN-PLACE.
> # Only whitespace is repaired - any other warning blocks the file entirely,
> # leaving it byte-identical and exiting nonzero.
> 
> node jslint.mjs jslint_autofix=hello.js
> 
> # Print the repaired file.
> 
> cat hello.js


'
#!/bin/sh

printf "function foo() {\nreturn  0;\n}\nfoo();\n" > hello.js

# Autofix whitespace-warnings in file 'hello.js', rewriting it IN-PLACE.
# Only whitespace is repaired - any other warning blocks the file entirely,
# leaving it byte-identical and exiting nonzero.

node jslint.mjs jslint_autofix=hello.js

# Print the repaired file.

cat hello.js
)
