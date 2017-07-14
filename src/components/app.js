import React, { Component } from 'react';
import Menu from './menu';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Menu />
        {this.props.children}
      </div>
    );
  }
}
