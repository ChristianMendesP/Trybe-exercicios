let n = 5;
let array = "";
let aux = 1;

for (let row=1; row<=n; row+=1) {
    for (let col=1; col<=n; col+=1) {
        if (col <= n - row) {
            array = array + " ";
        } else {
            array = array + "*";
        }
    }
    console.log(array);
    array = "";
}