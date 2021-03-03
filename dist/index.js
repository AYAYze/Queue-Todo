var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow, Menu = _a.Menu, Tray = _a.Tray;
var path = require('path');
function createWindow() {
    var win = new BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
    });
    win.loadFile('../src/app/static/index.html');
    Menu.setApplicationMenu(null);
    //win.webContents.openDevTools()
}
app.whenReady().then(function () {
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
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
