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

    if (keybindsObj.length == 0) {
        if (
            validateMissingName(newMacro) == true &&
            validateMissingKey(newMacro) == true &&
            validateMissingFile(newMacro) == true &&

            validateFileType() == true
        ) {
            createMacro(newMacro);
            generateTable();
        }
    } else {
        for (let i = 0; i < keybindsObj.length; i++) {
            data = keybindsObj[i];
        }

        if (
            validateDuplicatedName(data, newMacro) == true &&
            validateDuplicatedKey(data, newMacro) == true &&
            validateDuplicatedAudio(data, newMacro) == true &&

            validateMissingName(data, newMacro) == true &&
            validateMissingKey(data, newMacro) == true &&
            validateMissingFile(data, newMacro) == true &&

            validateFileType() == true
        ) {
            createMacro(newMacro);
            generateTable();
        }
    }
}

// in case are duplicaded values

function validateDuplicatedName(data, obj) {
    if (data.name == obj.name) {
        window.alert('Name is already in use');
        console.log(':::: Name is already in use ::::');
        return false;
    } else return true;
}

function validateDuplicatedKey(data, obj) {
    if (data.key == obj.key) {
        window.alert('Key is already in use');
        console.log(':::: Key is already in use ::::');
        return false;
    } else return true;
}

function validateDuplicatedAudio(data, obj) {
    if (data.file_path == obj.file_path) {
        window.alert('Audio is already in use');
        console.log(':::: Audio is already in use ::::');
        return false;
    } else return true;
}

// in case are missing values

function validateMissingName(obj) {
    if (obj.name == null) {
        window.alert('Name is missing');
        console.log(':::: Name is missing ::::');
        return false;
    } else return true;
}

function validateMissingKey(obj) {
    if (obj.key == null) {
        window.alert('Key is missing');
        console.log(':::: Key is already in use ::::');
        return false;
    } else return true;
}

function validateMissingFile(obj) {
    if (obj.file_path == null) {
        window.alert('Audio is missing');
        console.log(':::: Audio is missing ::::');
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