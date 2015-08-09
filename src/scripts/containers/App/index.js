import React, { Component } from 'react';
import { Link } from 'react-router';
import store from '../../lib/redux/store';

import './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        <nav className='navigation'>
          <ul>
            <li><Link to='/demo'>demo</Link></li>
          </ul>
        </nav>
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
