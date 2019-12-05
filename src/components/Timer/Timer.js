/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as TimerActions from '../../redux/timer/timerActions';
import styles from './Timer.module.css';

const Timer = ({ timerValue, onIncrement, onDecrement }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onDecrement} type="button">
        &#8722;
      </button>
      <span className={styles.value}>{timerValue}</span>
      <button className={styles.button} onClick={onIncrement} type="button">
        &#43;
      </button>
    </div>
  );
};

const mapStateToProps = store => ({
  timerValue: store.value,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(TimerActions.incrementAction),
  onDecrement: () => dispatch(TimerActions.decrementAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
