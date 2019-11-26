/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Priority from '../../utils/Priority';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector';

const options = Object.values(Priority);

const ININTIAL_STATE = {
  text: '',
  priority: Priority.NORMAL,
};

class TaskEditor extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  state = { ...ININTIAL_STATE };

  handleChange = e => {
    // console.dir(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({ ...ININTIAL_STATE });
  };

  render() {
    const { priority, text } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
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

// TaskEditor.propTypes = {
//   onAddTask: PropTypes.func.isRequired,
// };

export default TaskEditor;
