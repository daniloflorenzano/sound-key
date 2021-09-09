const { ipcRenderer } = require('electron');

const button = document.querySelector('#upload');

button.addEventListener('click', () => {

    ipcRenderer.send('open-file-dialog');
})



ipcRenderer.on('selected-file', function (event, path) {

    console.log('Full path: ', path);
});