import { createActions, handleActions } from 'redux-actions'
import { fetchSuccessMutator } from './mutators'

export const reducerName = 'books';



export const { books: booksActions } = createActions({
    BOOKS: {
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
    error: null
}

const reducer = handleActions({
    [booksActions.fetch.request]: state => initialState,
    [booksActions.fetch.success]: fetchSuccessMutator
}, initialState)


export default { reducerName, reducer }