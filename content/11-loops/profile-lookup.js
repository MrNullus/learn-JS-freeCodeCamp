var contacts = [
    {
        "firstName": "Touin",
        "lastName": "Portem",
        "number": "0976767678"
        "likes": ["coding", "UI/UX", "sex"]
    },
    {
        "firstName": "Lacrux",
        "lastName": "Lovem",
        "number": "0976723278"
        "likes": ["dog", "star wars", "drugs"]
    },
    {
        "firstName": "Freya",
        "lastName": "di D'Undryia",
        "number": "393949568"
        "likes": ["beach", "dev mobile", "porn"]
    },
    {
        "firstName": "Tifanny",
        "lastName": "Ynnafit",
        "number": "0976767678"
        "likes": ["Series", "TV"]
    }
]

function lookUpProfile(name, prop) {
    for (var contact = 0; contact < contacts.length; contact++) {
        if (contacts[contact].firstName === name) {
            return contacts[name][prop] || "No such property";
        }

        return "No such contact"
    }
}


var data = lookUpProfile("Freya", "likes");
console.log(dataProfile);
