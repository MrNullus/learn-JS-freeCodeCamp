/*
    & Strings - Trabalhando com elas &
        $> Alguns metodos de trabalhar com strings
*/

// - Achar o tamamnho, para isso usa-se o metodos .length -
var myName = "Gustavo Hnerique de Jesus";
var myNameLength = myName.length;

// Vai mostrar o tamanho da strnig, ou seja
// quantos caracteres tem contanto com espaços
console.log("String Length: " + myNameLength);


// - Notação com Colchetes -
// Serve para obter um caractere da string pelo seu index(indice)
var langProgram = "JavaScript";
var indexString;

indexString = langProgram[0];
// retorna -> "J"
console.log(indexString);

indexString = langProgram[4];
// retorna -> "S"
console.log(indexString);

indexString = langProgram[3];
// retorna -> "a"
console.log(indexString);

indexString = langProgram[1];
// retorna -> "a"
console.log(indexString);

// - Imutabilidade das Strings -
// As strings possuem imutabilidade que só ocoore em caracteres especificos e
// sendo assim apenas assim a string possui imutabilidade
var cumpriment = "Hello World!!!";

// ! vai dar erro
// cumpriment[6] = "J";
// console.log(cumpriment);

// ! vai dar sucesso
cumpriment = "Let's code";
console.log(cumpriment);
