// let loginForm = document.forms[0]; ---BAD FORM (pun intended)
let loginForm = document.forms.login; //Use the name you gave your form to target it
let emailInput = loginForm.email;
let passwordInput = loginForm.password;
