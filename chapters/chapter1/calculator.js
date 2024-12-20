// A command line calculator

const prompt = require('prompt-sync')();

const looper = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    arr.push(Number(element))
  }
  // console.log('looper',arr);
  return arr;
}

const add = (input) => {
  let sum = 0;
  return input.reduce((acc, val) => acc + val, sum)
}

const sub = (input) => {
  let dif = 0;
  return input.reduce((acc, val) => acc - val, dif)
}

const choice = prompt("Would you like to: add, subtract, multiply, divide? ");

if (choice === 'add') {
  let nums = prompt("What numbers would you like to add? ")
  if (nums.length <= 1){
    console.log("need more numbers!");
  } else {
  let decode = nums.split(' ')
  console.log(add(looper(decode)))
  }
}

if (choice === 'subtract') {
  let nums = prompt("What numbers would you like to subtract? ")
  let decode = nums.split(' ')
  console.log(sub(looper(decode)))
}


// const calculator = (input) => {
//   let result = 0;
//   for (let i = 2; i < input.length; i++) {
//     const element = input[i];
//     console.log(typeof element);
//   }
// }

// console.log(add(looper(userInput)));
