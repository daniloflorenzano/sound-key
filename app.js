const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const os = require('os');

const path = require('path');
const url = require('url');

let win = null;


app.on('ready', () => {

    console.log('Aplicação iniciada');

    win = new BrowserWindow({
        with: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.setMenuBarVisibility(false);

    win.loadURL(`file://${__dirname}/app/view/index.html`);
})

ipcMain.on('open-file-dialog', (e) => {
    const properties = os.platform() === 'linux' || os.platform() === 'win32' ? ['openFile'] : ['openFile', 'openDirectory'];
    dialog.showOpenDialog({ properties }).then((data) => {
        if (data.filePaths.length > 0) { e.sender.send('selected-file', data.filePaths[0]); }
    })
})

let playWindow = null;

ipcMain.on('openPlayWindow', () => {

    if(playWindow == null) {
        playWindow = new BrowserWindow({
            width: 300,
            height: 200,
            alwaysOnTop: true,
            frame: false,
            parent: win,
            modal: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        })

        playWindow.on('closed', () => {
            playWindow = null;
        })
    }

    playWindow.loadURL(`file://${__dirname}/app/view/playWindow.html`)
})

ipcMain.on('closePlayWindow', () => {
    playWindow.close();
})

let helpWindow = null;

ipcMain.on('openHelpWindow', () => {

    if(helpWindow == null) {
        helpWindow = new BrowserWindow({
            width: 250,
            height: 200,
            alwaysOnTop: true,
            parent: win,
            modal: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            }
        })

        helpWindow.on('closed', () => {
            helpWindow = null;
        })
    }

    helpWindow.loadURL(`file://${__dirname}/app/view/helpWindow.html`)
    
    helpWindow.setMenuBarVisibility(false);
})

app.allowRendererProcessReuse = false;