/*
    & Objetos em JavaScript &
        $> Objetos são semelhantes ao array só que funciona com propriedades e
        valores ao inves de index
*/
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Glind",
    "legs": 2,
    "tails": 0,
    "friends": []
};

// - Acessando propriedadesde de objetos com notação de ponto -
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// - Acessando propriedadesde de objetos com notação de colchetes -
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// - Acessando propriedadesde de objetos com variaveis -
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

// # Atualizando Propriedades do Objeto  #
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Pode ser alterado assim
ourDog.name = "Cadela";

// # Adicionando nova propriedades ao objeto #
var ourDog = {
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Adicionando nova propriedade e valor
ourDog.bark = "bark-none";
ourDog["legs"] = 3;

// # Deletando propriedades do objeto #
delete ourDog.tais;

// # usando objetos para pesquisas #
function phoneticLookup(val) {
    var result = "";
    // object for lookup
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta",
        "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    return result;
}
console.log(phoneticLookup("delta"));

// # Testando propriedades para objetos #
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found";
    }
}
console.log(checkObj(bed));

// #  Manipulação complexa de objetos  #
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Touin Kenedy Kobain"
        "title": "The song of die for live",
        "release_year": 2021,
        "formats": [
            "CD",
            "Streaming"
            "LP"
        ],
        "gold": false
    }

];

// # Acessando objectos aninhados #
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};


var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

// # Acessando arrays aninhados #
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fine",
            "pine",
            "birch"
        ]
    }
];
var oneFlowers = myPlants[1].list[1];
console.log(oneFlowers);

// # Coleção de Registros #
var collection = {
    "2458": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "Let It Rock",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
console.log(collectionCopy);

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
    } else {
        collection[id][prop].push(value);
    }

    return collection;
}
console.log(updateRecords(1245, "artist", "ABBA"));

// Declarar functions em objectos
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);
