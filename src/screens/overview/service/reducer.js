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
    items: {
        lists: [],
        bestsellers_date: null
    },
    numResults: 0,
    selectedDate: null,
    error: null
}





const reducer = handleActions({
    [overviewActions.fetch.request]: state => initialState,
    [overviewActions.fetch.success]: fetchSuccessMutator,
}, initialState);




export default { reducerName, reducer }