import types from '../types';

// register
export const startRegisterAction = () => ({
  type: types.START_REGISTER,
});
export const successRegisterAction = user => ({
  type: types.SUCCESS_REGISTER,
  payload: {
    user,
  },
});
export const errorRegisterAction = err => ({
  type: types.ERROR_REGISTER,
  payload: {
    error: err,
  },
});

// login
export const startLoginAction = () => ({
  type: types.START_LOGIN,
});
export const successLoginAction = user => ({
  type: types.SUCCESS_LOGIN,
  payload: {
    user,
  },
});
export const errorLoginAction = err => ({
  type: types.ERROR_LOGIN,
  payload: {
    error: err,
  },
});

// logout
export const startLogoutAction = () => ({
  type: types.START_LOGOUT,
});
export const successLogoutAction = () => ({
  type: types.SUCCESS_LOGOUT,
});
export const errorLogoutAction = err => ({
  type: types.ERROR_LOGOUT,
  payload: {
    error: err,
  },
});
