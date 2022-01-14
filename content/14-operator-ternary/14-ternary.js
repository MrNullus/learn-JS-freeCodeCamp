/*
    & Operador Ternario &
        $ Sintaxe:>
        condition ? statement-if-true : statement-if-false;
*/

function checkEqual(a, b) {
    // if (a  === b) {
    //     return true;
    // } else {
    //     return false;
    // }

    return a === b ? true : false;
}

console.log(checkEqual(23, 231));

// # Multiple Ternary Operator #
function checkSign(num) {
    return num > 0 ? "positive": num < 0 ? "negative": "zero";
}
console.log(checkSign(10));
