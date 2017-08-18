import React, { Component } from 'react';
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { SigninUser }  from '../../actions';
import { browserHistory } from 'react-router';

import Header from '../header';

class Signin extends Component {
  componentWillMount(){
    if(this.props.isLoggedIn){
      browserHistory.push('/dashboard');
    }
  }
  LoginFormHandler({email, password}){
    console.log(this.props);
    this.props.SigninUser({email, password});
  }
  renderAlertMsg(){
    if(this.props.authErrorMsg){
      return (
        <div className="alert alert-danger login-error-elert">
           <strong>Oops! </strong> { this.props.authErrorMsg }
        </div>
      );
    }
  }
  render(){

    const { handleSubmit, pristine, reset, submitting } = this.props
    return(
      <div className="container">
<div className="row">
<div className="col-md-4 col-md-offset-4">

<div className="form-body">
<div className="btn-group btn-group-justified" role="group" aria-label="...">
  <Link to="/signin" className="btn btn-primary">Sign In</Link>
  <Link to="/signup" className="btn btn-danger">Sign Up</Link>
</div>
    <div className="tab-content">
    <div id="sectionA" className="tab-pane fade in active">
      <div className="innter-form">
          <form className="sa-innate-form" onSubmit={handleSubmit(this.LoginFormHandler.bind(this))}>
            <label>Email Address</label>
            <Field className="form-control" name="email" component="input" type="email"/>
            <label>Password</label>
            <Field className="form-control" name="password" component="input" type="password"/>
            {this.renderAlertMsg()}
            <button type="submit" disabled={pristine || submitting}>Sign in</button>
            <br />
             <a href="">Forgot Password?</a>
          </form>
          </div>
          <div className="clearfix"></div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    );
  }
}
function mapStateToProps(state){
  return { authErrorMsg: state.auth.error_msg, isLoggedIn: state.auth.authenticated};
}

export default reduxForm({
  form: 'signin'
})(
  connect( mapStateToProps, { SigninUser })(Signin)
);
