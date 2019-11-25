/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Priority from '../../utils/Priority';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

const options = Object.values(Priority);

class TaskEditor extends Component {
  state = {
    text: '',
    priority: Priority.NORMAL,
  };

  handleChange = e => {
    // console.dir(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { priority, text } = this.state;
    return (
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="text"
          placeholder="Enter task content..."
          onChange={this.handleChange}
          value={text}
        />
        <label className={styles.label}>
          Select task priority:
          <PrioritySelector
            options={options}
            value={priority}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TaskEditor;
