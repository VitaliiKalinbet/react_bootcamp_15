import React, { Component } from 'react';
import TaskEditor from './TaskEditor/TaskEditor';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      filter: '',
    };
  }

  render() {
    return (
      <div>
        <TaskEditor />
      </div>
    );
  }
}

export default App;
