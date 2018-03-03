import { handleActions, createActions } from 'redux-actions'
import reducerRegistry from './../../../lib/registry/reducer-registry'

export const { app: appActions } = createActions({
    APP: {
        START: undefined,

    }
})


const initialState = {
    isLoaded: false
}


const reducer = handleActions({
    [appActions.start]: state => ({ ...state, isLoaded: false })
}, initialState)




reducerRegistry.register('application', reducer)

export default reducer;