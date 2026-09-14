(set -e
printf '> #!/bin/sh
> 
> node --input-type=module --eval '"'"'
> 
> /*jslint devel*/
> import jslint from "./jslint.mjs";
> let result;
> let source = "function foo() {\\nreturn  0;\\n}\\nfoo();\\n";
> 
> // Autofix whitespace-warnings in <source> in javascript. No fs, no cli -
> // <autofixed> is the repaired source, or undefined if nothing was written,
> // and <warnings> and <ok> then describe <autofixed>, not <source>.
> 
> result = jslint.jslint(source, {autofix: true});
> console.log(result.autofixed);
> 
> '"'"'


'
#!/bin/sh

node --input-type=module --eval '

/*jslint devel*/
import jslint from "./jslint.mjs";
let result;
let source = "function foo() {\nreturn  0;\n}\nfoo();\n";

// Autofix whitespace-warnings in <source> in javascript. No fs, no cli -
// <autofixed> is the repaired source, or undefined if nothing was written,
// and <warnings> and <ok> then describe <autofixed>, not <source>.

result = jslint.jslint(source, {autofix: true});
console.log(result.autofixed);

'
)
