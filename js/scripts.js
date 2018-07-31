//FORMS
// let loginForm = document.forms[0]; ---BAD FORM (pun intended)
let loginForm = document.forms.login; //Use the name you gave your form to target it
let emailInput = loginForm.email;
let passwordInput = loginForm.password;

emailInput.addEventListener("keyup", e => {
  e.target.value; //What is getting typed?
  console.log(e.keyCode); //What key did they hit?
});

loginForm.addEventListener("submit", e => { //Submit event type, only valid on Forms
  e.preventDefault(); //Before you continue the default action, stop and do this other thing
  loginForm.reset(); //Resets the form
});

//THIS .... buckle up
// let favorites = ["pickles"];
function listItems(pet) {
  alert(`${this.name} loves ${this.favorites[0]} and has a ${pet}!`);
};

let user = {
  name: "Andy",
  cart: [],
  coupons: [],
  favorites: ["grilled cheese"],
  listFavorites: listItems //IMPLICITLY BINDS "THIS"
};
//IMPLICIT "THIS" BINDING
// user.listFavorites(); //call site
//Gives 'this' a definition of 'user'. Function now acts like it is in the
//'user' scope instead of global

//EXPLICIT BINDING
let jr = {
  name: "Junior Royce?",
  cart: ["guns"],
  coupons: [1.99],
  favorites: ["Star Wars"],
};

// listItems.call(jr, "dog") //'this' is first defined as 'jr'
//Rule 1 about call: it must be called on a function
//Rule 2 for call: if the function being bound requires arguments, they begin
//as the 2nd argument of call               ^
//                                          ^
//APPLY                                     ^
// listItems.apply(jr, ["cat"]); //Another way to do the same thing
