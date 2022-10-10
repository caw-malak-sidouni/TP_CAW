//exercice1
//Single boundary turns red
var boundaries = document.querySelectorAll(".boundary");
var s_point = document.querySelector("#start");
var playing = true ;

s_point.addEventListener("mouseover", StartGame);
function StartGame() {
  document.getElementById("status").innerHTML =
    "Move your mouse over the \"S\" to begin";
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", BoundiesCheck);
  }
}
function BoundiesCheck() {
  playing = false;
  this.style.background = "red";
}
