// A command line calculator

// const prompt = require('prompt-sync')();

// let choice = prompt("Would you like to: add, subtract, multiply, divide? ");

let userInput = process.argv

const looper = (input) => {
  let arr = [];
  for (let i = 2; i < input.length; i++) {
    const element = input[i];
    arr.push(Number(element))
  }
  return arr;
}

const add = (input) => {
  let sum = 0;
  return input.reduce((acc, val) => acc + val, sum)
}

// const calculator = (input) => {
//   let result = 0;
//   for (let i = 2; i < input.length; i++) {
//     const element = input[i];
//     console.log(typeof element);
//   }
// }

console.log(add(looper(userInput)));
