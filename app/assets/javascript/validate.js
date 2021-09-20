const validateForm = async () => {
    const databaseContent = await Macros.findAll({
        attributes: ['name', 'key', 'file_path']
    });

    const keybindsString = JSON.stringify(databaseContent);
    const keybindsObj = JSON.parse(keybindsString)
    console.log('Keybinds:', keybindsObj);

    let newMacro = {
        name: nameInput.value,
        key: [...keyPressed].pop(),
        keyCode: keyPressed[0],
        file_path: filePath,
    };

    for (let i = 0; i < keybindsObj.length; i++) {
        data = keybindsObj[i];
    }

   if (
        validateName(data, newMacro) == true &&
        validateKey(data, newMacro) == true &&
        validateAudio(data, newMacro) == true &&
        validateFileType() == true
    ) {
        createMacro(newMacro);
        generateTable();
    }
}

function validateName(data, obj) {
    if (data.name == obj.name || obj.name == null) {
        window.alert('Name is missing or is already in use');
        console.log(':::: Name is missing or is already in use ::::');
        return false;
    } else return true;
}

function validateKey(data, obj) {
    if (data.key == obj.key || obj.key == null) {
        window.alert('Key is missing or is already in use');
        console.log(':::: Key is missing or is already in use ::::');
        return false;
    } else return true;
}

function validateAudio(data, obj) {
    if (data.file_path == obj.file_path || obj.file_path == null) {
        window.alert('Audio is missing or is already in use');
        console.log(':::: Audio is missing or is already in use ::::');
        return false;
    } else return true;
}

function validateFileType() {
    if (!filePath.endsWith('.mp3') && !filePath.endsWith('.wav')) {
        window.alert('Please use a MP3 or WAV file');
        console.log(':::: Please use a MP3 or WAV file ::::')
        return;
    } else return true;
}

