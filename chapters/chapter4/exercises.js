function range(start, end, step) {
    let array = [];
    if (step) {
      for (let i = start; i <= end; i += step) {
        array.push(i);
      }
      return array;
    } else {
      for (let i = start; i <= end; i++) {
        array.push(i);
      }
      return array;
    }
}

function sum(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      total += element;
    }
    return total;
}

console.log(range(1, 10));
// console.log(sum(range(1, 10)));