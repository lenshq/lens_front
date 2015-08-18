import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

export default function(middleware, reducer) {
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
