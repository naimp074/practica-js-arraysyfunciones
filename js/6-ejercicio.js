function calcularPerimetro(a, b) {
    return 2 * (a + b);
}

let ladoA = parseFloat(prompt("Ingresá el valor del lado A del rectángulo:"));
let ladoB = parseFloat(prompt("Ingresá el valor del lado B del rectángulo:"));

let perimetro = calcularPerimetro(ladoA, ladoB);

document.writeln('lado A = '+ ladoA + "<br>")
document.writeln('lado B = '+ ladoB + "<br>")

document.writeln("El perímetro del rectángulo es: " + perimetro);

