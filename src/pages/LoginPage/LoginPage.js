/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as authOperations from '../../redux/auth/authOperation';
// import withAuthRedirect from '../../hoc/withAuthRedirect';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: 4,
//   },
// };

// class LoginPage extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { onLogin } = this.props;
//     const { email, password } = this.state;
//     onLogin({ email, password });
//     this.setState({ email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <div>
//         <h1>Login page</h1>

//         <form
//           autoComplete="off"
//           onSubmit={this.handleSubmit}
//           style={styles.form}
//         >
//           <label style={styles.label}>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>

//           <label style={styles.label}>
//             Password
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onLogin: data => dispatch(authOperations.loginOperation(data)),
// });

// export default withAuthRedirect(connect(null, mapDispatchToProps)(LoginPage));

// WITH HOOKS
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const handleEmailChange = e => setEmail(e.target.value);

  const [password, setPassword] = useState('');
  const handlePasswordChange = e => setPassword(e.target.value);

  const dispatch = useDispatch();
  const onLogin = data => dispatch(authOperations.loginOperation(data));

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>

      <form autoComplete="off" onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default withAuthRedirect(LoginPage);
