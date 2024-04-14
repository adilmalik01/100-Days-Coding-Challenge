////////////////////////////////////////////    QUESTION 61  //////////////////////////////////////////
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

enum vehicleCategories {
    car,
    truck,
    bus,
    airoplane,
    helicopter
}

console.log(vehicleCategories.airoplane);  // here showing 3 



////////////////////////////////////////////    QUESTION 62  //////////////////////////////////////////
// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

interface StudentBluePrint {
    name: string,
    age: number,
    class: number,
    subject: string[],
}

let studentInfo: StudentBluePrint = {
    name: "Adil Malik",
    age: 17,
    class: 10,
    subject: ["Coding", "Coding", "Only Coding"]
}
console.log(studentInfo);


////////////////////////////////////////////    QUESTION 63  //////////////////////////////////////////
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////

type circle = {
    radius: number
}

let Circle: circle = {
    radius: 2.4
}

type rectangle = {
    height: number,
    width: number
}
let Rectangle: rectangle = {
    height: 34,
    width: 34
}

console.log(Rectangle);
console.log(Circle);

















