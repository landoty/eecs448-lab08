let images_links = {
  1: "eaton.jpg",
  2: "leep.jpg",
  3: "slawson.jpg",
  4: "structural_test.jpg",
  5: "best.jpg"
};

let image_names = {
  1: "Eaton",
  2: "Leep",
  3: "Slawson",
  4: "Structural Testing",
  5: "Best"
};

let current_image = 1;

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

function next()
{
  image_div = document.getElementById("image_div");
  let title = image_div.children[0];
  let source = image_div.children[1];
  if(current_image == 5)
  {
    current_image = 1;
  }
  else {
    current_image++;
  }
  title.innerHTML = image_names[current_image];
  source.src = "./imgs/" + images_links[current_image];
}

function previous()
{
  image_div = document.getElementById("image_div");
  let title = image_div.children[0];
  let source = image_div.children[1];
  if(current_image == 1)
  {
    current_image = 5;
  }
  else {
    current_image--;
  }
  title.innerHTML = image_names[current_image];
  source.src = "./imgs/" + images_links[current_image];
}
