import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, SIGN_UPED, UNAUTH_USER } from './types';
import { browserHistory } from 'react-router';
import config from '../config';


export function SigninUser({ email, password }){

  return function(dispatch){
    //submit email, password to the server
    axios.post(`${config.API_URL}/signin`, { email, password })
    .then( response => {
       //if request is good
       //update state to indicate user is authenticated
       dispatch({ type: AUTH_USER });
       //save the jwt token
       localStorage.setItem('JWT_TOKEN', response.data.token);
       //redirect the user to the dashboard
       browserHistory.push('/dashboard');
    })
    .catch(()=> {
       //if request is bab
       //show error to user
       dispatch(throwError(config.SIGNUP_FAIL_MSG));
    });
  }
}

export function SignupUser({ email, password }){

  return function(dispatch){
    //submit email, password to the server
    axios.post(`${config.API_URL}/signup`, { email, password })
    .then( response => {
       //if request is good
       //update state to indicate user is authenticated
       if(response.data.token){
          dispatch({ type: SIGN_UPED });
          //save the jwt token
          localStorage.setItem('JWT_TOKEN', response.data.token);
          //redirect the user to the dashboard
          browserHistory.push('/dashboard');
       }else{
         dispatch(throwError(response.data.error));
       }
    })
    .catch( () => {
       //if request is bab
       //show error to user
         dispatch(throwError(config.LOGIN_FAIL_MSG));
    });
  }
}

export function SignoutUser(){
  localStorage.removeItem('JWT_TOKEN');
  return { type: UNAUTH_USER };
}

export function throwError(error_msg){
  return { type: AUTH_ERROR, payload:error_msg };
}
