import { combineReducers } from 'redux';
import { applicationReducer } from './../shared/services/application'


const appReducer = combineReducers({
    application: applicationReducer,
});




export default appReducer;
