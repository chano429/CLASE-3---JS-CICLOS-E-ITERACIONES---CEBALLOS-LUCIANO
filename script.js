

let total = 0
let deseaContinuar = true
let cant = 0

while(deseaContinuar){
    let numero = parseInt(prompt("Ingrese una número"))
    total += numero // total = total + numero
    let confirmacion = prompt("Desea continuar?, escriba no para salir")
    //cant++
    
    if (confirmacion == "no"){
        deseaContinuar = false;
        console.log(total);
    }
}

let dato;
let acumular = 0;

dato = parseFloat(prompt("Ingrese un número o escriba ESC para salir"));

while(dato !== "ESC"){
    alert ("usuario ingresó " + dato)
    dato = parseFloat(prompt("Ingrese un número o escriba ESC para salir"));
    acumular += dato;
    console.log("El resultado es: " + acumular)
}
