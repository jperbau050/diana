const canvas = document.getElementById('lienzoRects');
const ctx = canvas.getContext('2d');

for (let x = 0; x < canvas.width; x += 15) {
    let colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
    ctx.fillStyle = "#" + colorAleatorio;
    ctx.fillRect(x, 0, 5, 5);
    
}

