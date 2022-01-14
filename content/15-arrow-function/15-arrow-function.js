/*
    & Arrow Function &
        $ Sintaxe::>>
            (args) => {
                // block code
            }
*/

//Example
var magic = () => new Date();

// Arrow Functions com argumentos
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2,23,3,4,1], [12,121,21,2,12,0]));

// # Operator sread #
// serve para copiar array basicamente
const arr1 = [
    "JAN", "FEB", "MAR",
    "APR", "MAY"
];

let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = "potato";
})();

console.log(arr2 + "\n" + arr1);
