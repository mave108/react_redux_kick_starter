import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import tataReducer from './tata_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  tata: tataReducer

});

export default rootReducer;
