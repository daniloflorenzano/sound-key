const { ipcRenderer } = require('electron');

const button = document.querySelector('#upload');
const selectedFileDiv = document.querySelector('#selectedFile');

function showSelectedFile(path) {
  const fileHtmlText = `<p> File: ${path} </p>`;
  selectedFileDiv.innerHTML = fileHtmlText;
}

button.addEventListener('click', () => {
  ipcRenderer.send('open-file-dialog');

});

ipcRenderer.on('selected-file', function (event, path) {
  console.log('Full path: ', path);
  filePath = path;

  showSelectedFile(filePath);
});





