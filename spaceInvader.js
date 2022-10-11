"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext ("2d");

blackSquare();
greenSquare();
function blackSquare() {
    context.beginPath();
    context.rect(0,0,300,300);
    context.fillStyle="black";
    context.fill();
    context.stroke();
}

function greenSquare(){
    context.beginPath();
    context.rect(120,0,50,50);
    context.rect(120,50,50,50);
    context.rect(120,100,50,50);
    context.rect(20,100,50,50);
    context.rect(70,100,50,50);
    context.rect(120,70,50,50);
    context.rect(170,100,50,50);
    context.rect(220,100,50,50);
    context.rect(70,150,50,50);
    context.rect(70,200,50,50);
    context.rect(20,200,50,50);
    context.rect(170,150,50,50);
    context.rect(170,200,50,50);
    context.rect(220,200,50,50);
    context.fillStyle="#66ff00";
    context.strokeStyle="#66ff00";
    context.fill();
    context.stroke();

}
