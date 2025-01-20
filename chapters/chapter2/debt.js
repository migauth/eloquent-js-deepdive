const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);

let mikeTotal = 0;
let emberTotal = 0;

// Add do while loops to repeat question until its answered?
// Gets stuck in an infinite loop. Must use recursive funtion.

// let whoPaid;

// do {
// whoPaid = rl.question("Who paid", (who)=> {
//   })
// } while (!whoPaid) {
//   console.log(`${who} paid`);
// }

function askWhoPaid() {
  // let who;
  rl.question("Who paid? ", (who) => {
    const low = who.toLocaleLowerCase();
    if (low !== "mike" && low !== "ember") {
      console.log("name not in system");
      askWhoPaid();
    }
    console.log(who);
  });
}

askWhoPaid()

// rl.question("Who paid? ", (who) => {
// const low = who.toLocaleLowerCase()
//   // if the lowercase of the string does not equal 'mike' and it does not equal 'ember' then the condition will be true and it will run
// if (low !== 'mike' && low !== 'ember') {
//   console.log('name not in system');
//   rl.close()
//   return;
//   }

//   rl.question("How much? ", (pay) => {

//     rl.question("Full or split?", (ans) => {
//       const lowAns = ans.toLowerCase();
//       if (lowAns !== 'full' && lowAns !== 'split') {
//         console.log('Option not valid');
//       }

//     })

//     if (low === 'mike') {
//       mikeTotal = pay
//       console.log(`Ember owes ${who} $${mikeTotal / 2}`);
//     }

//     if (low === 'ember') {
//       emberTotal = pay
//       console.log(`Mike owes ${who} $${emberTotal / 2}`);
//     }

//     rl.close()
//   });
// });
