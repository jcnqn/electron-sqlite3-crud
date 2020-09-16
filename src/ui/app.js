const productForm = document.getElementById("productForm");
const { ipcRenderer } = require("electron");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nuevoProducto = {
    nombre: nombre.value,
    precio: precio.value,
    descripcion: descripcion.value,
  };
  
  ipcRenderer.send("agregarProducto", nuevoProducto);
});

ipcRenderer.on("productoAgregado", (event, args) => {
  console.log(args); // prints "pong"
});
