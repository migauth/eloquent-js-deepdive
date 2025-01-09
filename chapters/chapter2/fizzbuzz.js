// If statement solution ** conditional execution

const fizzBuzz = (count) => {
  let arr = []
  for (let i = 1; i <= count; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      arr.push('fizz');
    } else if(i % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(String(i));
    }
  }
  return(arr);
}

// Better for adding new conditionals easily

const fizzBuzz2 = (count) => {
  for (let i = 1; i <= count; i++) {
    let output = ''
    if (i % 3 === 0){output += "Fizz"}
    if (i % 5 === 0){output += "Buzz"}
    if (!output) {output = String(i)}
    console.log(output);
  }
}

fizzBuzz2(100);

