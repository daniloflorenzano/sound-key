let nameInput = document.querySelector('#name');

function recorder() {
    document.addEventListener('keydown', function getKeyPressed() {
        keyPressed = {
            key: event.key,
            keyCode: event.keyCode
        }

        if (keyPressed.key != null) {
            document.removeEventListener('keydown', getKeyPressed);
            console.log(keyPressed);
        }

    });
}

function createMacro() {
    let newMacro = {
        name: nameInput.value,
        key: keyPressed.key,
        keyCode: keyPressed.keyCode,
        file_path: filePath
    }
    

    MacrosController.create(newMacro)

    console.log(newMacro);

}



