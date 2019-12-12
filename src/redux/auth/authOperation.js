import axios from 'axios';
import * as authActions from './authActions';
import * as API from '../../services/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerOperation = data => dispatch => {
  dispatch(authActions.startRegisterAction());

  API.registerUser(data)
    .then(res => {
      setToken(res.data.user.token);
      dispatch(authActions.successRegisterAction(res.data.user));
    })
    .catch(err => dispatch(authActions.errorRegisterAction(err)));
};

export const loginOperation = data => dispatch => {
  dispatch(authActions.startLoginAction());

  API.loginUser(data)
    .then(res => {
      setToken(res.data.user.token);
      dispatch(authActions.successLoginAction(res.data.user));
    })
    .catch(err => dispatch(authActions.errorLoginAction(err)));
};

export const logoutOperation = () => dispatch => {
  dispatch(authActions.startLogoutAction());

  API.logoutUser()
    .then(res => {
      unsetToken();
      dispatch(authActions.successLogoutAction(res.data.user));
    })
    .catch(err => dispatch(authActions.errorLogoutAction(err)));
};
