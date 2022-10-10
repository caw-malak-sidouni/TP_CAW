//exwrcice3
//Alerts on successful completion of maze
var boundaries = document.querySelectorAll(".boundary");
var s_point = document.querySelector("#start");
var e_point = document.querySelector("#end");
var playing = false;

s_point.addEventListener("mouseover", StartGame);
e_point.addEventListener("mouseover", e_point_listener);

function StartGame() {
  playing = true;
  document.getElementById("status").innerHTML =
    'Move your mouse over the "S" to begin.';
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", BoundiesCheck);
  }
}
function BoundiesCheck() {
  if (playing == false) {
    return;
  }
  playing = false;
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.backgroundColor = "red";
  }
  alert("YOU LOST!");
}
function e_point_listener() {
  if (playing == true) {
    alert("YOU WIN!");
  }
  playing = false;
}

