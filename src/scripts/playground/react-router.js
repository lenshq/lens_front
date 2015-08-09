import React, { Component } from 'react';
import Router, { Route, Link, DefaultRoute } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import {
  routerStateReducer,
  reduxRouteComponent,
  transitionTo
} from 'redux-react-router';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hey! It's me, app!</h1>
        <ul>
          <li><Link to='/hey'>hey</Link></li>
          <li><Link to='/ho'>ho</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class Hey {
  render() {
    return <div>hey!</div>
  }
}

class Ho {
  render() {
    return <div>ho!</div>
  }
}

const routes = (
  <Route path='/' component={App}>
    <Route path='/hey' component={Hey} />
    <Route path='/ho' component={Ho} />
  </Route>
);

React.render((
  <Router history={history}>{routes}</Router>
), document.getElementById('root'));
