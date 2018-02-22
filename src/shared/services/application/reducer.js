import { handleActions, createActions } from 'redux-actions'


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
},initialState)


export default reducer;