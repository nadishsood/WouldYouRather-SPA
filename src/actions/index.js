import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_USERS

} from "./types";

import * as server from "./../database/_DATA";


export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchUsers = () => async dispatch =>{
    const response = await server._getUsers();
    dispatch({ type: FETCH_USERS, payload: response });
}
