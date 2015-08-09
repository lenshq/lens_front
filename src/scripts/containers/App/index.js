import React, { Component } from 'react';
import store from '../../lib/redux/store';

import './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        {this.renderDebugger()}
      </div>
    );
  }

  renderDebugger() {
    if (__DEVTOOLS__) {
      return React.createElement(
        require('../../components/Debugger'),
        { store }
      );
    }
    return nil;
  }
}
