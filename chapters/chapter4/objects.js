const testObject = {
  name : 'Mike',
  age : 36,
  isCool : true,
  isWearing : ['pants', 'shirt', 'underwear'],
  sayHi : (say) => {console.log(`${say}`);} //method3
}

testObject.sayHi('hi');

testObject.pizza = 'peperoni'
testObject.name = "Michael"


// console.log(Object.keys(testObject));
// console.log(Object.values(testObject));

const sayMyName = function sayMyName(name) {
  return {
    isCool : true,
    myName : name.toUpperCase(),
  }
}

console.log(sayMyName("mike"));
console.log(sayMyName("mike").myName);