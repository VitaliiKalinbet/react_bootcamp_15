/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm/NoteForm';
import NoteList from './NoteList/NoteListContainer';
import * as NotesSelectors from '../redux/notes/notesSelectors';
import Loader from './Loader/Loader';

const App = ({ isLoading }) => {
  return (
    <>
      <NoteForm />
      <NoteList />
      {isLoading && <Loader />}
    </>
  );
};

const mapStateToProps = store => ({
  isLoading: NotesSelectors.getIsLoading(store),
});

export default connect(mapStateToProps)(App);
