var numbersAndBoolianAndString = [1, 2, 3, 4, 5, 6, 7, false, "Mezbah"]

// index of false
console.log("index of false", numbersAndBoolianAndString.indexOf(false));

// Data access from array
// answer is 2
console.log("answer is 2" , numbersAndBoolianAndString[1]);

// update data from array element
numbersAndBoolianAndString[3] = 100
console.log("upadate array element", numbersAndBoolianAndString)

// Data add on array
numbersAndBoolianAndString.push("Rupangkar")
console.log("Data add using Push", numbersAndBoolianAndString)

// Data remove on array
numbersAndBoolianAndString.pop("Rupangkar")
console.log("Data remove using pop", numbersAndBoolianAndString)

// Add data into array of first index
numbersAndBoolianAndString.unshift("AddFirstIndexData");
console.log("Add data into array first element", numbersAndBoolianAndString)


// Comparison Operators is : > , < , >=, <=, ==, !==


// condition
var myMoney = 10
var requredMoney = 100

if(myMoney >= requredMoney){
    console.log("Ok, you are enter a new world!")
}else{
    console.log("you have not enough money!!")
}

// eaual condition
var isEqual = 10
var isEqual2 = 10
if(isEqual == isEqual2){
    console.log("Both of same!");
}

//Neted if
let age = 25;
let hasLicense = true;

if (age >= 18) {
    console.log("You are old enough to vote.");

    if (hasLicense) {
        console.log("You can also drive.");
    } else {
        console.log("You are eligible to vote, but you can't drive without a license.");
    }
} else {
    console.log("You are too young to vote.");
}


// And Logical oparator


const predefinedUsername = "myusername";
const predefinedPassword = "mypassword";

// Prompt the user for their input
const enteredUsername = "Enter your username:";
const enteredPassword = "Enter your password:";

// Check if the entered username and password match the predefined values
if (enteredUsername === predefinedUsername && enteredPassword === predefinedPassword) {
    console.log("Login successful. Welcome, " + enteredUsername + "!");
} else if (enteredUsername === predefinedUsername) {
    console.log("Incorrect password. Please try again.");
} else if (enteredPassword === predefinedPassword) {
    console.log("Incorrect username. Please try again.");
} else {
    console.log("Incorrect username and password. Please try again.");
}


// Or Logical oparator

const favoriteColor = "red";

if (favoriteColor === "red" || favoriteColor === "blue" || favoriteColor === "green") {
    console.log("That's a nice choice!");
} else {
    console.log("That's an interesting choice, but it's not one of the predefined options.");
}