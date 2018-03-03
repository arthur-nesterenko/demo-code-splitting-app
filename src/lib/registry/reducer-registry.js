import { combineReducers } from 'redux'


export class ReducerRegistry {

    static instance = null;

    constructor() {

        if (ReducerRegistry.instance) {
            return ReducerRegistry.instance;
        }

        this._reducers = {};
        this._emitChange = null;

        ReducerRegistry.instance = this;


    }

    /**
     * 
     */
    getReducers = () => ({ ...this._reducers });

    /**
     * 
     */
    register = (name, reducer) => {

        this._reducers = { ...this._reducers, [name]: reducer }
        if (this._emitChange) {
            this._emitChange(this._reducers)
        }

    }
    /**
     * 
     */
    setChangeListener = (listener) => this._emitChange = listener;




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