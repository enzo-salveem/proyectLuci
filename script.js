// Arrays para guardar productos según su categoría
let verduras = [];
let lacteos = [];
let bebidas = [];

// Función que se ejecuta cuando el usuario hace clic en "Agregar a la lista"
function agregarProducto() {
  // Tomamos el valor del producto y la categoría seleccionada
  const producto = document.getElementById("compra").value.trim();
  const categoria = document.getElementById("menu").value;

  // Validamos que se haya ingresado algo en ambos campos
  if (!producto || !categoria) {
    alert("Por favor, completá el nombre del producto y seleccioná una categoría.");
    return; // Cortamos la ejecución si falta alguno
  }

  // Según la categoría, guardamos el producto en el array correspondiente
  switch (categoria) {
    case "verduras":
      verduras.push(producto);
      break;
    case "lacteos":
      lacteos.push(producto);
      break;
    case "bebidas":
      bebidas.push(producto);
      break;
  }

  // Limpiamos los campos del formulario para que el usuario pueda seguir agregando
  document.getElementById("compra").value = "";
  document.getElementById("menu").value = "";

  // Actualizamos la tabla para mostrar los productos
  mostrarTabla();
}

// Función que recorre los arrays y muestra los productos en la tabla
function mostrarTabla() {
  const cuerpo = document.getElementById("cuerpoTabla");
  cuerpo.innerHTML = ""; // Limpiamos lo que había antes en la tabla

  // Función auxiliar para generar filas por cada producto de un array
  function agregarFilas(array, nombreCategoria) {
    array.forEach(producto => {
      const fila = document.createElement("tr");

      const tdProducto = document.createElement("td");
      tdProducto.textContent = producto; // Columna con el nombre del producto

      const tdCategoria = document.createElement("td");
      tdCategoria.textContent = nombreCategoria; // Columna con el nombre de la categoría

      fila.appendChild(tdProducto);
      fila.appendChild(tdCategoria);

      cuerpo.appendChild(fila); // Agregamos la fila al cuerpo de la tabla
    });
  }

  // Mostramos cada grupo de productos por separado
  agregarFilas(verduras, "Verduras");
  agregarFilas(lacteos, "Lácteos");
  agregarFilas(bebidas, "Bebidas");

  // (Opcional) Imprimimos en consola los arrays para depurar
  console.log('verduras :', verduras);
  console.log('lacteos :', lacteos);
  console.log('bebidas :', bebidas);
}
