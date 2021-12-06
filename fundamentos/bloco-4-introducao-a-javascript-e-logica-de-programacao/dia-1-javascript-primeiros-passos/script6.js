let piece = "bishop";
let result;

switch(piece.toLocaleLowerCase()) {
    case "bishop":
        result = "diagonals";
        break;
    case "king":
        result = "Any direction, but one square only";
        break;
    case "queen":
        result = "Any directions, any number of squares";
        break;
    case "rook":
        result: "Horizontal or vertical, any number of squares";
        break;
    case "knight":
        result = "Jump over a piece, moves i L shape";
        break;
    case "pawn":
        result = "One square forward";
        break;
    default:
        result = "Isto non eqziste";
}

console.log(result);