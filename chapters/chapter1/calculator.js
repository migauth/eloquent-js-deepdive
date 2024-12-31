// A command line calculator

const prompt = require("prompt-sync")();

const looper = (input) => {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    arr.push(Number(element));
  }
  return arr;
};

// const calculator = (input, op) => {
//   return input.reduce((acc, val) => acc + val);
// };

const add = (input) => {
  return input.reduce((acc, val) => acc + val);
};

const sub = (input) => {
  return input.reduce((acc, val) => acc - val);
};

const mult = (input) => {
  return input.reduce((acc, val) => acc * val);
};

const divide = (input) => {
  return input.reduce((acc, val) => acc / val);
};

const choice = prompt("Would you like to: add, subtract, multiply, divide? ").trim().toLowerCase();

console.log(`What numbers would you like to ${choice}?`);

switch (choice) {
  case "add":
    {
      let nums = prompt("");
      if (nums.length <= 1) {
        console.log("need more numbers!");
      } else {
        let decode = nums.split(" ");
        console.log(calculator(looper(decode), '+'));
      }
    }
    break;
  case "subtract":
    {
      let nums = prompt("");
      if (nums.length <= 1) {
        console.log("need more numbers!");
      } else {
        let decode = nums.split(" ");
        console.log(sub(looper(decode), Number(nums[0])));
      }
    }
    break;
  case "multiply":
    {
      let nums = prompt("");
      if (nums.length <= 1) {
        console.log("need more numbers!");
      } else {
        let decode = nums.split(" ");
        console.log(mult(looper(decode), Number(nums[0])));
      }
    }
    break;
  case "divide":
    {
      let nums = prompt("");
      if (nums.length <= 1) {
        console.log("need more numbers!");
      } else {
        let decode = nums.split(" ");
        console.log(divide(looper(decode), Number(nums[0])));
      }
    }
    break;
  default:
    console.log("Command does not exist");
}
