// DAY 2 TAKEHOME
const FIRST = prompt("What's your first name?", "John");
const LAST = prompt("What's your last name?", "Doe");
console.log(FIRST);
alert(LAST);

const BIRTHDAY = new Date(prompt("When's your birthday?"));
confirm(`Is ${BIRTHDAY} correct?`);
alert(`Thanks! I have your birthday as ${BIRTHDAY}.`);
