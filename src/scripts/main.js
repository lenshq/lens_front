import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import FastClick from 'fastclick';

import { history } from 'react-router/lib/BrowserHistory';
import { reduxRouteComponent } from 'redux-react-router';

import routes from './routes';
import store from './lib/redux/store';

import '../styles/main.css';

new Promise((resolve) => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => FastClick.attach(document.body))
  .then(() => {
    ReactDOM.render((
      <Router history={history}>
        <Route component={reduxRouteComponent(store)}>{routes}</Route>
      </Router>
    ), document.getElementById('root'));
  });
