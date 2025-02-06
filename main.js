const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'build', 'icon.png') // Ruta correcta si está en "build/"

  });

  win.loadURL('http://localhost:600');
}

app.whenReady().then(createWindow);