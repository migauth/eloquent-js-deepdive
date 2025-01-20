function chessBoard(size) {
  let arr = [];
  while (arr.length < size) {
    arr.push("#");
  }
  const result = arr.join(" ");
  for (let i = 1; i <= size; i++) {
    if (i % 2 === 0) {
      console.log("", result);
    } else {
      console.log(result);
    }
  }
}

chessBoard(5);
