//LOGICAL OPERATORS
let bestNumber = true;
let isTrue = false;

console.log(bestNumber && isTrue); //Checks if both parts are true (AND)
console.log(bestNumber || isTrue); //Checks if at least one part is true (OR)
console.log(!isTrue); //Returns the opposite value of the targeted statement (NOT)


//COMPARISON OPERATORS
let num = 11;
let string = '11';

console.log(num == string); //Loose equality checks for value, NOT type
console.log(num === string); //Strict equality checks for value AND type
console.log(num != string); //Loose not-equal, checks if values are not equal
console.log(num !== string); //Strict not-equal, checks if values AND types are not equal


//MATHEMATICAL OPERATORS

//---Modulus
console.log(5 % 2); // 5/2, REMAINDER of 1

//---INC and DEC
let start = 1;

//....after some logic
start++; // start = start + 1
console.log(start); //2
//--------------
start--; // start = start - 1
console.log(start); //0

//---NaN (Not a Number)
let nonNumber = "cheese";

console.log(parseInt(nonNumber)); //returns NaN

console.log(isNan()); // Checks if the data is Not a Number
console.log(!isNaN()); // Checks if the data IS a number


let fifty = "50";
console.log(parseInt(fifty)); //Translates the data into a number-type if possible

let nonString = 50000;
console.log(nonString.toString()); //Translates the data into a string-type if possible
//NOT A REASSIGNMENT

console.log(nonString += 20); // nonString = nonString + 20
//REASSIGNS VALUE - even if you only write it in the console log

//CONTROL FLOW

//IF ELSE---Can work with multiple conditions
let numbahOne = parseInt(prompt("Give me a number.", "10"));
let numbahTwo = parseInt(prompt("Give me another number.", "10"));

if(!isNan(numbahOne) && !isNan(numbahTwo)) { //Checks if a number was submitted both times
  alert(numbahOne + numbahTwo); //Gives the SUM
} else {
  alert("No, dummy!"); //If no numbers were entered
} else if(isNan(numbahTwo)) { //If first number is a number, but second number is NaN
  numbahTwo = parseInt(prompt("No, I said a number!", "10")); //Try again
  alert(numbahOne + numbahTwo);
} else { //Always put a last throw 'else' at the end of your flow
  alert("No, dummy!");
}

//Switch---Can only work with ONE condition at a time
let greeting = prompt("Tell me how to say hello.", "Konnichiwa!");

switch(greeting.toLowerCase()) { //NORMALIZING DATA! Sets all answers to lowercase
  case "hello":
    alert(`I love saying ${greeting}!`);
    break;
  case "wassup":
    alert(`${greeting} is SO 90's!`);
    break;
  default: //Always have a default case
    alert(`I've never heard ${greeting} before!`);
    break;
}

//TERNARY---Basic true/false operations

let money = 10;
let currency = confirm("In dollars or not?");

currency ? alert(`$${money}`) : alert(money); // If true (?) : If false
