var cars = [];
document.getElementById("MainHeader").innerHTML = "Welcome to Muiz!";
document.getElementById("buttonBegin").innerHTML = "Click to Begin";
document.getElementById("YellowDot").innerHTML = "1";


function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}