//DAY 5 TRY-IT-OUT PART ONE
let dogYears = dogAge => {
  alert(dogAge * 7);
};

//DAY 5 TRY-IT-OUT PART TWO
// let lifeSupply = (ageNow, dailyUse) => {
//   amtNeeded = (80 - ageNow) * (dailyUse * 365);
//   alert(`You will need ${amtNeeded} to last you until you are 80.`);
// };

//-----ALTERNATIVE DYNAMIC AGING
let lifeSupply = (ageNow, dailyUse) => {
  amtNeeded = (ageDead - ageNow) * (dailyUse * 365);
  alert(`You will need ${amtNeeded} items to last you until you are ${ageDead}.`);
};








// ANONYMOUS FUNCTION
//FUNCTION DEFINITION (NOT Invocation)
// function (string) { //Inside the () is where the ARGUMENTS/PARAMETERS go
//   return string.toUpperCase(); //Data transformation and return
// }; //End of the function

//NAMED FUNCTIONS
//FUNCTION DEFINITION
// function addTwo(num) {
//   return num + 2;
// };

//CALL the Function
// console.log(addTwo(4)); //You can check the results of your FUNCTION
//
// let newNum = addTwo(4); //You can use your function as a variable value

// function logMyString(string) {
//   console.log(string); //Does not Return... does nothing outside of this function
// };
// logMyString('I am the best.'); //Nothing gets logged
//
// function alertsAd() { //You can have a function without parameters
//   alert('We have a sale');
// };
// alertsAd(); //Calls the function - no values necessary

//RECURSIVE FUNCTIONS
// let i = 0;
// function iCallMyself() {
//   console.log(i);
//   i++;
//   iCallMyself();
// }; //---DON'T DO IT!!! It will call itself and cause an infinite loop

//FAT ARROW FUNCTIONS
//----BASIC IMPLEMENTATION
(logFunction, alertFunction) => { //NO Function keyword
  logFunction('Hello world');
  alertFunction('Goodbye, friends!');
};

//----ONLY 1 ARGUMENT
string => { //Parentheses are optional
  console.log(string);
};

//----FUNCTION EXPRESSION OF FAT ARROW
let logString = string => { //Function Expressions allow functions to be named
  console.log(string);
};
logString('Hello cats!');

//----IMPLICIT RETURN
string => (string.toUpperCase()); //Automatically returns
string => string.toUpperCase(); //Outer parentheses are optional
