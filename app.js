const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const os = require('os');

const path = require('path');
const url = require('url');

let win;


app.on('ready', () => {

    console.log('Aplicação iniciada');

    win = new BrowserWindow({
        with: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            backgroundThrottling: false,
        }
    });

    win.loadURL(`file://${__dirname}/app/view/index.html`);
})

ipcMain.on('open-file-dialog', (e) => {
    const properties = os.platform() === 'linux' || os.platform() === 'win32' ? ['openFile'] : ['openFile', 'openDirectory'];
    dialog.showOpenDialog({ properties }).then((data) => {
        if (data.filePaths.length > 0) { e.sender.send('selected-file', data.filePaths[0]); }
    })
})