const iohook = require('iohook');
let recordMacroButton = document.querySelector('#record-macro');
let nameInput = document.querySelector('#name');

let keyPressed = [];

function recordKeyPressed() {
  // clear the object
  keyPressed = [];

  document.addEventListener('keydown', function getKey() {
    let key = event.key;

    if (key != null) {
      document.removeEventListener('keydown', getKey);
      console.log(key);

      recordMacroButton.innerHTML = key;

      keyPressed.push(key);
      console.log('KEY PRESSED = ' + keyPressed);
    }
  });

  iohook.on('keydown', function getKeyCode(event) {
    let keyCode = event.keycode;

    if (keyCode != null) {
      iohook.stop();
      console.log(keyCode);

      keyPressed.push(keyCode);
      console.log('KEY CODE = ' + keyPressed);
    }
  });

  iohook.start();
}

async function validateForm() {
  const databaseContent = await Macros.findAll({
    attributes: ['name', 'key', 'file_path']
  });

  const keybindsString = JSON.stringify(databaseContent);
  const keybindsObj = JSON.parse(keybindsString)
  console.log('Keybindss:', keybindsObj);

  let newMacro = {
    name: nameInput.value,
    key: keyPressed[1],
    keyCode: keyPressed[0],
    file_path: filePath,
  };

  keybindsObj.map((keybind) => {
    if (keybind.name == newMacro.name) {
      console.log(':::: Name already in use ::::');
      return false;
    } else if (keybind.key == newMacro.key) {
      console.log(':::: Key already in use ::::');
      return false;
    } else if (keybind.file_path == newMacro.file_path) {
      console.log(':::: Audio already in use ::::');
      return false;
    } else if (!filePath.endsWith('.mp3') && !filePath.endsWith('.wav')) {
      console.log(':::: Please use a MP3 or WAV file ::::')
      return false;
    } else { createMacro(newMacro) };
  })
}

function createMacro(newMacro) {

  MacrosController.create(newMacro);
  console.log(newMacro);
  console.log('::::: Keybind Created :::::');
}
