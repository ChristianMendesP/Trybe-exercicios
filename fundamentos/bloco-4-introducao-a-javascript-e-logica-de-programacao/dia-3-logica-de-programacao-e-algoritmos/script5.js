let n = 9;
let array = "";
let row = 1;
let countInner = 1;
let countSide = 0;

for (index=1; index < n/2+1; index+=1) {
    countSide = (n - countInner) / 2;

    for (indexSide = 1; indexSide <= countSide; indexSide+=1) {
        array = array + " ";
    }

    array = array + "*";

    for (indexInner = 1; indexInner < countInner - 1; indexInner+=1) {
        if (countSide === 0) {
            array = array + "*";
        } else {
        array = array + " ";
        }
    }
    if (index > 1) {
        array = array + "*";
    }
    console.log(array);
    array = "";
    countInner += 2;
}
