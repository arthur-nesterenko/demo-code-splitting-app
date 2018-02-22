import { createActions, handleActions } from 'redux-actions'



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


const reducer = handleActions({
    [homeActions.fetch.request]: state => state
}, initialState);


export default reducer;