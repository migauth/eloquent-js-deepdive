const prompt = require("prompt-sync")();

const start = prompt("You wake up in a dark room. What do you do? ").trim().toLowerCase();

function option1(input) {
  input && console.log("option 1");
}

// function firstInput(input) {
//   input && console.log(`Nice. I would ${input} too.`)) || console.log('Why no response?');
// }

firstInput(start)