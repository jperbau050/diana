const canvas = document.getElementById('semaforo');
const ctx = canvas.getContext('2d');

let estado = 0; // 0: Rojo, 1: Amarillo, 2: Verde

function dibujarSemaforo() {
    // 1. Limpiar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Cuerpo del semáforo (Rectángulo negro)
    ctx.fillStyle = "black";
    ctx.fillRect(50, 50, 100, 300);

    // 3. Definir colores según el estado
    // Si el estado coincide, usamos color brillante, si no, el color oscuro
    const colorRojo = (estado === 0) ? "red" : "#550000";
    const colorAmarillo = (estado === 1) ? "yellow" : "#555500";
    const colorVerde = (estado === 2) ? "lime" : "#005500";

    // 4. Dibujar las luces (Círculos)
    dibujarCirculo(100, 100, 35, colorRojo);      // Arriba
    dibujarCirculo(100, 200, 35, colorAmarillo);  // Centro
    dibujarCirculo(100, 300, 35, colorVerde);     // Abajo
}

function dibujarCirculo(x, y, radio, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

// 5. Lógica de cambio automático
setInterval(() => {
    estado++;
    if (estado > 2) estado = 0; // Reiniciar a rojo
    dibujarSemaforo();
}, 2000); // Cambia cada 2 segundos

// Dibujar por primera vez al cargar
dibujarSemaforo();