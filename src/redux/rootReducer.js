import { combineReducers } from 'redux';
import timerReducers from './timer/timerReducers';
import notesReducer from './notes/notesReducer';

const rootReducer = combineReducers({
  value: timerReducers,
  notes: notesReducer,
});

export default rootReducer;
