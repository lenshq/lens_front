/* global __DEVELOPMENT__, __CLIENT__, __DEVTOOLS__ */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerStateReducer } from 'redux-react-router';

import thunkMiddleware from 'redux-thunk'
import { batchedUpdatesMiddleware } from 'redux-batched-updates';
import promiseMiddleware from 'redux-promise';

import * as reducers from '../../reducers';

const middleware = [
  thunkMiddleware,
  promiseMiddleware,
  batchedUpdatesMiddleware
];

const reducer = combineReducers({
  router: routerStateReducer,
  ...reducers
});

function createEnhancedStore() {
  let finalCreateStore;

  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { devTools, persistState } = require('redux-devtools');

    finalCreateStore = compose(
      applyMiddleware(...middleware),
      devTools(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
      createStore
    );
  } else {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  }

  return finalCreateStore(reducer);
}

const store = createEnhancedStore();

export default store;
