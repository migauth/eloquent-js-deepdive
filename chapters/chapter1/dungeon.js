const prompt = require("prompt-sync")();

const start = prompt("You wake up in a dark room. What do you do? ").trim().toLowerCase();

function noInput(input) {
  return input || 'you lose'
}

console.log(noInput(start));