//exercice4
//Restartable maze
var boundaries = document.querySelectorAll(".boundary");
var s_point = document.querySelector("#start");
var e_point = document.querySelector("#end");
var status = document.querySelector("#status");
var playing = false;

s_point.addEventListener("mouseover", StartGame);
s_point.addEventListener("click", resetGame);
e_point.addEventListener("mouseover", e_point_listener);

function StartGame() {
  playing = true;
  document.getElementById("status").innerHTML = "Move your mouse over the S to begin";
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", boundriesCheck);
  }
}
function boundriesCheck() {
  if (playing == false) {
    return;
  }
  alert("YOU LOST!");
  playing = false;
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.backgroundColor = "red";
  }
  document.getElementById("status").innerHTML = "click to s to restart the game";
}
function e_point_listener() {
  if (playing == true) {
    alert("YOU WIN!");
  }
  
}
function resetGame() {
  playing = true;
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.backgroundColor = "#eeeeee";
  }
  document.getElementById("status").innerHTML = "Move your mouse over the S to begin";
}
