const canvas = document.getElementById('lienzoRects');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "green"; 

for (let x = 0; x < canvas.width; x += 10) {
    
    ctx.fillRect(x, 0, 5, 5);
    
}