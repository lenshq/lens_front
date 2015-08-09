import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App';
import Demo from '../pages/Demo';

export default (
  <Route name='app' component={App} path='/'>
    <Route path='/demo' component={Demo} />
  </Route>
)
