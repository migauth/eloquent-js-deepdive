// A command line calculator

const prompt = require("prompt-sync")();

const looper = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    arr.push(Number(element));
  }
  // console.log('looper',arr);
  return arr;
};

const add = (input) => {
  let sum = 0;
  return input.reduce((acc, val) => acc + val, sum);
};

const sub = (input) => {
  let dif = 0;
  return input.reduce((acc, val) => acc - val, dif);
};

const choice = prompt("Would you like to: add, subtract, multiply, divide? ");

console.log(`What numbers would you like to ${choice}?`);

switch (choice) {
  case "add":{
    let nums = prompt("");
    if (nums.length <= 1) {
      console.log("need more numbers!");
    } else {
      let decode = nums.split(" ");
      console.log(add(looper(decode)));
    }}
    break;
  case "subtract":{
    let nums = prompt("");
    if (nums.length <= 1) {
      console.log("need more numbers!");
    } else {
      let decode = nums.split(" ");
      console.log(sub(looper(decode)));
    }}
    break;
  default:
    console.log("Command does not exist");
}
