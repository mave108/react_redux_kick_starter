import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link as Alink } from 'react-router';

class Signout extends Component {

  componentWillMount(){
    this.props.SignoutUser();
  }
  render(){
    return(
      <div>
      <div className="jumbotron welcome-jumbotron">
      <h1 className="display-3">Signout!</h1>
      <hr className="my-4" />
      <p>Signout successfully. To begin again please signin.</p>
      <p className="lead">
        <Alink to="signin" className="btn btn-primary btn-lg" href="#" role="button">Sign in</Alink>
      </p>
    </div>
      </div>
    );
  }
}

export default connect(null, actions )(Signout);
