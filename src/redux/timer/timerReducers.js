import types from '../types';

const initialTimerReducer = {
  value: 0,
};

const timerReducer = (state = initialTimerReducer, action) => {
  switch (action.type) {
    case types.INCREMENT_TIMER:
      return { value: state.value + action.payload.value };

    case types.DECREMENT_TIMER:
      return { value: state.value - action.payload.value };

    default:
      return state;
  }
};

export default timerReducer;
