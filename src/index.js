const { createWindow } = require("./main");
const { app } = require("electron");

//Se abre la ventana principal---------------------------------------------------------
app.whenReady().then(createWindow);
