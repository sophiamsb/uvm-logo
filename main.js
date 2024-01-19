/*
mouse position & direction
*/
const lastPoint = { x: null, y: null };
var isOnSvg = false;
const mouseDirText = document.getElementById("mouse-dir");
let oldValue = 0;
let newValue = 0;


if (window.matchMedia("(min-width: 400px)").matches) {
  /* the viewport is at least 400 pixels wide */
  window.addEventListener("mousemove", getMouseDirection, false);
  document.getElementById("v").addEventListener("mouseover", function () {
    isOnSvg = true;
  });
  document.getElementById("v").addEventListener("mouseout", function () {
    isOnSvg = false;
  });
  window.addEventListener("scroll", animOnScroll, false);
} 

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
var blob5 = Snap.select("#blob5");
var blob1Points = blob1.node.getAttribute("d");
var blob2Points = blob2.node.getAttribute("d");
var blob3Points = blob3.node.getAttribute("d");
var blob4Points = blob4.node.getAttribute("d");
var blob5Points = blob5.node.getAttribute("d");
var speed = 1000;
easingBounce = mina.bounce;
easing = mina.backout;

/*
animation path
*/
var toBlobInitial = function () {
  blob1.animate({ d: blob1Points }, speed, easing);
};
var toBlob1 = function () {
  blob1.animate({ d: blob2Points }, speed, easing);
};
var toBlob2 = function () {
  blob1.animate({ d: blob5Points }, speed, easing);
};
var toBlob3 = function () {
  blob1.animate({ d: blob3Points }, speed, easing);
};
var toBlob4 = function () {
  blob1.animate({ d: blob4Points }, speed, easing);
};

function getMouseDirection(e) {
  const rect = document.getElementById("v").getBoundingClientRect();
  if (isOnSvg === false) {
    //deal with the horizontal case
    if ((e.clientX - rect.left) > lastPoint.x) {
      toBlob1();
      mouseDirText.textContent = "right";
    } else if ((e.clientX - rect.left) < lastPoint.x) {
      toBlob2();
      mouseDirText.textContent = "left";
    }

    //deal with the vertical case
    if ((e.clientY - rect.top) > lastPoint.y) {
      toBlob3();
      mouseDirText.textContent = "down";
    } else if ((e.clientY - rect.top) < lastPoint.y) {
      toBlob4();
      mouseDirText.textContent = "up";
    }
  } else {
    toBlobInitial();
    mouseDirText.textContent = "mouse over";
  }

  lastPoint.x = e.clientX - rect.left;
  lastPoint.y = e.clientY - rect.top;
}

/*
animation on scroll
*/
function animOnScroll() {
  newValue = window.scrollY;
  if (oldValue < newValue) {
    callRandomFunction();
  } else if (oldValue > newValue) {
    callRandomFunction();
  }
  oldValue = newValue;
}

/*
loop animation
*/
function callRandomFunction() {
  var random = Math.floor(Math.random()*4);
  console.log(random)
  switch(random){
  case 0:
     toBlob1();
      break;
  case 1:
    toBlob2();
    break;
  case 2:
    toBlob3();
    break;
  case 3:
    toBlob4();
    break;   
  }
}

