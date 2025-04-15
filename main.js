const { app, BrowserWindow } = require('electron');
const { truncate } = require('original-fs');

const createWindow = () => {
  const win = new BrowserWindow({ //this is the function that creates the window, i am assuming it will be filled with index.html s content
    width: 250,
    height: 250,
    transparent: true,
    frame: true,
    alwaysOnTop: true,
    hasShadow: false,
    resizable: true,
    skipTaskbar: true,
  });

  win.loadFile('index.html')
}

app.whenReady().then(() => { //this is like Start() in unity, when the app is readt it will be initiated, when app is ready welp shit wouldnt work yknow
  createWindow()

  app.on('activate', () => { //this one isfor mac, win and lin are different, 
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})