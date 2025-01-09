// If statement solution

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

console.log(fizzBuzz(100));
