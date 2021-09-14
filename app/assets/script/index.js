let nameInput = document.querySelector('#name');
const iohook = require('iohook');

let keyPressed = [];

function recordKeyPressed() {
    // clean the object
    keyPressed = []; 

    document.addEventListener('keydown', function getKey() {
        

        let key = event.key;

        if (key != null) {
            document.removeEventListener('keydown', getKey);
            console.log(key);

            keyPressed.push(key)
            console.log(keyPressed)

        }

    });

    iohook.on('keydown', function getKeyCode(event) {

        let keyCode = event.keycode;

        if (keyCode != null) {
            iohook.stop();
            console.log(keyCode);
            
            keyPressed.push(keyCode)
            console.log(keyPressed)
        }
    })

    iohook.start()
}

function createMacro() {

    let newMacro = {
        name: nameInput.value,
        key: keyPressed[1],
        keyCode: keyPressed[0],
        file_path: filePath
    }


    MacrosController.create(newMacro)

    console.log(newMacro);
}


