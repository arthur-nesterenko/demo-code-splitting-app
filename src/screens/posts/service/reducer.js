import { createActions, handleActions } from 'redux-actions'

const reducerName = 'posts';

export const { posts: postsActions } = createActions({
    POSTS: {
        FETCH: {
            REQUEST: undefined,
            SUCCESS: undefined,
            FAILURE: undefined
        }
    }
})


const initialState = {
    isFetching: false
}



const reducer = handleActions({
    [postsActions.fetch.request]: state => state,
}, initialState)

export default { reducer, reducerName }