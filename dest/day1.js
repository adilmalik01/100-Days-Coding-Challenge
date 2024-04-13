"use strict";
////////////////////////////////////////////    QUESTION 2  //////////////////////////////////////////
// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////////////////////     ANSWER  //////////////////////////////////////////
let studentName = "Muhammad Adil";
console.log(`“Hello ${studentName},would you like to learn some TypeScript today?”`);
////////////////////////////////////////////    QUESTION 3  //////////////////////////////////////////
//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
////////////////////////////////////////////     ANSWER  //////////////////////////////////////////
// change in lower Case
let lowerCaseName = "ABDULLAH";
console.log(lowerCaseName.toLowerCase());
// change in upper Case
let upperCaseName = "abdullah";
console.log("", upperCaseName.toUpperCase());
// change in Title Case
let titleCaseName = "abDulLah";
console.log(lowerCaseName.charAt(0).toUpperCase() + titleCaseName.slice(1, titleCaseName.length).toLowerCase());
