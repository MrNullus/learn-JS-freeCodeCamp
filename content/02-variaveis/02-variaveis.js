/*
    & Data Types &
        $> Existem sete tipos de dados basicos em JS:
            => (undefined) [
                valor indefinido
            ];
            => (null) [
                nesse valor não significa nada,
                é literalmente nada
            ];
            => (string) [
                qualquer tipo de textos
            ];
            => (number) [
                no JS ele junta integers e floats
            ];
            => (boolean) [
                tipo logico, tem "true" ou "false"
            ];
            => (symbol) [
                é um tipo de valor imutável que é unico;
            ];
            => (object) [

            ];
*/

/*
    & Formas de declarar variaveis &
*/
// com a palavra "var" pode ser usada em todo o programa
var myName = "Gustavo";
myName = 8;

// com "let" pode ser usada apenas em seu escopo,
// ou seja, aonde foi criada
let ourName = "freeCodeCamp";

// já a "const" quando é criada o valor não poderá ser mudado
// por isso  "const"
const pi = 3.14;

/*
    & Atribuição de valores em variaveis &
        $> para atribuir basta usar o sinal de "=";
*/
var a;
var b = 2;

console.log(a);
a = 7;
b = a;
console.log(a);

/*
    & Case Sensivity em variaveis &
        $> No JS letras maiusculas e minusculas são diferentes, ou seja,
        é sensivo;
        $> Variaveis escritas diferentes, são diferentes;
$*/
// Declarations
var StUdLyCaPvAr;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PROpercameLCASE = "A String";
tiTLECASEover = 9000;

//** Para resolver isso usea tecnica Camel Case:
//  -> consiste em a partir da segunda palavra deve
//  ser maiuscula;

// Declarations (Camel Case)
var studLyCapVar;
var properCamelCase;
var titleCaseOver;
