// in java var let and const are used to define a variable  Ex

let a = 10
var b = 20
const c = 30
console.log(a,b,c)

// but they differ in scope, re-declaration, and mutation rules:

// var
// Scope: Function-scoped or globally scoped. If declared outside of any function, it's globally available.
// Re-declaration: Variables declared with var can be re-declared and updated within their scope.
// Hoisting: var variables are "hoisted," meaning their declaration is moved to the top of their scope but not their assignment.

console.log(x); // undefined due to hoisting
var x = 5;
console.log(x); // 5

// let
// Scope: Block-scoped. It is only available within the block (curly braces {}) it is defined in.
// Re-declaration: You cannot re-declare a variable using let within the same scope, though you can update it.
// Hoisting: Variables declared with let are also hoisted, but they are not initialized. Accessing them before declaration results in a ReferenceError.
//console.log(y); // ReferenceError: y is not defined
let y = 5;
console.log(y); // 5


// const
// Scope: Block-scoped like let.
// Re-declaration: Variables declared with const cannot be re-declared or updated. They must be initialized at the time of declaration and cannot be reassigned. However, for objects and arrays, their contents (properties and elements) can still be modified.
// Hoisting: Similar to let, const variables are hoisted but not initialized, resulting in a ReferenceError if accessed before declaration.
const z = 10;
z = 20; // TypeError: Assignment to constant variable


// What Happens if You Don’t Use var, let, or const?
// If you don't declare a variable using var, let, or const, JavaScript implicitly creates a global variable. This can lead to issues like:

// Accidental global scope pollution: The variable will be accessible everywhere, even where it shouldn't be, increasing the risk of bugs.
// Potential conflicts: It could unintentionally overwrite existing global variables or functions.
// Silent errors: This can make debugging difficult.

function myFunction() {
    x = 10; // implicitly global
  }
  myFunction();
  console.log(x); // 10 (global variable)
  