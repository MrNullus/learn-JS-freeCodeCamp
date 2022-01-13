/*
    & if statements &
        $> Sintaxe:
            if (condicion) {
                // code blocks;
            }
*/
// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }

    return "No, that was false";
}

trueOrFalse(true);

/*
    & else statements &
        $> Sintaxe:
            else {
                // code blocks;
            }
*/
function testElseIf(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    }

    if (val <= 5) {
        result = "5 or Smaller";
    }

    return result;
}

testElseIf(7);

/*
    & else if statements &
        $> Sintaxe:
            else if (condicion) {
                // code blocks;
            }
*/
function orderMyLogic(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

orderMyLogic(7);

// # Golf Mode #
var names = [
    "Hole-in-one", "Eagle", "Birdie", "Par",
    "Bogey", "Double Bogey", "Go Home"
];

function golfScore(par, strokes) {
    if (strokes === 1) {
        names[0];
    } else if (strokes <= par - 1) {
        names[1];
    } else if (strokes === par - 1) {
        names[2];
    } else if (strokes === par) {
        names[3];
    } else if (strokes === par + 1) {
        names[4];
    } else if (strokes === par + 2) {
        names[5];
    } else if (strokes === par + 2) {
        names[6];
    }

    return "Change me";
}

golfScore(5, 4);

/*
    Strokes -> Return
    1 -> "Hole-in-one"
    <= par - 1 -> "Eagle"
    par - 1 -> "Birdie"
    par -> "Par"
    par + 1 -> "Bogey"
    par + 2 -> "Double Bogey"
    >= par + 3 -> "Go Home"
*/
