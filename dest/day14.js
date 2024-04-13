"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create = (artist, song, tracks) => {
    let obj = {
        artist,
        song,
    };
    if (tracks != undefined) {
        obj.track = tracks;
    }
    return obj;
};
console.log(create("Zayn Malik", "TU HAI KAHAN", 10));
console.log(create("Zayn Malik", "TU HAI KAHAN"));
console.log(create("Abeera", "Aroora"));
console.log(create("Abeera", "Aroora", 2));
////////////////////////////////////////////    QUESTION 41  //////////////////////////////////////////
// Question 41: Magicians: Display magician names from an array.
// Explain & TIP: Passing arrays to functions allows for the manipulation or display of their contents in a centralized manner. This is useful for handling lists of data.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
let magicians = ["Alice", "David", "Chris", "Edward"];
const greet_magician = (nameOfMagican) => {
    for (const magician of nameOfMagican) {
        console.log(magician);
    }
};
// greet_magician(magicians)
////////////////////////////////////////////    QUESTION 42  //////////////////////////////////////////
// Question 42: Great Magicians: Add "the Great" to magician names.
// Explain & TIP: Modifying array contents within a function demonstrates how functions can change data. This shows the impact of passing arrays by reference.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
const greet2_magician = (nameOfMagican) => {
    for (let i = 0; i < nameOfMagican.length; i++) {
        nameOfMagican[i] = nameOfMagican[i] + " the greet";
    }
};
greet2_magician(magicians);
greet_magician(magicians);
