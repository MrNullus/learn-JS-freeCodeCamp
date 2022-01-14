/*
    &  Template Literals  &
*/
const person = {
    name: "Ass Fuck",
    age: 16
};
const greeting = `
    Hello! My name is ${person.name}. \n
    I'am ${person.age} years old.
`;

console.log(greeting);

//Make List
const result = {
    sucess: ["max-length", "no-amd", "preferer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeLis(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`
            <li class="text-warning">${arr[i]}</li>
        `);
    }

    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
