////////////////////////////////////////////    QUESTION 64  //////////////////////////////////////////
// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30"
////////////////////////////////////////////    ANSWER   //////////////////////////////////////////

const combine = (age: string, ageNumber: number) => {
    return age + ageNumber
}
let result = combine("age :", 17)
console.log(result);


////////////////////////////////////////////    QUESTION 65  //////////////////////////////////////////
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
////////////////////////////////////////////    ANSWER   //////////////////////////////////////////

const reminder = (firstNumber: number, secondNumber: number): number => {
    return firstNumber % secondNumber
}
let checkReminder = reminder(5, 2)
console.log(checkReminder);

////////////////////////////////////////////    QUESTION 66  //////////////////////////////////////////
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
////////////////////////////////////////////    ANSWER   //////////////////////////////////////////



const logicalAnd = (bolean1: boolean, bolean2: boolean): boolean => {
    let condition = bolean1 && bolean2
    return condition
}
let checkBolean = logicalAnd(true, false)
console.log(checkBolean);




