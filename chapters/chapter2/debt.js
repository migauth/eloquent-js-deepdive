const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

let mike = 0;
let ember = 0;

rl.question("Who paid? ", (who) => {
  rl.question("How much? ", (pay) => {
    mike = pay
    console.log(`Ember owes Mike ${mike}`);
  });
});




