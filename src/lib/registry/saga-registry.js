

export class SagaRegistry {


    static run = null;


    constructor(runSaga) {


        this._sagas = {}
        this._emitChange = null;
        this._run = runSaga;

    }



    getSagas() {
        return this._sagas
    }


    register = (saga) => {

        this._sagas = [...this._sagas, saga]
        if (this._emitChange) {
            this._emitChange(this._sagas)
        }

    }


    setChangeListener = (listener) => this._emitChange = listener;



}


const sagaRegistry = new SagaRegistry()

export default sagaRegistry;