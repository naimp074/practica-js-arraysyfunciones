/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

Output:
 */
const ciudades = [];

let ciudad = prompt("Ingresá el nombre de una ciudad (o presioná 'Cancelar' para terminar):");

while (ciudad !== null && ciudad.trim() !== "") {
  ciudades.push(ciudad.trim());
  ciudad = prompt("Ingresá otra ciudad (o presioná 'Cancelar' para terminar):");
}

document.writeln("<h3>Ciudades ingresadas:</h3>")
document.writeln("<ul>");
document.writeln(`<li>El arreglo de ciudades tiene ${ciudades.length} elementos</li>`);
document.writeln("</ul>");

     document.writeln("<ul>");
    if (ciudades.length >= 1) {
      document.writeln(`<li>Elemento 1er posición: ${ciudades[0]}</li>`);
    }
    if (ciudades.length >= 3) {
      document.writeln(`<li>Elemento 3er posición: ${ciudades[2]}</li>`);
    }
    if (ciudades.length > 0) {
      document.writeln(`<li>Elemento última posición: ${ciudades[ciudades.length - 1]}</li>`);
    }
    document.writeln("</ul>");

    ciudades.push("París");
    document.writeln(`<ul><li>Elemento última posición: París</li></ul>`);

    if (ciudades.length >= 2) {
      document.writeln(`<p>Elemento en segunda posición: ${ciudades[1]}</p>`);
    }
    if(ciudades.length >=2){
        ciudades[1] = "Barcelona"
    }
    document.writeln("<h2>Arreglo de cuidades</h2>")
    document.writeln("<ul>")
    for (let i = 0; i < ciudades.length; i++) {
        document.writeln(`<li>Elemento: ${ciudades[i]}</li>`);
    }
     document.writeln("</ul>");

