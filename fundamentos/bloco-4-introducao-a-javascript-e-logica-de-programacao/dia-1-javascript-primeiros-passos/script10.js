const cust = 1;
const sell = 1.20;

let custWithTaxes = cust * 1.2;
let profit = sell - custWithTaxes;

if (cust >= 0 && sell >= 0) {
    if (sell > custWithTaxes) {
        result = "positive balance";
    } else if (sell < custWithTaxes) {
        result = "negative balance";
    } else {
        result = "null balance"
    }
} else {
    result = "ERROR: negative number";
}
console.log(result);