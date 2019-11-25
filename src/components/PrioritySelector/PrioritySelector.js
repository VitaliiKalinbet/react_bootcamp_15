import React from 'react';
import PropTypes from 'prop-types';

const PrioritySelector = ({ options, value, onChange }) => (
  <select name="priority" value={value} onChange={onChange}>
    {options.map(item => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

PrioritySelector.defaultProps = {
  onChange: () => {},
};

PrioritySelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default PrioritySelector;
