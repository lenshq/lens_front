import React from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';

import HashHistory from 'react-router/lib/HashHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import '../styles/main.css';
import Root from './root';

const history = new BrowserHistory();

new Promise((resolve) => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => FastClick.attach(document.body))
  .then(() => {
    ReactDOM.render(
      <Root history={history} />,
      document.getElementById('root')
    );
  });
