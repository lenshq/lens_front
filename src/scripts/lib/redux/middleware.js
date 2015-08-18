import thunkMiddleware from 'redux-thunk'
import { batchedUpdatesMiddleware } from 'redux-batched-updates';
import promiseMiddleware from 'redux-promise';

export default [
  thunkMiddleware,
  promiseMiddleware,
  batchedUpdatesMiddleware
];
