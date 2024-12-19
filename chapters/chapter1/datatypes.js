// A funtion that checks data types

const checkType = function (input) {
  // typeof doesn't check for null values specifically and will return object
  if (input === null) {
    return 'null';
  // special check for an array
  } else if (Array.isArray(input) === true) {
    return 'array'
  }
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

