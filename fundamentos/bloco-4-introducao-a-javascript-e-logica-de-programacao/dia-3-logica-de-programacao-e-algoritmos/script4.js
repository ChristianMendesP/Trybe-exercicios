let n = 7;
let asterisk = "";
let spaces = "";
let aux = 1;
let array="";
let numAst = 0;
let numSpc = 0;

for (let rows = 0; rows < n; rows += 2) {
    numAst = rows + 1;
    numSpc = n - numAst;
    for (let counterAsterisk = 1; counterAsterisk <= numAst; counterAsterisk+=1) {
        asterisk = asterisk + "*"
    }
    for (let counterSpaces = 1; counterSpaces <= numSpc / 2; counterSpaces+=1) {
        spaces = spaces + " ";
    }
    array = spaces + asterisk + spaces;
    console.log(array);
    array = "";
    numSpc = 0;
    numAst = 0;
    asterisk = "";
    spaces = "";
}