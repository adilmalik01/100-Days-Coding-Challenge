"use strict";
////////////////////////////////////////////    QUESTION 67  //////////////////////////////////////////
// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
////////////////////////////////////////////    ANSWER   //////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
let convertNumber = (num1, num2) => {
    return Number(num1) + num2;
};
let result = convertNumber("5", 3);
console.log(result);
////////////////////////////////////////////    QUESTION 68  //////////////////////////////////////////
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places. 
////////////////////////////////////////////    ANSWER   //////////////////////////////////////////
let decimalNumber = (num1, num2) => {
    return Math.round((num1 * num2) * 100) / 100;
};
let result1 = decimalNumber(0.1, 0.4);
console.log(result1);
////////////////////////////////////////////    QUESTION 69  //////////////////////////////////////////
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
////////////////////////////////////////////    ANSWER   //////////////////////////////////////////
// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend, divisor) {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}
// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.
