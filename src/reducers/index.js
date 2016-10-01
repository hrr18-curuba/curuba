import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import matches from './recipe_reducer';
import ChefsReducer from './chefs_reducer';
import ActiveChef from './active_chef_reducer';


const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  matches: matches,
  chefs: ChefsReducer,
  activeChef: ActiveChef
});

export default rootReducer;
