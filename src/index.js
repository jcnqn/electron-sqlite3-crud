const { createWindow } = require("./main");
const { app } = require("electron");
//const { productos } = require("../models");

/* (async () => {
  nuevoProducto = await productos.create({
    nombre: "Rauqeta",
    precio: 3600,
    descripcion: "Linda raqueta",
  });
  console.log(nuevoProducto.id);
})(); */

//Se abre la ventana principal---------------------------------------------------------
app.whenReady().then(createWindow);
