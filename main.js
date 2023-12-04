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


/*
viewport size
*/
const viewportSizeText = document.getElementById("viewport-size");
let viewportSize = { width: undefined, height: undefined };

/*
snap svg plugin
get svg
get svg path
speed + animation parameter
*/
var svg = document.getElementById("blobs");
var s = Snap(svg);
var blob1 = Snap.select("#blob1");
var blob2 = Snap.select("#blob3");
var blob1Points = blob1.node.getAttribute("d");
var blob2Points = blob2.node.getAttribute("d");
var speed = 1000;
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

/*
pause animation path on mousestop 
*/
function mouseStopped(){                                
  mouseMoveText.textContent = "mouse stopped";
  blob1.stop(); 
  blob2.stop(); 
}


/*
animation path on mousemove 
*/
window.addEventListener("mousemove", (event) => {

  moveX = event.clientX;
  moveY = event.clientY;
  mousePos = { x: moveX, y: moveY };
  mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
  clearTimeout(timeout);

  if (moveX >= window.innerWidth / 2) {
    toBlob1();
    mouseDirText.textContent = "right";
  } else if (moveX <= window.innerWidth / 2) {
    toBlob2();
    mouseDirText.textContent = "left";
  }
  mouseMoveText.textContent = "mouse moving";
  timeout = setTimeout(mouseStopped, 300);
});

window.addEventListener(
  "resize",
  function (event) {
    viewportSizeText.textContent = `(${window.innerWidth}, ${window.innerHeight})`;
  },
  true
);

