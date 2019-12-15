import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TodoList;
