import React, { Component, PropTypes } from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './lib/redux/store';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props
    return (
      <Provider store={store}>
        {() => <Router history={history}>{routes}</Router>}
      </Provider>
    );
  }
}
