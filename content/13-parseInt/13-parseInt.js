// #  parseInt() serve para parsear em um numero inteiro, se for possivel  #
function convertToInteger(str) {
    return parseInt(str);
}

function convertToBinary(str) {
    // com o argumento 2 - define que a base é a binaria
    return parseInt(str, 2);
}

console.log(convertToInteger("56"));
console.log(convertToBinary("0101001101"));
