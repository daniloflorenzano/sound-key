const { shell } = require('electron');
const linkGithub = document.querySelector('#linkGithub');

linkGithub.addEventListener('click', () => {
    shell.openExternal('https://github.com/daniloflorenzano');
})