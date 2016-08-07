import { combineReducers } from 'redux';
import { page_data } from './pageReducers';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    pageReducers: page_data,
    form: formReducer
})

export default rootReducer;
