window.onload=boton;
function boton(){
    document.querySelector("#accion").onclick=operacionraiz;
}
var Raiz = 0;
var A = 1, B = 1, I = 1;
function operacionraiz(){
    Raiz = prompt("Dame el numero de la raiz cuadrada que desea calcular: ");
    
    for(I = 1; I <= Raiz; I++){
        A++;
        B++;

        I = A * B;
    }
        alert("El resultado Estimado de la raiz fue: " + A);  
		A = 1, B = 1, I = 1;
    }



    

