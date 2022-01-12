/*
    & Functions &
        $> functinos(funções) - basicamente usadas para não repetir blocos de
        codigos ou um comando, ou seja, reutilizar codigo;
        $>  Sintaxe:
            function <nome_func>(<arguments>) {
                // code block of function
            }
*/
// Example
function ourReusableFunction() {
    console.log("Filing Billie!!");
}

ourReusableFunction();

// # Arguments #
// São informações que funções recebem
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
    console.log(a + b);
}
ourFunctionWithArgs(10, 5);

// # Escopo Global #
// Escopo é a visibilidade da variavel, no Escopo Global a variavel é visivel em
// todo JS

// # Escopo Local #
// A variavel só é visivel aonde foi criada e não globalmente

// # Valor retornado de uma function  #
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

// # Esperando na file #
function nextLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
