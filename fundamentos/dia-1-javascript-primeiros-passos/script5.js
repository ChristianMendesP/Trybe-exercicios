const angle1 = 90;
const angle2 = 45;
const angle3 = 45;
let sume = angle1 + angle2 + angle3;

let result = sume === 180;

console.log(result);

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log("Invalid angle");
}