// Inicio

let respuestaCorrecta = "Cristian Gianoboli"; //Nombre de tutor que se encarga de la correción.
let intentos = 3; // Número de intentos permitidos.

let historialCompras = []; // Array para almacenar el historial de compras.

while (intentos > 0) {
  let respuestaUsuario = prompt("¿Cuál es su nombre?");

  // Convertimos ambas respuestas a minúsculas antes de comparar.

  if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    alert("¡Bienvenido! Ya puedes elegir que productos comprar.");
    console.log("Bienvenido Cristian Gianoboli");

    // Colocamos el código que se ejecuta si la respuesta es correcta.

    // Definimos al producto como objeto.

    class producto {
      constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
      }
    }

    // Creamos instancias de productos.

    const producto1 = new producto("Bananas", 100);
    const producto2 = new producto("manzanas", 200);
    const producto3 = new producto("peras", 300);

    // Función para calcular el costo total.

    function calcularCostoTotal(
      cantidadProducto1,
      cantidadProducto2,
      cantidadProducto3
    ) {
      let costoTotal = 0;

      // Verificamos la cantidad de producto 1 y aplicamos un descuento si es mayor o igual a 3 unidades.

      if (cantidadProducto1 >= 3) {
        costoTotal += cantidadProducto1 * producto1.precio * 0.9; // 10% de descuento
      } else {
        costoTotal += cantidadProducto1 * producto1.precio;
      }

      // Calculamos el costo para el producto 2.

      costoTotal += cantidadProducto2 * producto2.precio;

      // Calculamos el costo para el producto 3.

      costoTotal += cantidadProducto3 * producto3.precio;

      return costoTotal;
    }

    // Solicitamos al usuario la cantidad de veces que desea realizar la compra.

    let numeroCompras =
      parseInt(prompt("Ingrese la cantidad de compras que desea realizar:")) ||
      0;

    // Bucle para simular múltiples compras.

    for (let i = 1; i <= numeroCompras; i++) {
      // Solicitamos la cantidad de productos al usuario mediante prompt.

      const cantidadProducto1 =
        parseInt(
          prompt(
            `Compra ${i}: Ingrese la cantidad de Bananas que desea comprar:`
          )
        ) || 0;
      const cantidadProducto2 =
        parseInt(
          prompt(
            `Compra ${i}: Ingrese la cantidad de Manzanas que desea comprar:`
          )
        ) || 0;
      const cantidadProducto3 =
        parseInt(
          prompt(`Compra ${i}: Ingrese la cantidad de Peras que desea comprar:`)
        ) || 0;

      // Calculamos el costo total llamando a la función.

      const costoTotal = calcularCostoTotal(
        cantidadProducto1,
        cantidadProducto2,
        cantidadProducto3
      );

      // Mostramos un mensaje de alerta con el resultado.

      alert(
        `Compra ${i}: ¡Gracias por su compra!\nEl costo total es: $${costoTotal}`
      );

      // Agregamos al historial de compras.

      historialCompras.push({
        compra: i,
        cantidadProducto1,
        cantidadProducto2,
        cantidadProducto3,
        costoTotal,
      });
    }

    console.log("Historial de compras:");
    historialCompras.forEach((compra) => {
      console.log(`Compra ${compra.compra}:`);
      console.log(
        "Cantidad de producto 1 (Banana/s): " + compra.cantidadProducto1
      );
      console.log(
        "Cantidad de producto 2 (Manzana/s): " + compra.cantidadProducto2
      );
      console.log(
        "Cantidad de producto 3 (Pera/s): " + compra.cantidadProducto3
      );
      console.log("Costo total: $" + compra.costoTotal);
    });

    // Busqueda por número de compra utilizano find().

    let numeroCompraBuscado =
      parseInt(prompt("Ingrese el número de compra a buscar:")) || 0;
    let compraEncontrada = historialCompras.find(
      (compra) => compra.compra === numeroCompraBuscado
    );

    if (compraEncontrada) {
      console.log(
        `Compra ${compraEncontrada.compra} encontrada. Detalles:`,
        compraEncontrada
      );
      alert(
        `Compra ${compraEncontrada.compra} encontrada. Detalles:\n` +
          `Cantidad de producto 1 (Banana/s): ${compraEncontrada.cantidadProducto1}\n` +
          `Cantidad de producto 2 (Manzana/s): ${compraEncontrada.cantidadProducto2}\n` +
          `Cantidad de producto 3 (Pera/s): ${compraEncontrada.cantidadProducto3}\n` +
          `Costo total: $${compraEncontrada.costoTotal}`
      );
    } else {
      console.log(`Compra ${numeroCompraBuscado} no encontrada.`);
      alert(`Compra ${numeroCompraBuscado} no encontrada.`);
    }

    // Filtrado por costo total utilizando filter().

    let costoFiltrado =
      parseFloat(prompt("Ingrese el costo mínimo para filtrar las compras:")) ||
      0;
    let comprasFiltradas = historialCompras.filter(
      (compra) => compra.costoTotal > costoFiltrado
    );

    if (comprasFiltradas.length > 0) {
      console.log(
        `Compras con costo total mayor a $${costoFiltrado}:`,
        comprasFiltradas
      );
      alert(
        `Compras con costo total mayor a $${costoFiltrado}:\n` +
          comprasFiltradas
            .map(
              (compra) =>
                `Compra ${compra.compra}: Cantidad de productos: ${compra.cantidadProducto1}, ${compra.cantidadProducto2}, ${compra.cantidadProducto3}. Costo total: $${compra.costoTotal}`
            )
            .join("\n")
      );
    } else {
      console.log(`No hay compras con costo total mayor a $${costoFiltrado}.`);
      alert(`No hay compras con costo total mayor a $${costoFiltrado}.`);
    }

    break; // Sale del bucle ya que la respuesta es correcta.
  } else {
    alert("Respuesta incorrecta. Te quedan " + (intentos - 1) + " intentos.");
    intentos--;

    if (intentos === 0) {
      alert("Se han agotados los intentos. No tienes acceso.");
    }
  }
}
