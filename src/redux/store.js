/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import timerReducer from './timer/timerReducers';

const store = createStore(
  timerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
