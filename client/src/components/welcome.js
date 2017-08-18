import React, { Component } from 'react';
import { Link as Alink } from 'react-router';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Welcome extends Component{

componentWillMount(){
  if(this.props.isLoggedIn){
     browserHistory.push('/dashboard');
  }
}
render(){
  return (
    <div className="jumbotron welcome-jumbotron">
  <h1 className="display-3">Welcome!</h1>
  <hr className="my-4" />
  <p>To begin please signin.</p>
  <p className="lead">
    <Alink to="signin" className="btn btn-primary btn-lg" href="#" role="button">Sign in</Alink>
  </p>
</div>
  );
}

}

function mapStateToProps(state){
  return {isLoggedIn: state.auth.authenticated };
}

export default connect(mapStateToProps)(Welcome);
