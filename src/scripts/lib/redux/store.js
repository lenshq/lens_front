/* global __DEVELOPMENT__, __CLIENT__, __DEVTOOLS__ */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
import createStore from './createStore';
import * as reducers from '../../reducers';

const rootReducer = combineReducers(reducers);

const store = createStore();

export default store;
