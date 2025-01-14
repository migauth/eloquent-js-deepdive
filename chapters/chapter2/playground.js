const prompt = require("prompt-sync")();

let username;

// let count = 0
// let result = 1

// while (true) {
// console.log('hello');
// }

// This gets stuck in a loop that can't be terminated

// while (!username) {
//   prompt('Enter your usename: ')
//   console.log(username);
// }

/** 
 * Used: ps aux | grep node
 * to look thru terminal process
 * or: ps aux | grep -i terminal
 * in case there is something running
 * or just close the terminal...
 * */ 

//this works

do {
  username = prompt("What is you name? ")
} while (!username) {
  console.log(username);
}