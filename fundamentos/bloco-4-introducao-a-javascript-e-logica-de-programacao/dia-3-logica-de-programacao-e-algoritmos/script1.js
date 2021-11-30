let n = 5;
let array = "";

for (let row=1; row<=n; row+=1) {
    for (let col=1; col<=n; col+=1) {
        array = array + "*";
    }
    console.log(array);
    array = "";
}