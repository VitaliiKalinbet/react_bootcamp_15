import types from '../types';

export const addNoteAction = data => ({
  type: types.NOTE_ADD,
  payload: {
    note: data,
  },
});

export const deleteNoteAction = deleteId => ({
  type: types.NOTE_DELETE,
  payload: {
    id: deleteId,
  },
});

export const addFilterValueAction = inputValue => ({
  type: types.ADD_FILTER_VALUE,
  payload: {
    filter: inputValue,
  },
});
