/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      toggle: this.toggle,
    });
  }
}

export default Toggle;
