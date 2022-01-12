/*
    & Escaping Literal &
    $>> Para escapar da escrita literal como escrever aspas dentro de uma string
    o JS usa alguns comandos que são chamados de escaping literal
*/

//@> Para escapar de ("") aspas duplas:
var myString = "I am a \"double quote\" string inside \"double quote\".";
console.log(myString);

// Ou pode usar aspas simples para escape (''):
var myString = '<a href="example.com" target="_blank">Link</a>';
// Também mostrara as aspas duplas
console.log(myString);

// Podendo usar apostrofos (``) para mostrar aspas simples ou dusplas:
var myString = `'<a href="example.com" target="_blank">Link</a>'`;
console.log(myString);

/*
    - Caracteres de Escaping -
********* ********* ******* *********
    @> \' -> '' aspas simples;
    @> \" -> "" aspas duplas;
    @> \\ -> \ barra invertida;
    @> \n -> nova linha;
    @> \t -> tab;
    @> \r -> retorno de carro;
    @> \b -> backspace;
    @> \f -> feed de formulario;
********* ********* ******* *********
*/
var myString = "One Line\\\n\n\tSecondLine\n\n\b\F\"\'ThirtLine\'\"\r\f";
console.log(myString);
