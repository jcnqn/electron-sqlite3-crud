const { BrowserWindow } = require("electron");
const { ipcMain } = require("electron");
const { productos } = require("../models");

//Se crea y se genera la ventana principal-------------------------------

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  window.loadFile("src/ui/index.html");
}

//Se exportan las funciones-------------------------------------------------------
module.exports = {
  createWindow,
};

//Se reciben los datos del producto a cargar-------------------------------------
ipcMain.on("agregarProducto", (event, args) => {
    
  (async () => {
    const nuevoProducto = await productos.create({
      nombre: args.nombre,
      precio: args.precio,
      descripcion: args.descripcion,
    });
    event.reply("productoAgregado", nuevoProducto);
  })();
});
