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

function createMacro(data) {
  
  MacrosController.create(data);
  console.log(data);
  console.log('::::: Keybind Created :::::');
}
