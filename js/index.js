var fig = document.getElementById("fig");
var fig2 = document.getElementById("fig2");
var btn = document.getElementById("btn");
var btnAgain = document.getElementById("btn-again");

function getAlaa() {
  fig.classList.add("d-block");
  fig.classList.remove("d-none");
  btn.classList.remove("d-block");
  btn.classList.add("d-none");
  btnAgain.classList.add("d-block");
  btnAgain.classList.remove("d-none");
}

function tryAgain() {
  fig.classList.remove("d-block");
  fig.classList.add("d-none");
  fig2.classList.remove("d-none");
  fig2.classList.add("d-block");
  btnAgain.classList.remove("d-block");
  btnAgain.classList.add("d-none");
}
