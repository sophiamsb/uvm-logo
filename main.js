/*
mouse position & direction
*/
var xDirection = undefined;
var yDirection = undefined;
var oldX = 0;
var oldY = 0;
window.addEventListener("mousemove", getMouseDirection, false);

/*
snap svg plugin
get svg
get svg path
speed + animation parameter
*/
var svg = document.getElementById("blobs");
var s = Snap(svg);
var blob1 = Snap.select("#blob1");
var blob2 = Snap.select("#blob2");
var blob3 = Snap.select("#blob3");
var blob4 = Snap.select("#blob4");
var blob1Points = blob1.node.getAttribute("d");
var blob2Points = blob2.node.getAttribute("d");
var blob3Points = blob3.node.getAttribute("d");
var blob4Points = blob4.node.getAttribute("d");
var speed = 500;
easing = mina.linear;

/*
animation path
*/
var toBlob1 = function () {
  blob1.animate({ d: blob2Points }, speed, easing);
};
var toBlob2 = function () {
  blob1.animate({ d: blob1Points }, speed, easing);
};
var toBlob3 = function () {
  blob1.animate({ d: blob3Points }, speed, easing);
};
var toBlob4 = function () {
  blob1.animate({ d: blob4Points }, speed, easing);
};



function getMouseDirection(e) {
  //deal with the horizontal case
  if (oldX < e.pageX) {
      xDirection = "right";
      toBlob1();
  } else {
      xDirection = "left";
      toBlob2();
  }

  //deal with the vertical case
  if (oldY < e.pageY) {
      yDirection = "down";
      toBlob3();
  } else if (oldY > e.pageY) {
      yDirection = "up";
      toBlob4();
  }

  oldX = e.pageX;
  oldY = e.pageY;


}



