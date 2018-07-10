const string = "I am Groot.";
const newString = new String("I am Groot.");

console.log(string === newString); //Strictly Equal - false
console.log(string == newString); //Loosely Equal - TRUE


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


let isAdult = confirm("Are you over 18?");

if(isAdult) {
  let under80 = confirm("Are you under than 80?");
  if(under80) {
    let starWars = confirm("Do you like Star Wars?");
    if(!starWars) return;
    alert("Congratulations!");
  } else {
    let isOld = confirm("Do you like prunes?");
  }
} else {
  alert("Sorry, you are not old enough.");
}
