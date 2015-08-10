import React, { Component } from 'react';
import store from '../../lib/redux/store';
import { Link } from 'react-router';

import './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <nav>
          <ul>
            <li><Link to='/demo'>demo</Link></li>
            <li><Link to='/'>index</Link></li>
          </ul>
        </nav>
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
    return null;
  }
}
