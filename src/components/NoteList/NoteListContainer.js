/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/notes/notesSelectors';
import NoteList from './NoteList';
import * as NotesOperation from '../../redux/notes/notesOperations';

class NoteListContainer extends Component {
  state = {};

  componentDidMount() {
    const { getNotes } = this.props;
    getNotes();
  }

  render() {
    const { onDeleteNote, notes } = this.props;
    return <NoteList notes={notes} onDeleteNote={onDeleteNote} />;
  }
}

const mapStateToProps = store => ({
  notes: getItems(store),
});

const mapDispatchToProps = dispatch => ({
  getNotes: () => dispatch(NotesOperation.getNotesOperation()),
  onDeleteNote: id => dispatch(NotesOperation.deleteNoteOperation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer);
