import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connect, Connector, Provider } from 'react-redux';
import Router, { Route, Link, DefaultRoute } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { batchedUpdates } from 'redux-batched-updates';

import Debugger from '../components/Debugger'

import {
  routerStateReducer,
  reduxRouteComponent,
  transitionTo
} from 'redux-react-router';

import { devTools, persistState } from 'redux-devtools';
import devtools, {
  DevTools,
  DebugPanel,
  LogMonitor
} from 'redux-devtools/lib/react';

function reducer(state = {}, action) {
  return {
    router: routerStateReducer(state.router, action)
  };
}

const store = batchedUpdates(devTools()(createStore))(reducer);

@connect(state => state)
class App extends Component {
  render() {
    const { dispatch, router } = this.props;
    return (
      <div>
        <h1>Routing demo</h1>
        <section>
          <h2>links</h2>
          <ul>
            <li><Link to='/hey'>hey</Link></li>
            <li><Link to='/ho'>ho</Link></li>
          </ul>
        </section>
        <section>
          <h2>transitions</h2>
          <ul>
            <li><button onClick={() => dispatch(transitionTo('/hey'))}>go to hey</button></li>
            <li><button onClick={() => dispatch(transitionTo('/ho'))}>go to ho</button></li>
          </ul>
        </section>
        {this.props.children}
        <Debugger store={store} />
      </div>
    );
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

ReactDOM.render((
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route path='/' component={App}>
        <Route path='/hey' component={Hey} />
        <Route path='/ho' component={Ho} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
