import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Signin from './auth/signin';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Sidebar />
       { this.props.children }
      </div>
    );
  }
}
