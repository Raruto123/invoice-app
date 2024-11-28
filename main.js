//si je veux faire import { app, BrowserWindow } from "electron" je dois mettre type = module dans index.html et à parti de là ça ressemble à React où je peux importer des bouts de code faire export etc.
// import { app, BrowserWindow } from "electron";
const {app, BrowserWindow} = require("electron");
const { ipcMain } = require("electron/main");
const path = require("node:path");

const createWindow = () => { 
    const window = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences : {
            preload : path.join(__dirname, "preload.js"),
        } 
    });

    window.loadFile("index.html"); 

};


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

function realVerification(num) {
    return num
}

app.whenReady().then(() => {
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    });
    ipcMain.handle("verification", () => realVerification("Final Fantasy XV"))
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
    createWindow()

})