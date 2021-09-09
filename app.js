const { app, BrowserWindow } = require('electron');

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
        }
    });

    win.loadURL(`file://${__dirname}/app/view/index.html`);
})

