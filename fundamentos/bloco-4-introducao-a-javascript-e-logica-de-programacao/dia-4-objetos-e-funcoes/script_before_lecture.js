let n = 9;

asteriskSquare(n);
asteriskLeftTriangle(n);
asteriskRightTriangle(n);
asteriskCentralFullTriangle(n);
asteriskCentralEmptyTriangle(n);


function asteriskSquare(n) {
  let array = "";

  for (let row = 1; row <= n; row += 1) {
    for (let col = 1; col <= n; col += 1) {
      array = array + "*";
    }
    console.log(array);
    array = "";
  }
}

function asteriskLeftTriangle(n) {
  let array = "";

  for (let row = 1; row <= n; row += 1) {
    for (let col = 1; col <= row; col += 1) {
      array = array + "*";
    }
    console.log(array);
    array = "";
  }
}

function asteriskRightTriangle(n) {
  let array = "";
  let aux = 1;

  for (let row = 1; row <= n; row += 1) {
    for (let col = 1; col <= n; col += 1) {
      if (col <= n - row) {
        array = array + " ";
      } else {
        array = array + "*";
      }
    }
    console.log(array);
    array = "";
  }
}

function asteriskCentralFullTriangle(n) {
  let asterisk = "";
  let sideSpaces = "";
  let aux = 1;
  let array = "";
  let numInner = 0;
  let numSideSpaces = 0;

  for (let rows = 0; rows < n; rows += 2) {
    numInner = rows + 1;
    numSideSpaces = n - numInner;
    for (let counterAsterisk = 1; counterAsterisk <= numInner; counterAsterisk += 1) {
      asterisk = asterisk + "*"
    }
    for (let counterSpaces = 1; counterSpaces <= numSideSpaces / 2; counterSpaces += 1) {
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
}

function asteriskCentralEmptyTriangle(n) {
  let array = "";
  let row = 1;
  let countInner = 1;
  let countSide = 0;

  for (let index = 1; index < n / 2 + 1; index += 1) {
    countSide = (n - countInner) / 2;

    for (let indexSide = 1; indexSide <= countSide; indexSide += 1) {
      array = array + " ";
    }

    array = array + "*";

    for (let indexInner = 1; indexInner < countInner - 1; indexInner += 1) {
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

}