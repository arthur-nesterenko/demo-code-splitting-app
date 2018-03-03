import reducerRegistry from './reducer-registry';
import sagaRegistry from './saga-registry'

export class ServiceRegistry {

    static instance = null;

    constructor() {
        if (!ServiceRegistry.instance) {
            ServiceRegistry.instance = this;
        }

        this._emitChange = null;
        this._services = {};

        return ServiceRegistry.instance;
    }

    getServices() {
        return { ...this._services };
    }

    registerReducer(name, reudcer) {
        console.log('reducer')
        reducerRegistry.register(name, reudcer);
    }
    registerSaga(name, service) {
        console.log('saga')
        // sagaRegistry.register(name, service);
    }






}


const serviceRegistry = new ServiceRegistry();
export default serviceRegistry;



