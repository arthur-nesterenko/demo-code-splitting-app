import { createActions, handleActions } from 'redux-actions'

export const reducerName = 'reviews';

export const { reviews: reviewsActions } = createActions({
    REVIEWS: {
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
    [reviewsActions.fetch.request]: state => state,
    [reviewsActions.fetch.success]: state => state
}, initialState)

export default { reducer, reducerName }