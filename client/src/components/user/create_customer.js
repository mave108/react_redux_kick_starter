import React, { Component } from 'react';
import { Link } from 'react-router'
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import  { SignupUser }  from '../../actions';
import { adUserValidation } from './form_validation';

class Createcutomer extends Component{
  submitHandler(values){

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
      <div>
        <form className="sa-innate-form" onSubmit={handleSubmit(this.submitHandler.bind(this))}>
<br />
  <div className="panel panel-default collapse-panel">
    <div className="panel-heading">
      <h3 className="panel-title">Personal Details</h3>
      <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
    </div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-6">
           <Field type="text" label="First Name:" name="first_name" component={this.renderFields}/>
        </div>
        <div className="col-md-6">
          <Field type="text" label="Last Name:" name="last_name" component={this.renderFields}/>
        </div>
      </div>
      </div>
  </div>

  <div className="panel panel-default collapse-panel">
    <div className="panel-heading">
      <h3 className="panel-title">Contact Details</h3>
      <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
    </div>
    <div className="panel-body">
    kjhkjhjkhkjkhjkhjkhkjh
    </div>
  </div>

  <div className="panel panel-default collapse-panel">
    <div className="panel-heading">
      <h3 className="panel-title">Address Details</h3>
      <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
    </div>
    <div className="panel-body">
    kjhkjhjkhkjkhjkhjkhkjh
    </div>
  </div>

  <div className="panel panel-default collapse-panel">
    <div className="panel-heading">
      <h3 className="panel-title">Primary Issue</h3>
      <span className="pull-right clickable"><i className="glyphicon glyphicon-chevron-up"></i></span>
    </div>
    <div className="panel-body">
    kjhkjhjkhkjkhjkhjkhkjh
    </div>
  </div>
  </form>
      </div>
    );
  }
}

export default reduxForm({
  validate: createCustomerValidation,
  form: 'create_cutomer'
})(Createcutomer);
