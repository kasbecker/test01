import {combineReducers}from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import pendReducer from './dataPend';

export default combineReducers({
    form:formReducer,
    auth: authReducer,
    pend: pendReducer
});