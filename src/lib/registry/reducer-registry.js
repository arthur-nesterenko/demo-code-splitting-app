import { combineReducers } from 'redux'
import Registry from './registry'


const _reducers = Symbol('reducers')

export class ReducerRegistry extends Registry {
    constructor() {
        super()
        this[_reducers] = {};
    }
    getReducers = () => ({ ...this[_reducers] });
    register = (name, reducer) => {
        this[_reducers] = { ...this[_reducers], [name]: reducer }
        if (this._emitChange) {
            this._emitChange(this[_reducers])
        }
    }
    static combine(reducers, initialState = {}) {
        const reducerNames = Object.keys(reducers);

        Object.keys(initialState).forEach(item => {
            if (reducerNames.indexOf(item) === -1) {
                reducers[item] = (state = null) => state;
            }
        });
        return combineReducers(reducers);
    };

}



const reducerRegistry = new ReducerRegistry();


export default reducerRegistry; 