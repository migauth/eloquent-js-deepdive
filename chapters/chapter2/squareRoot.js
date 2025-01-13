const prompt = require("prompt-sync")();

let isNumber = prompt("Enter a number: ")

if (!isNaN(isNumber)) {
  console.log('This number is the square root of ' + isNumber * isNumber);
} else {
  console.log("Not a number");
}