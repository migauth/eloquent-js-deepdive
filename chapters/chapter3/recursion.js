function countUp(n, max) {
  if (n > max) {return;}
  console.log(n);
  countUp(n + 1, max)
}

countUp(1, 5)