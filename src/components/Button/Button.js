/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, type = 'button', onClick = () => null }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
