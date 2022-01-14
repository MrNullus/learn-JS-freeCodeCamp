/*
    & Class Syntax &
*/

// # Usando a sintaxe da classe para definir uma função construtora #
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot);

// # get e set #
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp  - 32);
        }

        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(67);
let temp = thermos.temperature;
thermos.temperature = 45;
temp = thermos.temperature;
