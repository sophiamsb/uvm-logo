/*
mouse position & direction
*/
const lastPoint = {x: null, y: null}
const mouseDirText = document.getElementById("mouse-dir");
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
var blob5 = Snap.select("#blob5");
var blob1Points = blob1.node.getAttribute("d");
var blob2Points = blob2.node.getAttribute("d");
var blob3Points = blob3.node.getAttribute("d");
var blob4Points = blob4.node.getAttribute("d");
var blob5Points = blob5.node.getAttribute("d");
// var speed = 250;
var speed= 1000;
easingBounce = mina.bounce;
easingElastic = mina.elastic;

/*
animation path
*/
var toBlob1 = function () {
  blob1.animate({ d: blob2Points }, speed, easingBounce);
};
var toBlob2 = function () {
  blob1.animate({ d: blob5Points }, speed, easingElastic);
};
var toBlob3 = function () {
  blob1.animate({ d: blob3Points }, speed, easingBounce);
};
var toBlob4 = function () {
  blob1.animate({ d: blob4Points }, speed, easingElastic);
};


// a function to recalculate the canvas offsets
function reOffset(){
  svg.getBoundingClientRect();
  offsetX=svg.left;
  offsetY=svg.top;        
}

// listen for window resizing (and scrolling) events
//     and then recalculate the canvas offsets
window.onscroll=function(e){ reOffset(); }
window.onresize=function(e){ reOffset(); }

function getMouseDirection(e) {

  //deal with the horizontal case
  if (e.clientX > lastPoint.x) {
      toBlob1();
      mouseDirText.textContent = "right";
  } else if (e.clientX < lastPoint.x ) {
      toBlob2();
      mouseDirText.textContent = "left";
  }

  //deal with the vertical case
  if ( e.clientY > lastPoint.y){
      toBlob3();
      mouseDirText.textContent = "down";
  } else  if ( e.clientY < lastPoint.y ){
      toBlob4();
      mouseDirText.textContent = "up";
  }

  /* 
    here you can apply the transformations you need to, 
    then update the cursor position tracker for the 
    next iteration
  */

  lastPoint.x = e.clientX
  lastPoint.y = e.clientY

 

}



