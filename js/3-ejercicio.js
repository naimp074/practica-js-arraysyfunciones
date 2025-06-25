    // Inicializamos un array para contar apariciones de sumas del 2 al 12
    const apariciones = Array(13).fill(0); // índice 0 y 1 no se usan

    // Repetimos 50 veces el lanzamiento de los dos dados
    for (let i = 0; i < 50; i++) {
      const dado1 = Math.floor(Math.random() * 6) + 1;
      const dado2 = Math.floor(Math.random() * 6) + 1;
      const suma = dado1 + dado2;
      apariciones[suma]++;
    }

    // Mostramos en consola (como ejemplo de salida)
    console.log("Resultado de 50 lanzamientos:");
    for (let suma = 2; suma <= 12; suma++) {
      console.log(`Suma ${suma}: ${apariciones[suma]} apariciones`);
    }

    // Creamos la tabla para mostrar en pantalla
    const tabla = document.createElement("table");
    const thead = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    const th1 = document.createElement("th");
    th1.textContent = "Suma";
    const th2 = document.createElement("th");
    th2.textContent = "Apariciones";
    filaEncabezado.appendChild(th1);
    filaEncabezado.appendChild(th2);
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (let suma = 2; suma <= 12; suma++) {
      const fila = document.createElement("tr");

      const celdaSuma = document.createElement("td");
      celdaSuma.textContent = suma;

      const celdaApariciones = document.createElement("td");
      celdaApariciones.textContent = apariciones[suma];

      fila.appendChild(celdaSuma);
      fila.appendChild(celdaApariciones);

      tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);

    // Agregamos la tabla al body
    document.body.appendChild(tabla);