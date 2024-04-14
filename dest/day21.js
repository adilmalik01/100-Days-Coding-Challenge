"use strict";
////////////////////////////////////////////    QUESTION 61  //////////////////////////////////////////
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
////////////////////////////////////////////    ANSWER  //////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
var vehicleCategories;
(function (vehicleCategories) {
    vehicleCategories[vehicleCategories["car"] = 0] = "car";
    vehicleCategories[vehicleCategories["truck"] = 1] = "truck";
    vehicleCategories[vehicleCategories["bus"] = 2] = "bus";
    vehicleCategories[vehicleCategories["airoplane"] = 3] = "airoplane";
    vehicleCategories[vehicleCategories["helicopter"] = 4] = "helicopter";
})(vehicleCategories || (vehicleCategories = {}));
console.log(vehicleCategories.airoplane); // here showing 3 
let studentInfo = {
    name: "Adil Malik",
    age: 17,
    class: 10,
    subject: ["Coding", "Coding", "Only Coding"]
};
console.log(studentInfo);
let Circle = {
    radius: 2.4
};
let Rectangle = {
    height: 34,
    width: 34
};
console.log(Rectangle);
console.log(Circle);
