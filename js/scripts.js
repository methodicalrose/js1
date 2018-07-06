var myString = "Andy";
// console.log(typeof myString); // String

var myNumber = 43; // primitive number
var myOtherNumber = new Number(43); // Number object
// console.log(myNumber, myOtherNumber);

var isAlive = true; // true-false, also 1-0(CAUTION: may read as a number instead)
// console.log(typeof isAlive); // Boolean

let newVariable = "I am the best variable!";
// console.log(newVariable, 'AFTER declaration');

{
  let newVariable = "I am the worst...";
  // console.log(newVariable, 'INSIDE the scope');
}

newVariable = "My dog is ugly."; //re-DEFINITION okay
// console.log(newVariable, 'AFTER scoping');

isLoggedIn = null; // null is the absence of value


//STRING interpolation
// console.log("Hey there, " + myString + ", how are you?"); // ES5
// console.log(`Hey there, ${myString}, how are you?`); // ES6

var dozen = 12; {
  dozen = 13;
  //BLOCK of code
}

const age = 26; // MUST be defined when it is declared
{
  const age = 27; // can be redefined in scope, but MUST be redeclared
  // console.log(age);
}
// console.log(age);

//OBJECTS
let today = new Date(); // will give current date/time
// console.log(today);
let myBirthday = new Date('4/3/92'); // you can use multiple date formats
// console.log(myBirthday);

let bestNumber = 42.7;

// console.log(Math.floor(bestNumber)); //ROUNDS down
// console.log(Math.ceil(bestNumber)); //ROUNDS up
// console.log(Math.floor(bestNumber) * Math.PI); // can perform caluculations

let calc = Math.ceil(bestNumber) * Math.PI; // even on the object itself


let classRoom = "Room 1";
let objectClassRoom = new String("Room 1");
// console.log(typeof classRoom); // string (Primitive)
// console.log(typeof objectClassRoom); // object (String)
// console.log(classRoom.length); //gives number of characters in a String Object

/* JavaScript makes an assumption that classRoom is a String Object, so
it is treated like an object on that line only */

// FUNCTIONS

alert("Hey there, user! Pick a path..."); /* 1-Directional communication
to your user */
const isReady = confirm("Are you ready to party?"); /* Make it a variable
to allow us to interact with the info */
alert(isReady);

prompt("What's your name?", "John"); // user text box, with substitute value
console.log("What's your name?");
