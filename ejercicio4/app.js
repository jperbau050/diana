
function cargaContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        var contexto = elemento.getContext("2d");
        if(contexto){
            return contexto;
        }
    }
    return false;
}
var ctx = cargaContextoCanvas("lienzoRects");

var ctx = cargaContextoCanvas("lienzoRects");

if (ctx) {
    let x = 300;
    let y = 300;
    let radio=200;
    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.arc(x, y, radio, -1 * Math.PI, Math.PI * 0.5);
    ctx.arc(x, y, radio/1.5, 0.5 * Math.PI, Math.PI * 1)
    ctx.closePath(); 
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="orange";
    ctx.arc(x,y,radio/3,0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.stroke(); 
}