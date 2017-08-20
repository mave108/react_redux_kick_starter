import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, SIGN_UPED, UNAUTH_USER, CURRENT_USER } from './types';
import { browserHistory } from 'react-router';
import config from '../config';

export function addUser(values){

  return function(dispatch){
    
  }
}



export function throwError(error_msg){
  return { type: AUTH_ERROR, payload:error_msg };
}
