import { createActions, handleActions } from 'redux-actions'

const reducerName = 'home';


export const { home: homeActions } = createActions({
    HOME: {
        FETCH: {
            REQUEST: undefined,
            SUCCESS: undefined,
            FAILURE: undefined
        }
    }
})


const initialState = {
    isFetching: false,
    items: []
}


export const reducer = handleActions({
    [homeActions.fetch.request]: state => state
}, initialState);


export default { reducer, reducerName }