import React, { Component } from 'react';
import TodoEditor from './TodoEditor/TodoEditor';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: [],
  };

  saveTodo = todo => {
    this.setState(state => ({
      todos: [...state.todos, todo],
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <TodoEditor onSave={this.saveTodo} />

        {todos.length > 0 && <TodoList items={todos} />}
      </div>
    );
  }
}

export default App;
