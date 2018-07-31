//PROTOTYPE INHERITANCE
let sentence = new String("Ann went walking one day.");
let number = new Number(32);
// console.log(Object.getPrototypeOf(number));

let dude = { //Most basic way to create an object
  catchPhrase: "Where's my car?", //KEY : VALUE pair, which makes a PROPERTY
  firstName: "Big",
  lastName: "Lebowski",
  age: Infinity
};
// console.log(Object.getPrototypeOf(dude)); //OBJECT

//CONSTRUCTOR FUNCTIONS
function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}; //4th way to bind THIS

let cody = new User("Cody", "code-man-5000@gmail.com", "123456"); //cody becomes a new object
// console.log(cody);
// console.log(Object.getPrototypeOf(cody));
let andy = new User("Andy", "afillpot@yahoo.com", "Angel123");
andy.isAdmin = true; //adding new property to andy instance of User prototype
cody["isAdmin"] = false; //Bracket notation
// console.log(andy, cody);

//TRY IT OUT: build a new user with data collected from a form in HTML and your User PROTOTYPE
const userForm = document.forms.userForm
userForm.addEventListener("submit", e => {
  e.preventDefault();
  let newUser = new User(userForm.name.value, userForm.email.value, userForm.password.value);
  console.log(newUser);
  userForm.reset();
});
