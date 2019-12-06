import React, { Component } from 'react';
import Timer from './Timer/Timer';
import NoteForm from './NoteForm/NoteForm';
import NoteList from './NoteList/NoteListContainer';
import NoteFilter from './NoteFilter/NoteFilter';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Timer />
        <hr />
        <NoteForm />
        <NoteFilter />
        <NoteList />
      </div>
    );
  }
}

export default App;
