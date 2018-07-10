// DAY 3 TAKEHOME
let name = prompt("What's your name?", "John");
let favColor = prompt("What's your favorite color? Choose red, orange, yellow, green, blue, pink, purple, black, white, or gray.");

switch(favColor.toLowerCase()) {
  case "red":
    alert(`${name}'s favorite color is red.`);
    break;
  case "orange":
    alert(`${name}'s favorite color is orange.`);
    break;
  case "yellow":
    alert(`${name}'s favorite color is yellow.`);
    break;
  case "green":
    alert(`${name}'s favorite color is green.`);
    break;
  case "blue":
    alert(`${name}'s favorite color is blue.`);
    break;
  case "pink":
    alert(`${name}'s favorite color is pink.`);
    break;
  case "purple":
    alert(`${name}'s favorite color is purple.`);
    break;
  case "black":
    alert(`${name}'s favorite color is black.`);
    break;
  case "white":
    alert(`${name}'s favorite color is white.`);
    break;
  default:
    alert(`Come on, ${name}, stop trying to be original.`);
    break;
}
