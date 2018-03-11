import { createActions, handleActions } from 'redux-actions'
import { fetchSuccessMutator } from './mutators'

export const reducerName = 'home';


export const { home: homeActions } = createActions({
    HOME: {
        RECEIVE: {
            REQUEST: undefined,
            SUCCESS: undefined,
            GOOD: undefined,
            FAILURE: undefined
        }
    }
})


const initialState = {
    isFetching: false,
    error: null,
    items: []
}


export const reducer = handleActions({
    [homeActions.receive.request]: state => ({ ...state, isFetching: false }),
    [homeActions.receive.success]: fetchSuccessMutator
}, initialState);


export default { reducer, reducerName }