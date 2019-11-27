import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    // https://github.com/yannickcr/eslint-plugin-react/issues/7
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    // console.log(e);
    // console.log(e.code);
    // console.log(e.keyCode);

    if (e.keyCode !== 27) {
      return;
    }

    // if (e.code !== 'Escape') {
    //   return;
    // }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className={styles.backdrop}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>
    );
  }
}
