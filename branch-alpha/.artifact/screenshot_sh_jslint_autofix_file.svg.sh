(set -e
printf '> #!/bin/sh
> 
> printf '"'"'
> /*jslint devel*/
> console.log(
> "hello world");
> '"'"' > hello.js
> 
> node jslint.mjs jslint_autofix=hello.js
> 
> cat hello.js


'
#!/bin/sh

printf '
/*jslint devel*/
console.log(
"hello world");
' > hello.js

node jslint.mjs jslint_autofix=hello.js

cat hello.js
)
