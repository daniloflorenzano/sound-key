const { ipcRenderer } = require('electron');
const iohook = require('iohook');


const get = MacrosController.getAll();

const executeMacro = (dbData) => {
    let macros = JSON.parse(dbData);

    console.log('======= MACROS =======');
    console.log(macros);

    iohook.on('keydown', function listenKey(event) {
        let keyCode = event.keycode;
        
        validateKey(macros, keyCode);
    })

    iohook.start();
}

get.then(executeMacro);

function validateKey(database, keyCode) {

    for (let i = 0; i < database.length; i++) {

        console.log('======= MACROS FOR =======');
        console.log(database[i]);

        if (database[i].keyCode == keyCode) {
            playSound(database[i].file_path)
            console.log(keyCode)
        } else {
            console.log('======= Erro =======');
        }
    }
}

function playSound(filePath) {
    let sound = new Audio(filePath);
    sound.play();
}

function closePlayWindow() {
    ipcRenderer.send('closePlayWindow');
    iohook.stop();
}