/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

function esParOImpar(numero){
    if(numero % 2 === 0){
        alert("El numero es par")

    }else{
        alert("numero no es par")
    }
}

let numeroUsuario = parseInt(prompt("Ingresa un numero"))

esParOImpar(numeroUsuario)
