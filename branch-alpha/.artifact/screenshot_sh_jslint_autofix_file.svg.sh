(set -e
printf '> #!/bin/sh
> 
> printf '"'"'
> /*jslint devel*/
> console.log(
> "hello world");
> '"'"' > autofixed.js
> 
> node jslint.mjs jslint_autofix=autofixed.js
> 
> cat autofixed.js


'
#!/bin/sh

printf '
/*jslint devel*/
console.log(
"hello world");
' > autofixed.js

node jslint.mjs jslint_autofix=autofixed.js

cat autofixed.js
)
