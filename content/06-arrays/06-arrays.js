/*
    & Arrays &
        $> Arrays são variaveis que recebem diferentes tipos de dados
        $> Sintaxe:
            <comando> <nome_array> = [
                "item1", 'item2', `item3`,
                12, 34, 56, 100.112
            ];
*/

// Example
var ourArray = ["Gustavo", 16];

// - Matrizes Aninhadas -
// São arrays dentro de arrays

var myMatriz = [
    ["universe", 42],
    ["everything", 101010],
    ["JS", "VUE"]
];

// - Acessar item em um array -
// Para acesar usa-se a notação de colchete e indcide do elemento
var foods = [
    "pudim", "milkshake",
    "brigadeiro", "mouse"
]

// retorna "pudim"
console.log(foods[0]);
// retorna "brigadeiro"
console.log(foods[2]);
// retorna "mouse"
console.log(foods[3]);

// - Modificar item em um array -
// Example
var numbersChoice = [12, 34, 13, 6, 34];
console.log(numbersChoice);

numbersChoice[3] = 90;
numbersChoice[1] = 0;
numbersChoice[4] = 56.4235;
console.log(numbersChoice);

// - Acessar item em um array multidimencional(Matriz) -
// Example
var countNumbers = [
    [1, 2, 3],  [4, 5, 6], [7, 8, 9],
    [[10, 11, 12], 13, 14]
];

var myData = [];
myData = countNumbers[2][2];
myData = countNumbers[0][2];
myData = countNumbers[1][1];
myData = countNumbers[3][0][2];
myData = countNumbers[3][1];
myData = countNumbers[3][2];

console.log(myData);

// # Metodos de arrays #

// - push() -
// Vai empurar um elemento para o array, adiciona um item no final do array
var nameOfLangs = [
    "JavaScript", "PHP", "GO",
    "Java", "Python", "Rust"
];
var newLang;

newLang = "Ruby";
// push new item in nameOfLangs
nameOfLangs.push(newLang);
newLang = "C++";
// push new item in nameOfLangs
nameOfLangs.push(newLang);
newLang = "C#";
// push new item in nameOfLangs
nameOfLangs.push(newLang);
newLang = "Julia";
// push new item in nameOfLangs
nameOfLangs.push(newLang);
newLang = "Assemble";

console.log(nameOfLangs);

// - pop() -
// Remove um item do array por padrão o ultimmo item
var convites = ["Mia", "Jennifer", "Guga", "Owvadinho", "Melicita", "Kleya"];
var removedsConvites  = [
    convites.pop(),
    convites.pop(),
    convites.pop()
];

console.log(removedsConvites);

// - shift() -
// Remove um item do array por padrão o primeiro item
var coder = ["JxA", "FandonMin", "Lacrux", "Katleya", "00Fox"];
var codersWin = [
    coder.shift(),
    coder.shift(),
    coder.shift()
];
console.log(codersWin);

// - unshift() -
// Adiciona um item no começo do array
var runners = ["ManDrak", "Drafor", "MindFur", "Ovinir"];
var runnersWin = [
    runnersWin.unshift(runners[3]),
    runnersWin.unshift(runners[1]),
    runnersWin.unshift(runners[2])
];
console.log(runnersWin);

// # Shopping List #
var cart = [
    ["cereal", 3],
    ["milk", 2],
    ["bananas", 3],
    ["juice", 2],
    ["eggs", 12]
];
