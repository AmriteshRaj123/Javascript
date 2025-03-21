/*
Variables and Datatypes in JavaScript

Variables and data types are foundational concepts in programming, serving as the building blocks for storing and manipulating information within a program. In JavaScript, getting a good grasp of these concepts is important for writing code that works well and is easy to understand.

Variables
A variable is like a container that holds data that can be reused or updated later in the program. In JavaScript, variables are declared using the keywords var, let, or const.

1. var Keyword
The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behaviour.




var n = 5;
console.log(n);

var n = 20; // reassigning is allowed
console.log(n);

Output
5
20
2. let Keyword
The let keyword is introduced in ES6, has block scope and cannot be re-declared in the same scope.




let  n= 10;
n = 20; // Value can be updated
// let n = 15; //can not redeclare
console.log(n)

Output
20
3. const Keyword
The const keyword declares variables that cannot be reassigned. It’s block-scoped as well.




const n = 100;
// n = 200; This will throw an error
console.log(n)

Output
100
For more details read the article – JavaScript Variables


Data Types
JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

Primitive Datatypes
Primitive datatypes represent single values and are immutable.

1. Number: Represents numeric values (integers and decimals).

let n = 42;
let pi = 3.14;
2. String: Represents text enclosed in single or double quotes.

let s = "Hello, World!";
3. Boolean: Represents a logical value (true or false).

let bool= true;
4. Undefined: A variable that has been declared but not assigned a value.




let notAssigned;
console.log(notAssigned);

Output
undefined
5. Null: Represents an intentional absence of any value.

let empty = null;
6. Symbol: Represents unique and immutable values, often used as object keys.

let sym = Symbol('unique');
7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.

let bigNumber = 123456789012345678901234567890n;
Non-Primitive Datatypes
Non-primitive types are objects and can store collections of data or more complex entities.

1. Object: Represents key-value pairs.

let obj = {
    name: "Amit",
    age: 25
};
2. Array: Represents an ordered list of values.

let a = ["red", "green", "blue"];
3. Function: Represents reusable blocks of code.

function fun() {
    console.log("GeeksforGeeks");
}
For more details read the article – JavaScript DataTypes


Variables and DataTypes in JavaScript -FAQ
What are the different data types in JavaScript?
JavaScript has several basic data types including string, number, boolean, undefined, null, symbol, and bigint. There are also complex data types like object, which includes arrays and functions.


How do you declare a variable in JavaScript?
In JavaScript, you can declare a variable using var, let, or const. let and const were introduced in ES6 and are preferred over var because of their block-scoping and other advantages.


What is the difference between let, var, and const in JavaScript?
var is function-scoped, while let and const are block-scoped. let allows you to reassign a value to a variable, while const does not, meaning variables declared with const cannot be reassigned after their initial assignment.


What is the difference between null and undefined in JavaScript?
undefined means a variable has been declared but has not yet been assigned a value. null is an assignment value that represents “no value” or “empty”.


How can you check the data type of a variable in JavaScript?
You can use the typeof operator to determine the data type of a variable in JavaScript. For example, typeof 42 returns “number”, and typeof “hello” returns “string”.


*/