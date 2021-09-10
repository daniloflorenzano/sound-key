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
    let newMacro = new Macro(
        nameInput.value,
        keyPressed.key,
        keyPressed.keyCode,
        filePath
    )

    console.log(newMacro);
}
