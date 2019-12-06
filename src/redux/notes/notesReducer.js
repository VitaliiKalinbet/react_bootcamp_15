import { combineReducers } from 'redux';
import types from '../types';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case types.ADD_FILTER_VALUE:
      return action.payload.filter;

    default:
      return state;
  }
};

const notesReducer = (state = [], action) => {
  switch (action.type) {
    case types.NOTE_ADD:
      return [...state, action.payload.note];

    case types.NOTE_DELETE:
      return state.filter(el => el.id !== action.payload.id);

    default:
      return state;
  }
};

export default combineReducers({
  filter: filterReducer,
  notesArr: notesReducer,
});
