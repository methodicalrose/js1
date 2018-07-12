let myArray = []; //MOST basic form of myArray
let favoriteFoods = ["pizza", "hamburgers", "french fries"];
let allTheThings = ["string", 23, ["stuff"], {}, false]; //Arrays can hold multiple data types

// console.log(favoriteFoods[1]); //Logs the second value of the array (index #1)
//
// alert(favoriteFoods.length); //Logs how many values are in the array

//TRY IT OUT #1
let newArray = ["Deadpool", 7, true, 2010];
// console.log(newArray, newArray.length);

// CHECK if this is an array
// console.log(Array.isArray(newArray), typeof newArray); //returns true/false - all arrays are Objects

// PUSH
newArray.push("Gerard Butler"); // Adds a value to the END of your array

// UNSHIFT
newArray.unshift("Seto Kaiba"); // Adds a value to the BEGINNING of your array

// POP
newArray.pop(); // Removes the last value in the array (save it if you wanna keep it!)
// --- let lastMember = newArray.pop(); will save the value you removed as a variable

// SHIFT
newArray.shift(); // Removes the first value in the array

// SPLICE
newArray.splice(2); // 1 argument: Removes every value from the declared index onward
// --- let removed = newArray.splice(2); will save what you removed as a variable
newArray.splice(1, 2); // 2 arguments: starting at index 1, remove 2 values (index 1 and 2)
newArray.splice(3, 1, ["I got added"]); // 3+ arguments: Removes index 3, replaces with the array value
newArray.splice(3, (newArray.length - 4), ["More stuff"]); // You can calculate how many items to remove
newArray.splice(-2, 1, ["Cheese"]); // Counts backward to remove the 2nd from the last value
// --- Using a negative index, you DO NOT start from 0

// SLICE
newArray.slice(); // Makes an exact copy of an array
newArray.slice(1); // Makes a copy starting at index 1 (2nd item)
newArray.slice(1, 4); // Makes a copy starting at index 1 up until index 4
// --- The second index number is NOT INCLUDED in the slice - it only indicates the end point

// INDEX OF
let removeIndex = newArray.indexOf("Cheese"); // Gives back the index number of the declared value
newArray.splice(removeIndex, 1); // You can use the given index number to perform a splice
newArray.lastIndexOf("Cheese"); // Gives the index of the last one of the declared value

// REVERSE
let myNums = [1, 2, 3, 4, 5];
myNums.reverse(); // Reverses the order of all values in the array

// SORT
newArray.sort(); // Alpha-numeric ordering by first character, treats everything as a string

// MULTI-DIMENSIONAL ARRAYS
let multiDimensional = [["hello", 1], ["goodbye", 0]];

// console.log(multiDimensional[0][0], multiDimensional[1][0]); // Returns: hello goodbye
// --- First number is index of the array, second number in internal index of that array
// console.log(multiDimensional[0][1], multiDimensional[1][1]); // Returns: 1 0

// TRY IT OUT #2
let favMovies = [];
let arrayOne = ["Pokemon", "Ash Ketchum"];
let arrayTwo = ["Titanic", "Rose Dawson"];
let arrayThree = ["Yu-Gi-Oh!", "Yugi Mutou"];
let arrayFour = ["Steven Universe", "Steven"];
let arrayFive = ["Blue Exorcist", "Rin Okumura"];

favMovies.push(arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive);

let titles = [];
titles.push(favMovies[0][0], favMovies[1][0], favMovies[2][0], favMovies[3][0], favMovies[4][0]);
alert(titles);

let favAndLeast = [];
favAndLeast.push(favMovies[0], favMovies[3]);
console.log(favAndLeast);
