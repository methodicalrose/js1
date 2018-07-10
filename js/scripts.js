// DAY 3 TAKEHOME
let name = prompt("What's your name?", "John");
let favColor = prompt("What's your favorite color? Choose red, orange, yellow, green, blue, pink, purple, black, white, or gray.");

switch(favColor.toLowerCase()) {
  case "red":
    alert(`${name} is a fiery inferno.`);
    break;
  case "orange":
    alert(`${name} REALLY likes popsicles. And dreams.`);
    break;
  case "yellow":
    alert(`Mellow ${name}'s secret wish is to live in a submarine.`);
    break;
  case "green":
    alert(`Maybe ${name} should take up gardening.`);
    break;
  case "blue":
    alert(`${name} just wants to sit in the rain and enjoy the feeling of water slowly filling their galoshes.`);
    break;
  case "pink":
    alert(`${name}'s favorite activites are writing lip-gloss messages on mirrors and bedazzling the ass of their Victoria's Secret sweatpants.`);
    break;
  case "purple":
    alert(`Nice choice, ${name}. You have a beautiful soul.`);
    break;
  case "black":
    alert(`Just like ${name}'s heart. Or the color of the void. Or both. (Spoiler alert: ${name}'s heart IS the void.)`);
    break;
  case "white":
    alert(`${name} is as pure and clean as freshly fallen snow. Well, aren't you an angel?`);
    break;
  default:
    alert(`Are you serious? Come on, ${name}, stop playin'.`);
    break;
}
