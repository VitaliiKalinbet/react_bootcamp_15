/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as NotesOperation from '../../redux/notes/notesOperations';

class NoteForm extends Component {
  state = {
    text: '',
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { text } = this.state;
    const { createNote } = this.props;
    createNote({ text });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={text} onChange={this.onChange} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNote: data => dispatch(NotesOperation.createNoteOperation(data)),
});

export default connect(null, mapDispatchToProps)(NoteForm);
