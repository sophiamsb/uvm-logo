const mousePosText = document.getElementById("mouse-pos");
let mousePos = { x: undefined, y: undefined };
var moveX = undefined;
var moveY = undefined;

var svg = document.getElementById('blobs');
var s = Snap(svg);
var blob1 = Snap.select('#blob1');
var blob2 = Snap.select('#blob2');

var blob1Points = blob1.node.getAttribute('d');
var blob2Points = blob2.node.getAttribute('d');
var speed = 1000,
easing = mina.easeinout;


var toBlob1 = function(){
  blob1.animate({ d: blob2Points }, speed, easing);
}
var toBlob2 = function(){
  blob1.animate({ d: blob1Points }, speed, easing);
}

window.addEventListener("mousemove", (event) => {
    moveX = event.clientX ;
    moveY = event.clientY ;
    mousePos = { x: moveX, y: moveY };
    mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
    toBlob1();
  });

