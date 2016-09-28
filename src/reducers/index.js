import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import matches from './recipe_reducer';


const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  matches: matches
});

export default rootReducer;
