import {
  startGetNotesAction,
  successGetNotesAction,
  errorGetNotesAction,
  startCreateNoteAction,
  successCreateNoteAction,
  errorCreateNoteAction,
  startDeleteNoteAction,
  successDeleteNoteAction,
  errorDeleteNoteAction,
} from './notesActions';
import * as API from '../../services/api';

export const getNotesOperation = () => dispatch => {
  dispatch(startGetNotesAction());

  API.getNotes()
    .then(res => dispatch(successGetNotesAction(res.data)))
    .catch(err => dispatch(errorGetNotesAction(err)));
};

export const createNoteOperation = data => dispatch => {
  dispatch(startCreateNoteAction());

  API.postNote(data)
    .then(res => dispatch(successCreateNoteAction(res.data)))
    .catch(err => dispatch(errorCreateNoteAction(err)));
};

export const deleteNoteOperation = id => dispatch => {
  dispatch(startDeleteNoteAction());

  API.deleteNote(id)
    .then(() => dispatch(successDeleteNoteAction(id)))
    .catch(err => dispatch(errorDeleteNoteAction(err)));
};
