const mousePosText = document.getElementById('mouse-pos');
let mousePos = {x:undefined, y:undefined};

const svgEl = document.getElementById("el-v");
var svgPath = svgEl.getAttribute('d');
const svgPathText = document.getElementById('v-path');


window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY};
    mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
    svgPathText.textContent = `(${svgPath})`;
})