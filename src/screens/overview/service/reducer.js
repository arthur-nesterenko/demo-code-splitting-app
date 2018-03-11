import { handleActions, createActions } from 'redux-actions'
import { fetchSuccessMutator } from './mutators'

export const reducerName = 'overview'


export const { overview: overviewActions } = createActions({
    OVERVIEW: {
        FETCH: {
            REQUEST: undefined,
            SUCCESS: undefined,
            FAILURE: undefined
        }

    }
})


const initialState = {
    isFetching: false,
    items: [],
    numResults: 0,
    error: null
}


const reducer = handleActions({
    [overviewActions.fetch.request]: state => ({ ...state, isFetching: false }),
    [overviewActions.fetch.success]: fetchSuccessMutator
},initialState);



export default { reducerName, reducer }