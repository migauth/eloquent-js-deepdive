/* 
&& logical operator both must be true
(true && true)
*/


// if input is true or if there is a value, it will be returned
// if there is no input, 'default' will be true so it will run
console.log('---test1---');
function test(input) {
  return input || 'default';
}
console.log(test('test'));
console.log(test());
console.log(test(""));
console.log(test(1));
console.log(test(NaN));

// test 2 won't work the same because both are true, so it returns 'default' because both values are truthy; it returns the value on the right
// in the second log because input is undefined it is false so it 'short circuits' and runs nothing
console.log('\n---test2---');
function test2(input) {
  return input && 'default'; //reversing this does not work
}
console.log(test2('test'));
console.log(test2());

// test 3 returns 'test' when both values are true, && returns what is on the right
console.log('\n---test3---');
function test3(isInput, input) {
  return isInput && input;
}
console.log(test3(true, 'test'));
console.log(test3(false, 'test'));
console.log(test3(0,'test')); //returns the falsey value 0 but not false
console.log(test3('foo','test'));





