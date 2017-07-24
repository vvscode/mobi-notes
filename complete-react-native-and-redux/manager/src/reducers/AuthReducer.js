import * as types from '../actions/types';
const INITIAL_STATE = {
  email: 'default@mail.com',
  password: 'defaultPass',
  loading: false,
  user: null,
  error: ''
};

export default(state = INITIAL_STATE, action = {}) => {
  console.log('Auth Reducer', state, action);
  if (action.type === types.EMAIL_CHANGED) {
    return {
      ...state,
      error: '',
      email: action.payload
    }
  }
  if (action.type === types.PASSWORD_CHANGED) {
    return {
      ...state,
      error: '',
      password: action.payload
    }
  }
  if (action.type === types.LOGIN_USER_START) {
    return {
      ...state,
      loading: true,
      user: null,
      error: ''
    };
  }
  if (action.type === types.LOGIN_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: '',
      user: action.payload
    };
  }
  if (action.type === types.LOGIN_USER_FAIL) {
    return {
      ...state,
      loading: false,
      user: null,
      error: action.payload
    };
  }
  return state;
};