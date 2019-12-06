/* eslint-disable react/prop-types */
import React from 'react';

const NoteList = ({ notes = [], onDeleteNote }) => {
  console.log('NoteList re-render', Date.now());
  return (
    <ul>
      {notes.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button type="button" onClick={() => onDeleteNote(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
