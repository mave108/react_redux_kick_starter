import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';

import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import requireAuth from './components/auth/require_authentication';
import Welcome from './components/welcome'
import Dashboard from './components/dashboard';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
//if we have a token consider the user to be signed in
const token = localStorage.getItem('JWT_TOKEN');
if(token){
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/signup" component={Signup}></Route>
    <Route path="/signin" component={Signin}></Route>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/signout" component={Signout}></Route>
      <Route path="/dashboard" component={requireAuth(Dashboard)}></Route>
    </Route>
    </Router>

  </Provider>
  , document.querySelector('.container'));
