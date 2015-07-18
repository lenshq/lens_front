import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

export default (
  <Route name='app' handler={require('../layouts/app')} path='/'>
    <DefaultRoute name='index' handler={require('../pages/Index')} />
    <NotFoundRoute handler={require('../pages/NotFound')} name='not-found' />
  </Route>
);

