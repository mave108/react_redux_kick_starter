import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { addUser }  from '../../actions/user';
import { adUserValidation } from './form_validation';

class CreateUser extends Component{
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
  submitHandler(){

  }
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="col-md-12">
        <form className="sa-innate-form" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
<br />
  <div className="panel panel-default collapse-panel">
    <div className="panel-heading">
      <h3 className="panel-title">Personal Details</h3>
      <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
    </div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-12">
           <Field type="text" label="Name:" name="name" component={this.renderFields}/>
           <Field type="text" label="Email:" name="email" component={this.renderFields}/>
           <Field type="text" label="Password:" name="password" component={this.renderFields}/>
           <Field type="text" label="Confirm Password:" name="confirm_password" component={this.renderFields}/>
           <button type="submit" className="btn btn-success">Submit</button>
        </div>

      </div>
      </div>
  </div>
  </form>
      </div>
    );
  }
}

export default reduxForm({
  validate: adUserValidation,
  form: 'create_user'
})(CreateUser);
