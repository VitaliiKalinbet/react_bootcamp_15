import types from '../types';

// const initialTimerReducer = {
//   value: 0,
// };

// const timerReducer = (state = initialTimerReducer, action) => {
//   switch (action.type) {
//     case types.INCREMENT_TIMER:
//       return { value: state.value + action.payload.value };

//     case types.DECREMENT_TIMER:
//       return { value: state.value - action.payload.value };

//     default:
//       return state;
//   }
// };

const timerReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.INCREMENT_TIMER:
      return state + payload.value;

    case types.DECREMENT_TIMER:
      return state - payload.value;

    default:
      return state;
  }
};

export default timerReducer;
