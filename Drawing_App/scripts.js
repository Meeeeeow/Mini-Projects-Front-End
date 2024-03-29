const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const incbtn = document.getElementById('increase');
const decbtn = document.getElementById('decrease');
const sizespan = document.getElementById('size');
const colorPicker = document.getElementById('color');
const clear = document.getElementById("clear");
let size = 25;
let isPressed = false;
let color = 'black';
let x= undefined;
let y = undefined;

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(x , y);
});
canvas.addEventListener('mouseup',()=>{
    isPressed = false;
    x = undefined;
    y = undefined;
});
canvas.addEventListener('mousemove', (e) =>{
    // console.log(e);
    // console.log(e.offsetX);
    if(isPressed)
    {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2,size);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
    
});
function drawCircle(x, y, size){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2 );
    ctx.fillStyle = color;
    ctx.fill();
}


function drawLine(x1 , y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
incbtn.addEventListener('click',()=>{
    size += 5;
    if(size >40)
        size =  40;
    showBrushSize();
});
decbtn.addEventListener('click',()=>{
    size -= 5;
    if(size < 5)
        size = 5;
    showBrushSize();
});
function showBrushSize(){
    sizespan.innerText = size;
}

colorPicker.addEventListener("change",(e) =>{
    color = e.target.value;
    
});
clear.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});