// Random number generator
//var n = Math.random(); ==> Random number between 0 and 1 (0-0.99999)

// var n = Math.random() * 100;
// console.log(n);

//die roll
// var die = Math.floor(Math.random() * 6) + 1;
// console.log(die);

//love calculator random number generator
// var u1 =  prompt("What is your user1 name");
// var u2 = prompt("What is your user2 name");

// const user1 = prompt("Please enter your user1 name:");
// const user2 = prompt("Please enter your user2 name:");

// // Generate a random love score between 1 and 100
// var love = Math.random() * 100;
// var loveScore = Math.floor(love) + 1;

// // Corrected variable names in console.log
// console.log(user1 + " and " + user2 + " love score is " + loveScore + "%");

//Comparators
//=== is equal to operator
//!== is not equal to
// >= greater than or equal to
// <= less than or equal to
// > greater than
// < less than

// && AND
// || OR
// ! NOT
// ? ternary operator


// const user1 = prompt("Please enter your user1 name:");
// const user2 = prompt("Please enter your user2 name:");

// // Generate a random love score between 1 and 100
// var love = Math.random() * 100;
// var loveScore = Math.floor(love) + 1;

// if(loveScore>70){
// 	alert("Your Love Score is"+loveScore+"%"+"You guys love each other like kanye loves kanye");
// }

// if(loveScore>30 && loveScore<=70){
// 	alert("Your Love Score is"+loveScore+"%"+"You guys love each other like priyanka - nick jonas");
// }

// if(loveScore<=30){
// 	alert("Your Love Score is"+loveScore+"%"+"You guys love each other like Hardhik-Natasha");
// }

//BMI Calculator advanced


//Working with JS Arrays
var guestList=["Angela","Brad","Cathy", "David","Jen","Steve"];
// console.log(guestList[0]);
guestList.includes("Jen");


var guestList=["Angela","Brad","Cathy", "David","Jen","Steve"];
if (guestList.includes(prompt("What is your name?"))){
    console.log("Welcome to the party");
}
else{
    console.log("You are not invited");
}