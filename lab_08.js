function load_exercise(exercise)
{
  let exercises = {1: "validator",
                   2: "slideshow",
                   3: "profile",
                   4: "css"};
  document.getElementById("image_div").style.display = "none";
  for(let i=1; i<5; i++)
  {
    console.log(exercises[i]);
    if(exercise == i)
    {
      document.getElementById(exercises[i]).style.display = "block";
    }
    else
    {
      document.getElementById(exercises[i]).style.display = "none";
    }
  }
}

function validate_pass() {
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
  return false;
}

function load_slideshow() {
  let slideshow = document.getElementById("slideshow");
  let images = document.getElementById("image_div");
  slideshow.style.display = "none";
  images.style.display = "block";

}
