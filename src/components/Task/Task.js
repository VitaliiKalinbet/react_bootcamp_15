import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import Priority from '../../utils/Priority';

const options = Object.values(Priority);

const Task = ({
  id,
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdatePriority,
  onUpdateCompleted,
}) => {
  return (
    <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
      <p className={styles.text}>{text}</p>

      <hr />

      <div className={styles.actions}>
        <button type="button" onClick={onDeleteTask}>
          Delete
        </button>
      </div>

      <PrioritySelector
        options={options}
        value={priority}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />

      <label htmlFor={id}>
        Completed
        <input
          id={id}
          type="checkbox"
          checked={completed}
          onChange={onUpdateCompleted}
        />
      </label>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default Task;
