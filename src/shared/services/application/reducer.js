import { handleActions, createActions } from 'redux-actions'
import reducerRegistry from './../../../lib/registry/reducer-registry'
import { appStartMutator } from './mutators'

export const reducerName = 'application';

export const { app: appActions } = createActions({
    APP: {
        START: undefined,

    }
})


const initialState = {
    isLoaded: false
}


const reducer = handleActions({
    [appActions.start]: appStartMutator
}, initialState)


/**
 * 
 */
reducerRegistry.register(reducerName, reducer)

/**
 * 
 */
export default reducer;