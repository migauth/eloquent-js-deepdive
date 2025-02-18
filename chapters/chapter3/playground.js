// the tree after the next will always have twice as many nodes; 2, 4, 8, 16 ... etc

const invertTree = (root) => {
  let newArr = [...root];
  let newerArr = [];
  // stores the first element
  newArr.shift();

  function multByTwo(mult, count) {
    for (let i = 0; i < count; i++) {
      console.log(mult * 2);
      mult = mult * 2;
    }
  }

  function swap() {
    for (let i = 0; i < multByTwo(2, 5); i++) {
      console.log(i);
    }
  }

  swap()
  console.log(newerArr);
};

invertTree([1, 2, 3, 4, 5, 6, 7]);
