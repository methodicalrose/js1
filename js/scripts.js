//MORE DOM STUFF!!!!
const div = document.querySelector(".myDiv");
const eevee = "https://i.pinimg.com/originals/fb/f3/58/fbf35841d51b50dae9b97bc1e9c7eb88.png";
let image = document.querySelector("img");
// // console.log(div.textContent); //Returns text (only) from ALL children
// // div.textContent = "Say cheese and die!"; //RESETS & OVERRIDES the html and text value
//                                             //inside the element
//
// console.log(div.innerHTML); //Returns text AND html tags from all children
//
// div.innerHTML = "<h1>Hey there, R.L. Stine. Did you die in the 90's?</h1>";
//Adds an entire HTML element to your document, overrides previous values

let newH1 = document.createElement("h1"); //Creates a new element (empty)
newH1.textContent = "I am the greatest... I... I..."; //Gives content to the element
newH1.id = "red_bg"; //Sets an ID explicitly (overrides previous id's)
div.appendChild(newH1); //Attaches the new element(with content) to the parent object
//--Always adds the element to the BOTTOM of the parent object

let newH2 = document.createElement("h2");
newH2.textContent = "I am before the h1!!";
newH2.className = "blue-bg";
newH2.className += " white-text"; //WORK-AROUND for adding additional classes
div.insertBefore(newH2, newH1); //Takes 2 arguments (added child, child it comes before)
//--Allows you to choose where your new element appears

let newP = document.createElement("p");
newP.textContent = "I am a squirrel...";
newP.classList.add("purple-text", "green-bg"); //Allows adding multiple classes
div.appendChild(newP);

let span = document.querySelector("span");
span.addEventListener("mouseenter", (e) => {
  span.classList.remove("white-text"); //Removes the class when you hover over the element
});

span.addEventListener("click", (e) => {
  span.classList.toggle("giant-text"); //Turns the class on/off when clicked
  span.classList.contains("green-bg") ? //If it contains this class...
  span.classList.replace("green-bg", "blue-bg") : //Replaces one class with another
  span.classList.replace("blue-bg", "green-bg"); //Or if false, vice-versa
});

image.addEventListener("click", (e) => {
  image.setAttribute("src", eevee); //2 arguments: attribute to change, what to change it to
})
