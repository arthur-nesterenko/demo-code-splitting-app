import Registry from './registry'


const _sagas = Symbol('sagas')
export class SagaRegistry extends Registry {

    constructor() {
        super();
        this[_sagas] = []
    }

    getSagas = () => this[_sagas]

    register = (saga) => {
        this[_sagas] = [...this[_sagas], saga]
        if (this._emitChange) {
            this._emitChange(saga)
        }

    }

}


const sagaRegistry = new SagaRegistry()

export default sagaRegistry;