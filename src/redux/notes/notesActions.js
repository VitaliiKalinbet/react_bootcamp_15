import types from '../types';

// get notes
export const startGetNotesAction = () => ({
  type: types.START_GET_NOTES,
});
export const successGetNotesAction = array => ({
  type: types.SUCCESS_GET_NOTES,
  payload: {
    notes: array,
  },
});
export const errorGetNotesAction = err => ({
  type: types.ERROR_GET_NOTES,
  payload: {
    error: err,
  },
});

// create note
export const startCreateNoteAction = () => ({
  type: types.START_CREATE_NOTE,
});
export const successCreateNoteAction = data => ({
  type: types.SUCCESS_CREATE_NOTE,
  payload: {
    note: data,
  },
});
export const errorCreateNoteAction = err => ({
  type: types.ERROR_CREATE_NOTE,
  payload: {
    error: err,
  },
});

// delete note
export const startDeleteNoteAction = () => ({
  type: types.START_DELETE_NOTE,
});
export const successDeleteNoteAction = deleteId => ({
  type: types.SUCCESS_DELETE_NOTE,
  payload: {
    id: deleteId,
  },
});
export const errorDeleteNoteAction = err => ({
  type: types.ERROR_DELETE_NOTE,
  payload: {
    error: err,
  },
});
