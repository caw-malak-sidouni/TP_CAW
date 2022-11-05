//exercice2
//All boundaries glow red on hover
var boundaries = document.querySelectorAll(".boundary");
var s_point = document.querySelector("#start");
var playing = true;

s_point.addEventListener("mouseover", StartPlaying);
function StartPlaying() {
  document.getElementById("status").innerHTML =
    'Move your mouse over the "S" to begin.';
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", BoundiesCheck);
  }
}
function BoundiesCheck() {
  playing = false;
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].style.backgroundColor = "red";
  }
}


