import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USERS, 
  FETCH_QUESTIONS, 
  SET_ACTIVE_LIST, 
  CREATE_QUESTION

} from "./types";

import * as server from "./../database/_DATA";


export const signIn = (user, redirectTo) =>{
 return async function(dispatch){
  await dispatch({type: SIGN_IN, payload:{user, redirectTo}});
 }
}


export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchUsers = () => async dispatch =>{
    const response = await server._getUsers();
    dispatch({ type: FETCH_USERS, payload: response });
}

export const fetchQuestions = () => async dispatch => {
  const response = await server._getQuestions();
  dispatch({ type: FETCH_QUESTIONS, payload: response });
};

export const setActiveList = (selected) => {
  return {
    type: SET_ACTIVE_LIST, 
    payload: selected
  };
};



export const createQuestion = (question) => async dispatch => {
  console.log(question);
   const response = await server._saveQuestion(question);
   
  dispatch({ type: CREATE_QUESTION, payload: response });

  
};
