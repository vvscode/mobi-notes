import * as types from '../actions/types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action = {}) => {
  if(action.type === types.EMAIL_CHANGED) {
    return {
      ...state,
      email: action.payload
    }
  }
  if(action.type === types.PASSWORD_CHANGED) {
    return {
      ...state,
      password: action.payload
    }
  }
  return state;
};