function validate() {
  let form = document.getElementById("validator_form");
  let password = form.elements[0].value;
  let validator = form.elements[1].value;
  if(password.length < 8 || validator.length < 8)
  {
    alert("The password is less than 8 characters! Bad security!");
  }
  else if(password == validator)
  {
    alert("The passwords match!");
  }
  else {
    alert("The passwords don't match!");
  }
}
