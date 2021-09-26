const helpButton = document.querySelector('#help');

helpButton.addEventListener('click', () => {
    ipcRenderer.send('openHelpWindow')
})