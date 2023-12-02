
function cambiaColore(){

    let r = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);

    let colore = "rgb(" + r + "," + g + "," + b + ")";
    
    document.getElementById("p1").style.color = colore;
    document.getElementById("p2").style.color = colore;
    document.getElementById("p3").style.color = colore;
    

}

function grassetto() {  
    
    let paragrafi = document.getElementById("paragrafi").style.fontWeight = "bold";

    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.fontWeight = "bold";
    }
   
}

let acceso = true
    
function scomparsa() {
    if (acceso) {
        document.getElementById("paragrafi").style.display = "none";
        acceso = false;
    } else {
        document.getElementById("paragrafi").style.display = "block";
        ;
}
}

