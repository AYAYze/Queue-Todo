const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
  })
  win.loadFile('../src/app/static/index.html')
  Menu.setApplicationMenu(null)


  //win.webContents.openDevTools()
}


app.whenReady().then(()=> {
    createWindow();

    // tray = new Tray()//path.resolve('./src/app/static/a.png')
    // const contextMenu = Menu.buildFromTemplate([
    //   { label: 'Item1', type: 'radio' },
    //   { label: 'Item2', type: 'radio' },
    //   { label: 'Item3', type: 'radio', checked: true },
    //   { label: 'Item4', type: 'radio' }
    // ])
    // tray.setToolTip('This is my application.')
    // tray.setContextMenu(contextMenu)

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
