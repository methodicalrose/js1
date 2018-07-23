//TRY IT OUT DAY 6
let btn = document.querySelector(#btn);
let bestDiv = document.querySelector(#bestDiv);
let superH = document.querySlector(#superH);

btn.addEventListener(
  "click",
  ev => {
    alert("You clicked me!");
  }
);
bestDiv.addEventListener(
  "mouseenter",
  ev => {
    bestDiv.style.backgroundColor = "#e4c3f6";
  }
);
superH.addEventListener(
  "keyup",
  ev => {
    superH.style.color = "#c3f4";
  }
);









// //QUERYING THE DOM
// //-----Older Methods
// const body = document.getElementsByTagName("body"); //Arguments always denoted as a string
// console.log(body[0]); //Indexed for clarity
// //---This will return all elements within the body tag as an Array
//
// const header = document.getElementsByClassName("heading");
// console.log(header[0]); //Also indexed, multiple elements may use the same class
//
// const paragraph = document.getElementById("paragraph1");
// console.log(paragraph); //Not indexed - only one of each ID
// //---ID's are used almost exclusively for the purpose of JavaScript
//
// //-----Newer Methods
// //These target the first instance of your argument
// let div = document.querySelector(".test-class"); //Use class and ID
// let div2 = document.querySelector("#test_id");   //targeting conventions
//
// //This targets all instances of your argument
// let divs = document.querySelectorAll("div");
//
// //EVENT LISTENERS
// div.addEventListener(
//   "mouseover", //Event name
//    ev => { //ES6 method
//     div.style.backgroundColor = "#e40007"; //Inline styling
//    }
//
//   // function(ev) { //ES5 method
//   //   div.style.backgroundColor = "#e40007";
//   // }
// );
