// #> Math.random() -> gera um numero aleatorio, quandomultplicado determina o fim
// de até que numero aleatorio pode ir
// #> Math.floor() -> arredonda um numero;
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);


function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());

// # Numeros aleatorios com intervalos #
function ourRandomRange(ourMin, ourMax) {

    return Math.floor( Math.random() * (ourMax - ourMin + 1) + ourMin);
}
console.log(ourRandomRange(12, 7));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMin - myMax + 1) + myMin);
}
var myRange = randomRange();
console.log(myRange);
