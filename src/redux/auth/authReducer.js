import { combineReducers } from 'redux';
import types from '../types';

const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return payload.user.userData;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
      return null;

    default:
      return state;
  }
};

const tokenReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return payload.user.token;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
      return '';

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_LOGOUT:
      return null;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
      return payload.error;

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.START_REGISTER:
    case types.START_LOGIN:
    case types.START_LOGOUT:
      return true;

    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_LOGOUT:
      return false;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
      return false;

    default:
      return state;
  }
};

const isAuthReducer = (state = false, { type }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return true;

    case types.SUCCESS_LOGOUT:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
  isLoading: loadingReducer,
  isAuth: isAuthReducer,
});
