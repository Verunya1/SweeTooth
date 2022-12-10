"use strict";

const btn = document.querySelector('.like');
const i = btn.querySelector('.fa-heart');
const body = document.querySelector('#content2');
const drawnHearts = document.querySelector('.drawn-hearts');

btn.addEventListener("click", () => {
if (i.classList.contains('fa-regular')) {
i.classList.remove('fa-regular');
i.classList.add('fa-solid');
body.addEventListener('mousemove', mouseHandler);
} else{
i.classList.remove('fa-solid');
i.classList.add('fa-regular');
body.removeEventListener('mousemove', mouseHandler);
drawnHearts.innerHTML = '';
}
});


var lastDrawTime = Date.now();

var mouseHandler = function(event) {
lastDrawTime = Date.now();
let xPos = event.pageX;
let yPos = event.pageY;
drawHeartOnPos(xPos, yPos);
}

var drawHeartOnPos = function(x,y) {
var heart = document.createElement("i");
heart.className = 'fa-solid fa-heart';
heart.style.position="absolute";
heart.style.top = (y + 3) + "px";
heart.style.left = (x + 3) + "px"
heart.style.transition = "0.2s all ease-in-out";
document.body.appendChild(heart);
setTimeout(function() {
document.body.removeChild(heart);
}, 1000);
}
