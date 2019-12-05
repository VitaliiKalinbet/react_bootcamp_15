/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { addNoteAction } from '../../redux/notes/notesActions';

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
    this.props.onSave({ text, id: shortid.generate() });
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
  onSave: data => dispatch(addNoteAction(data)),
});

export default connect(null, mapDispatchToProps)(NoteForm);
