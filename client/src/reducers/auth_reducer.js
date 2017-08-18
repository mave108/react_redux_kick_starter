import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SIGN_UPED } from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case AUTH_USER:
        return { ...state, authenticated: true, error_msg: '' };
    case UNAUTH_USER:
        return { ...state, authenticated: false};
    case SIGN_UPED:
        return { ...state, signup_success: true, authenticated: true, error_msg: '' }
    case AUTH_ERROR:
        return { ...state, error_msg: action.payload}

  }
  return state;
}
