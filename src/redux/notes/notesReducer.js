import { combineReducers } from 'redux';
import types from '../types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.SUCCESS_CREATE_NOTE:
      return [...state, payload.note];

    case types.SUCCESS_GET_NOTES:
      return [...payload.notes];

    case types.ERROR_GET_NOTES:
      return [];

    case types.SUCCESS_DELETE_NOTE:
      return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};

const isLoadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.START_CREATE_NOTE:
    case types.START_GET_NOTES:
    case types.START_DELETE_NOTE:
      return true;

    case types.SUCCESS_CREATE_NOTE:
    case types.ERROR_CREATE_NOTE:
    case types.SUCCESS_GET_NOTES:
    case types.ERROR_GET_NOTES:
    case types.SUCCESS_DELETE_NOTE:
    case types.ERROR_DELETE_NOTE:
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case types.ERROR_CREATE_NOTE:
    case types.ERROR_GET_NOTES:
    case types.ERROR_DELETE_NOTE:
      return payload.error;

    case types.SUCCESS_CREATE_NOTE:
    case types.SUCCESS_GET_NOTES:
    case types.SUCCESS_DELETE_NOTE:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
