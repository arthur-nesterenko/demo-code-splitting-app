

class Registry {

    constructor() {
        this._emitChange = null;
    }

    setChangeListener = listener => this._emitChange = listener;

}

export default Registry