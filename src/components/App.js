import React, { Component } from 'react';
import Timer from './Timer/Timer';
import NoteForm from './NoteForm/NoteForm';
import NoteList from './NoteList/NoteList';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Timer />
        <hr />
        <NoteForm />
        <NoteList />
      </div>
    );
  }
}

export default App;
