# Chapter 2 - Program Structure

## Expression vs statement
Expresion
- Expresions produce values
- Can be a smaller part of a statement
Examples 
- 5 (number literal)
- 2 + 3 (arithmetic expression)
- "hello world" (string literal)
- x > 10 (comparison expresion)
- greet("hello world") (funtion call expression)

Statements
- "a full sentence"
- performs an action
- a complete instruction that tells javascript to DO something
- should end in a semicolon
Examples
- let x = 5; (a variable definition)
- if (x > 10) {console.log("bigger number");} (a conditional statement)
- for (let i = 0, i < 5, i++) {console.log(i); } (a loop statement)

Expression prodcues a value
Statement performs an action

## Bindings
- Think of bindings as tenticles rather than containers because the bindings can change, 'they do not contain values, they grasp them'

## Environments
- a global environment is first created that contains built in bindings (console.log, Math, Date) and the global object
- when a binding (variable) is created it becomes part of the programs environment
- this is where local and global scopes come in

## Functions
- Parameter is the named variable placeholder, argument is the actual value passed to the function

## Flow
- Control flow: straight line, left to right, up to down
- Conditional flow: change depenind on condition, aka if statement etc.

## While and do loops
- while loops are best when you need to ensure the condition is checked before the block runs
- do...while loops are ideal when the block must execute at least once, regardless of the initial condition

## Indentation
- indentation doesnt matter in js technically, only for readability
- called 'free form
- vs python which is 'whitespace-sensitive' or 'indentation sensitive' or 'indentation spaced syntax'

## For loops and break
- for loops have a bit more structure and readability advantages with initialization, condition, and increments built into one line
- for when you know, while when you don't

## Succinctly updating bindings
- can use += for larger than one and ++ for incriments of 1, etc.

## Switch statements
- remember to break and case

## Capitalization
- Camel case