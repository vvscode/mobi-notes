import * as types from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  loading: false,
  error: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  if(action.type === types.EMPLOYEE_FIELD_UPDATE) {
   return {
     ...state,
     [action.payload.prop]: action.payload.value
   };
  }

  if(action.type === types.EMPLOYEE_CREATE_START) {
    return {
      ...state,
      loading: true
    }
  }

  if(action.type === types.EMPLOYEE_CREATE_SUCCESS) {
    return {
      ...state,
      loading: false
    }
  }

  if(action.type === types.EMPLOYEE_CREATE_FAIL) {
    return {
      ...state,
      loading: false
    }
  }

  if(action.type === types.EMPLOYEE_FIELD_UPDATE_SUCCESS) {
    return {
      ...state,
      ...INITIAL_STATE,
      loading: false
    }
  }

  if(action.type === types.EMPLOYEE_FIELD_DELETE_SUCCESS) {
    return {
      ...state,
      ...INITIAL_STATE,
      loading: false
    }
  }

  return state;
}