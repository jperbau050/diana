function cargaContextoCarnvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        var contexto = elemento.getContext("2d");
        if(contexto){
            return contexto;
        }
    }
    return false;
}
var ctx = cargaContextoCarnvas("lienzoRects");
if(ctx){
    ctx.beginPath();
    ctx.moveTo(10,10);
    let escalones=10;
    let tamaño= 50;
    let y = 10; 
    let x = 10;
    for(let i=0; i< escalones;i++){
        x+=tamaño;
        ctx.lineTo(x,y);
        y+=tamaño;
        ctx.lineTo(x, y);     
    }
    ctx.lineTo(10, y); 
    ctx.closePath();   

    ctx.strokeStyle = "black";
    ctx.stroke(); 
    
    ctx.fillStyle = "lightgrey";
    ctx.fill();   
}
