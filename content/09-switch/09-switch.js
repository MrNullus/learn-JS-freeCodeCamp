/*
    & Switch &
        $> Igual ao if só que efetua comparações de igualdade, sintaxe bem diferente;
        switch (expression) {
            case expression:

                break;
            default:

        }
*/
function caseInSwitch(val) {
    switch (val) {
        case 1:
            aswer = "apha";
            break;
        case 2:
            aswer = "beta";
            break;
        case 3:
            aswer = "gamma";
            break;
        case 4:
            aswer = "delta";
            break;
    }

    return aswer;
}

console.log(caseInSwitch(1));

/* -  Valor default do switch  - */
function switchOfStuff(val) {
    var aswer = "";

    switch (val) {
        case "a":
            aswer = "apple"
            break;
        case "b":
            aswer = "bird";
            break;
        case "c":
            aswer = "cat";
            break;
        default:
            aswer = "stuff";
            break;
    }
}

console.log(switchOfStuff(5));
console.log(switchOfStuff());
