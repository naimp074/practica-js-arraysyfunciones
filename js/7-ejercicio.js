
function mostrarTablaMultiplicar(numero) {
    document.writeln(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        document.writeln(`${numero} x ${i} = ${numero * i}<br>`);
    }
}


let numero = parseInt(prompt("Ingrese un número del 1 al 10 para ver su tabla de multiplicar:"));


if (!isNaN(numero)) {
    mostrarTablaMultiplicar(numero);
} else {
    document.writeln("Por favor, ingrese un número válido.");
}