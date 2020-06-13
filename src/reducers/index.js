import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from './usersReducer';
import questionsReducer from "./questionsReducer";

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  auth: authReducer, 
  users: usersReducer,
  form: formReducer, 
  questions: questionsReducer
});
