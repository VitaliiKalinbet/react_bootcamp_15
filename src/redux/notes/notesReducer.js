import types from '../types';

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

export default notesReducer;
