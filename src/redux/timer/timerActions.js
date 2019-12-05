import types from '../types';

export const incrementAction = {
  type: types.INCREMENT_TIMER,
  payload: {
    value: 10,
  },
};

export const decrementAction = {
  type: types.DECREMENT_TIMER,
  payload: {
    value: 5,
  },
};
