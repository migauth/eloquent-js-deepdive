# Chapter 3 - Functions

## Returns vs Side effects

- side effect = console.log - still returns undefined
- return binds the value of the funtion's result
- parameter vs argument

## Bindings and Scopes

- global and local scopes
- nested scopes with functions inside functions

## Functions as values
- passing around function values to other functions

## Declaration Notation
- defined with function keyword first
- doesn't matter where you define the function - can be used anywhere

## Arrow Functions
- Mostly for making functions smaller, but there are some differences with 'this' discussed later

## Call Stack
- The call stack is like a stack of sticky notes, where each new function call adds a note on top, and you must finish and remove the top note before moving to the one below, following a last-in, first-out (LIFO) process.

## Optional Arguements
- Optional arguments in JavaScript are function parameters that are not required and default to undefined if not provided. You can set default values using the = operator, ensuring a fallback when an argument is missing.

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();       // "Hello, Guest!"
greet("Mike"); // "Hello, Mike!"

This allows functions to handle missing arguments gracefully.

## Closure
- A closure in JavaScript is when a function remembers and can access variables from its outer scope, even after that scope has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
Here, inner() forms a closure, retaining access to count even after outer() has returned.

## Recursion
- 

## Growing Functions
- 

## Funcs and Side effects
- 

## Summary
- 
