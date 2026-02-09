const canvas = document.getElementById('lienzoRects');
const ctx = canvas.getContext('2d');

for (let x = 0; x < canvas.width; x += 15) {
    ctx.fillStyle = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;
    ctx.fillRect(x, 0, 5, 5);
    
}

