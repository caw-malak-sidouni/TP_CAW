//exercice7
//Disallow cheating
var boundaries = document.querySelectorAll(".boundary");
var s_point = document.querySelector("#start");
var e_point = document.querySelector("#end");
var playing = false;

s_point.addEventListener("mouseover", StartGame);
s_point.addEventListener("click", resetGame);
e_point.addEventListener("mouseover", e_point_listener);

function StartGame() {
  s_point.addEventListener("mouseover", checkCheating);
  playing = true;
  document.getElementById("status").innerHTML =
    'Now go to point "E" carefully.';
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", boundriesCheck);
  }
}
function boundriesCheck() {
  if (playing == false) {
    return;
  }
  document.getElementById("status").innerHTML = "YOU LOST!";
  s_point.removeEventListener("mouseover", StartGame);
  playing = false;
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.backgroundColor = "red";
  }
}
function e_point_listener() {
  if (playing == true) {
    s_point.removeEventListener("mouseover", StartGame);
    s_point.removeEventListener("mouseover", checkCheating);
    document.getElementById("status").innerHTML = "YOU WON!";
  }

  playing = false;
}
function resetGame() {
  playing = true;
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.backgroundColor = "#eeeeee";
  }
  document.getElementById("status").innerHTML =
    'Now go to point "E" carefully.';
}
function checkCheating() {
  playing = true;
  document.getElementById("status").innerHTML =
    "You cheated! Now you have to start over!";
  boundriesCheck();
}
