let playButton = document.querySelector('#play-button');
let stopButton = document.querySelector('#stop-button')

playButton.addEventListener('click', () => {
    const get = MacrosController.getAll();
    get.then(executeMacro);
})

const executeMacro = (dbData) => {
    let macros = JSON.parse(dbData);

    console.log(macros);

    document.addEventListener('keydown', function listenKey() {
        let key = event.key;
        console.log('event key: ' + key);

        validateKey(macros, key)

        stopButton.addEventListener('click', () => {
            document.removeEventListener('keydown', listenKey)
            console.log('stop listening');
        })
    })
}

function validateKey(database, key) {

    for (let i = 0; i < database.length; i++) {

        if (database[i].key == key) {
            playSound(database[i].file_path)
            console.log(key)
        } else {
            console.log('erro');
        }
    }
}

function playSound(filePath) {
    let sound = new Audio(filePath);
    sound.play();
}