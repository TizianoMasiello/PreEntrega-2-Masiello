// Inicio

let respuestaCorrecta = "Cristian Gianoboli"; //Nombre de tutor que se encarga de la correción.
let intentos = 3; // Número de intentos permitidos.

while (intentos > 0) {
  let respuestaUsuario = prompt("¿Cuál es su nombre?");

  // Convertimos ambas respuestas a minúsculas antes de comparar.

  if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    alert("¡Bienvenido! Ya puedes elegir que productos comprar.");
    console.log("Bienvenido Cristian Gianoboli");

    // Colocamos el código que se ejecuta si la respuesta es correcta.

    // Definimos los precios de los productos.

    const precioProducto1 = 100;
    const precioProducto2 = 200;
    const precioProducto3 = 300;

    // Función para calcular el costo total.

    function calcularCostoTotal(
      cantidadProducto1,
      cantidadProducto2,
      cantidadProducto3
    ) {
      let costoTotal = 0;

      // Verificamos la cantidad de producto 1 y aplicamos un descuento si es mayor o igual a 3 unidades.

      if (cantidadProducto1 >= 3) {
        costoTotal += cantidadProducto1 * precioProducto1 * 0.9; // 10% de descuento
      } else {
        costoTotal += cantidadProducto1 * precioProducto1;
      }

      // Calculamos el costo para el producto 2.

      costoTotal += cantidadProducto2 * precioProducto2;

      // Calculamos el costo para el producto 3.

      costoTotal += cantidadProducto3 * precioProducto3;

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

      // Mostramos los resultados en la consola.

      console.log(`Registro de compra ${i}:`);
      console.log("Cantidad de producto 1 (Banana/s): " + cantidadProducto1);
      console.log("Cantidad de producto 2 (Manzana/s ): " + cantidadProducto2);
      console.log("Cantidad de producto 3 (Pera/s): " + cantidadProducto3);
      console.log("Costo total: $" + costoTotal);
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
