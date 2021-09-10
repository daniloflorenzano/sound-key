class Macro {

    _name;
    _key;
    _keyCode;
    _filePath;

    constructor(name, key, keyCode, filePath) {

        this._name = name;
        this._key = key;
        this._keyCode = keyCode;
        this._filePath = filePath;
    }

    get name() {
        return this._name;
    }

    get key() {
        return this._key
    }

    get keyCode() {
        return this._keyCode;
    }

    get file() {
        return this._filePath;
    }
}