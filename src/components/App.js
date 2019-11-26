import React, { Component } from 'react';
import shortid from 'shortid';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';
import TaskFilter from './TaskFilter/TaskFilter';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      filter: '',
    };

    this.changeFilter = this.changeFilter.bind(this);
    // console.log('constructor work');
  }

  componentDidMount() {
    // console.log('componentDidMount work');

    try {
      const tasksFromLS = localStorage.getItem('tasks');
      if (tasksFromLS) {
        this.setState({ tasks: JSON.parse(tasksFromLS) });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate work');
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  changeFilter(e) {
    this.setState({
      filter: e.target.value,
    });
  }

  addTask = task => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      completed: false,
    };

    this.setState(prevState => ({ tasks: [...prevState.tasks, taskToAdd] }));
  };

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el.id !== id),
    }));
  };

  updatePriority = (id, newPriority) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(el =>
        el.id === id ? { ...el, priority: newPriority } : el,
      ),
    }));
  };

  updateCompleted = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(el =>
        el.id === id ? { ...el, completed: !el.completed } : el,
      ),
    }));
  };

  render() {
    // console.log('render work');
    const { tasks, filter } = this.state;
    const filteredTask = tasks.filter(el => el.text.includes(filter));
    return (
      <div>
        <TaskEditor onAddTask={this.addTask} />

        <hr />

        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />

        <TaskList
          onUpdatePriority={this.updatePriority}
          onDeleteTask={this.deleteTask}
          onUpdateCompleted={this.updateCompleted}
          items={filteredTask}
        />
      </div>
    );
  }
}

export default App;
