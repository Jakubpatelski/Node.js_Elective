// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

const convertOne = parseFloat(numberOne)
const converTwo = parseFloat(numberTwo)
const addNumbers = convertOne + converTwo

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

console.log(addNumbers)
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2)
const difSum =  parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)
const difDecimal = difSum.toFixed(2)

console.log(sum)


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sumWithDecimal = ((one + two + three) / 3).toFixed(5)
console.log(sumWithDecimal)


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const char = letters[2]

console.log(char)


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

//this will captialize all J
const factJ = fact.replace("j", "J")
const factJavascript = fact.replace("javascript", "Javascript")

console.log(factJ)
console.log(factJavascript)


// --------------------------------------