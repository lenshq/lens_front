import { createAction } from 'redux-actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/CounterActionTypes';

export const increment = createAction(INCREMENT_COUNTER);
export const decrement = createAction(DECREMENT_COUNTER);
