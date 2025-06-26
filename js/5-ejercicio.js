/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

function mostrarInfoCadena(cadena) {
    if (cadena.length === 0) {
        document.writeln("La cadena está vacía.");
    } else {
        document.writeln("Texto original: " + cadena + "<br>");
        document.writeln("Cantidad de caracteres: " + cadena.length + "<br>");
        document.writeln("En mayúsculas: " + cadena.toUpperCase() + "<br>");
        document.writeln("En minúsculas: " + cadena.toLowerCase() + "<br>");
    }
}


let textUsuario = prompt("Ingresá una cadena de texto:");


mostrarInfoCadena(textUsuario);