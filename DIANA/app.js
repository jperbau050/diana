const canvas = document.getElementById('diana');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

function dibujarDiana(x, y, radio, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

dibujarDiana(150, 150, 150, 'black');   
dibujarDiana(150, 150, 115, 'yellow');  
dibujarDiana(150, 150, 80, 'green');    
dibujarDiana(150, 150, 45, 'red');      

canvas.onclick = function(evento) {
    const rect = canvas.getBoundingClientRect();
    const x = evento.clientX - rect.left;
    const y = evento.clientY - rect.top;
    detectarZona(x, y);
};

function detectarZona(x, y) {
    // Hacemos pitagoras pasa sacar la distancia 
    const distanciaCentro = Math.sqrt(Math.pow(x - 150, 2) + Math.pow(y - 150, 2));

    if (distanciaCentro <= 45) {
        alert("¡CENTRO! Zona 1");
    } else if (distanciaCentro <= 80) {
        alert("Zona 2");
    } else if (distanciaCentro <= 115) {
        alert("Zona 3");
    } else if (distanciaCentro <= 150) {
        alert("Zona 4");
    } else {
        alert("Fuera de la diana");
    }
}