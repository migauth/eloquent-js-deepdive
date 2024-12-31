// A function that checks data types
/* Uses: 
- urnary operator typeof
- function
- conditionals if
- array constructor Array
- isArray method
 */

const checkType = function (input) {
  if (input === null) {return 'null'};
  if (Array.isArray(input) === true) { return 'array'}
  return typeof input;
};

console.log(checkType("hello"));
console.log(checkType(1));
console.log(checkType(null));
console.log(checkType());
console.log(checkType(9n));
console.log(checkType(Symbol("foo")));
console.log(checkType(true));
console.log(checkType({ foo: 1 , bar: 2}));
console.log(checkType([1, 2, 3]));

