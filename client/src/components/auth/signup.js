import React, { Component } from 'react';
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { SignupUser }  from '../../actions';

class Signup extends Component {

  submitHandler({ email, password }){
    this.props.SignupUser({email, password});

  }
  renderAlertMsg(){
       if(this.props.authErrorMsg){
       return (
         <div className="alert alert-danger alert-signup login-error-elert">
            <strong>Oops! </strong> { this.props.authErrorMsg }
         </div>
       );
     }else{
       return;
     }
  }
  renderFields(field){
    const { meta: {touched, error} } = field;
    const className = `form-group no-margin ${touched && error ? 'has-danger':''}`;
    const fieldType = field.type ? field.type : 'text';
   return (
      <div className={className}>
       <label>{field.label}</label>
       <input type={fieldType} className="form-control no-margin" {...field.input} />
       <em className="form-error text-help">{touched?error:''}</em>
     </div>
   );
  }
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="container">
<div className="row">
<div className="col-md-4 col-md-offset-4">

<div className="form-body">
    <div className="btn-group btn-group-justified" role="group" aria-label="...">
      <Link to="/signin" className="btn btn-danger">Sign In</Link>
      <Link to="/signup" className="btn btn-primary">Sign Up</Link>
    </div>
    <div className="tab-content">

        <div id="sectionB" className="tab-pane fade in active">
  			<div className="innter-form">
              <form className="sa-innate-form" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
              <Field type="email" label="Email:" name="email" component={this.renderFields}/>
              <Field type="password" label="Password:" name="password" component={this.renderFields}/>
              <Field type="password" label="Confirm Password:" name="confirm_password" component={this.renderFields}/>
              { this.renderAlertMsg() }
              <button type="submit">Sign Up</button>
              </form>
              </div>
          </div>
    </div>
    </div>
    </div>
    </div>
    </div>

    );
  }
}
function validate(values){
const  error = {};
 if(!values.email){
   error.email = "Please enter email";
 }
 if(values.email){
   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
     error.email = "Please enter valid email";
   }
 }
 if(!values.password){
   error.password = "Please enter password";
 }
 if(!values.confirm_password){
   error.confirm_password = "Please confirm password";
 }
 if(values.confirm_password && values.password){
    if(values.password != values.confirm_password){
      error.confirm_password = "password not matched";
    }
 }
  return error;

}
function mapStateToProps(state){
  return { authErrorMsg: state.auth.error_msg, signupSuccess:state.auth.signup_success };
}
export default reduxForm({
  validate,
  form: 'signup'
})(
  connect( mapStateToProps, { SignupUser })(Signup)
);
