/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as NotesActions from '../../redux/notes/notesActions';
import * as NotesSelectors from '../../redux/notes/notesSelectors';

const NoteFilter = ({ inputValue, onChangeFilter }) => (
  <label>
    Filter notes
    <input
      type="text"
      value={inputValue}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

const mapStateToProps = store => ({
  inputValue: NotesSelectors.getFilterValue(store),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(NotesActions.addFilterValueAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteFilter);
