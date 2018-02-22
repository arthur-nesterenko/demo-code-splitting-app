

export class ServiceRegistry {

    static instance = null;

    constructor() {
        if (!instance) {
            instance = this;
        }

        this._emitChange = null;
        this._services = {};

        return instance;
    }

    get services() {
        return { ...this._services };
    }


    register(name, service) {
        console.log('serviceName', name)
    }






}


const serviceRegistry = new ServiceRegistry();
export default serviceRegistry;



