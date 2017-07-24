import * as types from '../actions/types';

const INITIAL_STATE = {
  employees: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === types.EMPLOYEE_LIST_LOADING_START) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === types.EMPLOYEE_LIST_LOADING_FAIL) {
    return {
      ...state,
      loading: false
    };
  }
  if (action.type === types.EMPLOYEE_LIST_LOADING_SUCCESS) {
    return {
      ...state,
      employees: action.payload,
      loading: false
    };
  }
  return state;
}