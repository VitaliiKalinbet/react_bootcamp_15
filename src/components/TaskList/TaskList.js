/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({
  items,
  onDeleteTask,
  onUpdateCompleted,
  onUpdatePriority,
}) => {
  return (
    <ul className={styles.list}>
      {items.map(el => (
        <li key={el.id}>
          <Task
            {...el}
            onDeleteTask={() => onDeleteTask(el.id)}
            onUpdateCompleted={() => onUpdateCompleted(el.id)}
            onUpdatePriority={onUpdatePriority}
          />
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
};

export default TaskList;
