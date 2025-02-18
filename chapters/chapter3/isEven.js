function isEven(num) {
  if (num <= 0) {
    return true;
  }
  isEven(num - 2)
  console.log(num);
}

console.log(isEven(50));