/*
mouse position & direction
*/
const mousePosText = document.getElementById("mouse-pos");
const mouseDirText = document.getElementById("mouse-dir");
const mouseMoveText = document.getElementById("mouse-move");
let mousePos = { x: undefined, y: undefined };
var moveX = undefined;
var moveY = undefined;
var timeout;
let direction = { x: undefined, y: undefined };
var xDirection = undefined;
var yDirection = undefined;
var oldX = 0;
var oldY = 0;
window.addEventListener("mousemove", getMouseDirection, false);


/*
viewport size
*/
const viewportSizeText = document.getElementById("viewport-size");
let viewportSize = { width: undefined, height: undefined };
window.addEventListener(
  "resize",
  function (event) {
    viewportSizeText.textContent = `(${window.innerWidth}, ${window.innerHeight})`;
  },
  true
);

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
var blob1Points = blob1.node.getAttribute("d");
var blob2Points = blob2.node.getAttribute("d");
var blob3Points = blob3.node.getAttribute("d");
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

/*
pause animation path on mousestop 
*/
function mouseStopped(){                                
  mouseMoveText.textContent = "mouse stopped";
}

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
  } else {
      yDirection = "up";
  }

  oldX = e.pageX;
  oldY = e.pageY;
  let direction = {x:xDirection, y:yDirection};

  mouseDirText.TextContent = `${direction.x},${direction.y}`;
  console.log(`${direction.x},${direction.y}`);
  clearTimeout(timeout);
  mouseMoveText.textContent = "mouse moving";
  timeout = setTimeout(mouseStopped, 300);
}



