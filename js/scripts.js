//TAKEHOME DAY 7
let div = document.querySelector(".div");
let button = document.createElement("button");
button.textContent = "Click Me";
div.appendChild(button);

button.addEventListener("click", (e) => {
  let title = prompt("Pick a title.");
  let h1 = document.createElement("h1");
  h1.className = "text-center";
  h1.textContent = title;

  let userDay = prompt("Tell me what you did today.");
  let pTag = document.createElement("p");
  pTag.textContent = userDay;
  pTag.className = "justify";

  let favColor = prompt("What's your favorite color? Choose red, orange, yellow, green, blue, purple, pink, brown, or black.");

  switch(favColor.toLowerCase()) {
    case "red":
      pTag.classList.add("red-bg");
      break;
    case "orange":
      pTag.classList.add("orange-bg");
      break;
    case "yellow":
      pTag.classList.add("yellow-bg");
      break;
    case "green":
      pTag.classList.add("green-bg");
      break;
    case "blue":
      pTag.classList.add("blue-bg");
      break;
    case "purple":
      pTag.classList.add("purple-bg");
      break;
    case "pink":
      pTag.classList.add("pink-bg");
      break;
    case "brown":
      pTag.classList.add("brown-bg", "white-text");
      break;
    case "black":
      pTag.classList.add("black-bg", "white-text");
      break;
    default:
      alert("Error");
      break;
  }
});
