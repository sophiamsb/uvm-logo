const mousePosText = document.getElementById('mouse-pos');
let mousePos = {x:undefined, y:undefined};

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY};
    mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
})