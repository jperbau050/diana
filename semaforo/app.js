const canvas = document.getElementById('semaforo');
const ctx = canvas.getContext('2d');

let estado = 0; 
function dibujarSemaforo() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(50, 50, 100, 300);

    const colorRojo = (estado === 0) ? "red" : "#550000";
    const colorAmarillo = (estado === 1) ? "yellow" : "#555500";
    const colorVerde = (estado === 2) ? "lime" : "#005500";

    dibujarCirculo(100, 100, 35, colorRojo);      
    dibujarCirculo(100, 200, 35, colorAmarillo);  
    dibujarCirculo(100, 300, 35, colorVerde);     
}

function dibujarCirculo(x, y, radio, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}


setInterval(() => {
    estado++;
    if (estado > 2) estado = 0; 
    dibujarSemaforo();
}, 2000); 

dibujarSemaforo();