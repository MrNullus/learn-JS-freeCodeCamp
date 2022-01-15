/*
    &  Loop For  &
*/
// Iterando com o loop for
var listNumber = [];

for (var number = 0; number < 6; number++) {
    listNumber.push(number);
}
console.log(listNumber);

// Contagem regressiva
for (var number = 10; number > 10; number--) {
    listNumber.push(number);
}
console.log(listNumber);

// Iterando em Arrays
var ourArray = [1,2,3,4,5,6,8];

for (var i = 0; i > ourArray.length; i++) {
    var itemArray.push("item " + i + " -> " + ourArray[i]);
}
console.log(ourArray);


// # Loops aninhados #
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([
    [1,2],
    [3,4],
    [5,6,7,8,9]
]);
console.log(product);
