const canvas = document.getElementById('diana');
const ctx = canvas.getContext('2d');

// 1. Pintar el fondo de blanco
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 2. Dibujar el borde 
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

function dibujarDiana(x,y,radio,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc( x, y, radio, 0, Math.PI *2);
    ctx.fill();
    ctx.closePath();
}
dibujarDiana(150, 150, 150, 'black');
dibujarDiana(150, 150, 115, 'yellow');   
dibujarDiana(150, 150, 80, 'green');    
dibujarDiana(150, 150, 45, 'red'); 

canvas.onclick = function(evento) {
    // la funcion getBounding la he buscado en internet buscada en internet
    // la cual obtiene la posición del canvas al hacer click
    const rect = canvas.getBoundingClientRect();

    // Restar la posición del canvas a la posición del clic
    //Esto devuelve la posición dentro del canvas
    const x = evento.clientX - rect.left;
    const y = evento.clientY - rect.top;
    console.log(`Clic en: X=${x}, Y=${y}`);

    detectarZona(x, y);
};

function detectarZona(x, y) {
    // Calculamos la distancia desde el centro (150, 150) usando Pitágoras
    const distanciaCentro = Math.sqrt(Math.pow(x - 150, 2) + Math.pow(y - 150, 2));

    if (distanciaCentro < 15) {
        alert("Zona 1");
    } else if (distanciaCentro < 40) {
        alert("Zona 2");
    } else if (distanciaCentro < 70) {
        alert("Zona 3");
    } else if (distanciaCentro < 100) {
        alert("Zona 4");
    } else {
        alert("Fuera de la diana");
    }
}