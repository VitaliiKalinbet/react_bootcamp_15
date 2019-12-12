/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperation';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },
};

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  ids = {
    nameid: shortid.generate(),
    emailId: shortid.generate(),
    passwordId: shortid.generate(),
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onRegister } = this.props;
    const { name, email, password } = this.state;
    onRegister({ email, password, nickname: name });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Register page</h1>

        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          style={styles.form}
        >
          <label htmlFor={this.ids.nameid} style={styles.label}>
            Name
            <input
              id={this.ids.nameid}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={this.ids.emailId} style={styles.label}>
            Email
            <input
              id={this.ids.emailId}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={this.ids.passwordId} style={styles.label}>
            Password
            <input
              id={this.ids.passwordId}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.registerOperation(data)),
});

export default withAuthRedirect(
  connect(null, mapDispatchToProps)(RegisterPage),
);
