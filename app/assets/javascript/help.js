const { shell } = require('electron');

const instructions = document.querySelector('#instructions');
const report = document.querySelector('#report');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

instructions.addEventListener('click', () => {
    shell.openExternal('https://github.com/daniloflorenzano/sound-key/blob/main/README.md#how-it-works')
})

report.addEventListener('click', () => {
    shell.openExternal('https://github.com/daniloflorenzano/sound-key/issues')
})

about.addEventListener('click', () => {
    shell.openExternal('https://github.com/daniloflorenzano/sound-key/blob/main/README.md')
})

contact.addEventListener('click', () => {
    shell.openExternal('https://www.linkedin.com/in/daniloflorenzano/')
})