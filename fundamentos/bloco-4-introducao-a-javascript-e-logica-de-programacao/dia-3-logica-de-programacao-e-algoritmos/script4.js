let n = 7;
let asterisk = "";
let sideSpaces = "";
let aux = 1;
let array="";
let numInner = 0;
let numSideSpaces = 0;

for (let rows = 0; rows < n; rows += 2) {
    numInner = rows + 1;
    numSideSpaces = n - numInner;
    for (let counterAsterisk = 1; counterAsterisk <= numInner; counterAsterisk+=1) {
        asterisk = asterisk + "*"
    }
    for (let counterSpaces = 1; counterSpaces <= numSideSpaces / 2; counterSpaces+=1) {
        sideSpaces = sideSpaces + " ";
    }
    array = sideSpaces + asterisk + sideSpaces;
    console.log(array);
    array = "";
    numSideSpaces = 0;
    numInner = 0;
    asterisk = "";
    sideSpaces = "";
}