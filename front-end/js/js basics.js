#VARIABLES AND DATA TYPES

console.log is used to log(print) a message to the console
console.log('Karnataka');

#Variables
variables are containers for DATA
age=25
name="Puneeth Raj Kumar"

#variables rules
1. variables names are case sensitive; "a" & "A" are different
2. Only letters, digits, underscore and $ are allowed(Not even space is allowed)
3. Only a letter, underscore or $ can be 1st character
4. Resereved words cannot be variable names

#let, const and var

var:Variables that can be re-declared, updated. (A global scope variable). It is depreciated as of 2015 ES6 JS
let:Variables that cannot be re-declared, but can be updated. (A block scope variable)
const: Variables that cannot be re-declared or updated. (A block scope variable)

let age=5;
let age=6; //re-declration of let keyword results in error since let key word cannot be used for re-declaration
age=7;// alternaticely we can remove let keyword and can update the age variable
console.log(age);

const age=5;
age=6;// results in error since const keyword cannot be used for re-declaration or update
age=7;
console.log(age);

#Data TYPES

Primitive(7): Number,String, Boolean,Undefines,Null,BigInt,Symbol
Non-Primitive:Objects, Arrays, Functions

#Comments

//This is a single line Comments

/*This is a 
 multiline
 comment*/

 #Operators
 + - * / 
 Modulus
 Exponentiation
 Increment/Decrement


#Conditional statements

Conditional Statement	       Description
if statement	            Executes a block of code if a specified condition is true.
else statement	            Executes a block of code if the same condition of the preceding if statement is false.
else if statement	        Adds more conditions to the if statement, allowing for multiple alternative conditions to be tested.
switch statement	        Evaluates an expression, then executes the case statement that matches the expression’s value.
ternary operator	        Provides a concise way to write if-else statements in a single line.
Nested if else statement	Allows for multiple conditions to be checked in a hierarchical manner.

#If statement:

if ( condition ) {
    // If the condition is met, 
    //code  will get executed.
}


let num = 20; 
if (num % 2 === 0) { 
    console.log("Given number is even number."); 
    } 
if (num % 2 !== 0) { 
    console.log("Given number is odd number."); 
    };

#If-else statement

if (condition1) {
    // Executes when condition1 is true
else(condition2) {
        // Executes when condition2 is true
    }
}

let age = 25; 
if (age >= 18) { 
    console.log("You are eligible of driving licence") 
    } 
else { 
    console.log("You are not eligible for driving licence") 
    };

#else if statement

if (1st condition) {
    // Code for 1st condition
} else if (2nd condition) {
    // ode for 2nd condition
} else if (3rd condition) {
    // Code for 3rd condition
} else {
    //  ode that will execute if all 
    // above conditions are false
}


const num = 0; 
if (num > 0) { 
    console.log("Given number is positive."); 
    } 
else if (num < 0) { 
    console.log("Given number is negative."); 
    } else { 
        console.log("Given number is zero."); 
    };

#switch statement

switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    . . .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
};

const marks = 85; 
let Branch; switch (true) { 
    case marks >= 90: Branch = "Computer science engineering"; 
    break; 
    case marks >= 80: Branch = "Mechanical engineering"; 
    break; case marks >= 70: 
    Branch = "Chemical engineering"; 
    break; 
    case marks >= 60: Branch = "Electronics and communication"; 
    break; 
    case marks >= 50: Branch = "Civil engineering"; 
    break; 
    default: Branch = "Bio technology"; 
    break; 
    } 
    console.log(`Student Branch name is : ${Branch}`);

#Nested If-else
if (condition1) {
    // Code block 1
    if (condition2) {
        // Code block 2
    } else {
        // Code block 3
    }
} else {
    // Code block 4
}    

let weather = "sunny"; 
let temperature = 25; 
if (weather === "sunny") { 
    if (temperature > 30) { 
        console.log("It's a hot day!"); 
        } else if (temperature > 20) { 
            console.log("It's a warm day."); 
            } 
            else { console.log("It's a bit cool today."); 
            } 
            } 
            else if (weather === "rainy") { 
                console.log("Don't forget your umbrella!"); 
                } 
                else { console.log("Check the weather forecast!"); 
                };

#ternary operator

condition ? value if true : value if false

let age = 21; 
const result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote."; 
console.log(result);
