import * as types from '../actions/types';

const INITIAL_STATE = {
  name: 'VVS Code',
  phone: '777 666 555 4',
  loading: false,
  error: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  if(action.type === types.EMPLOYEE_UPDATE) {
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
      ...INITIAL_STATE,
      loading: false
    }
  }
  return state;
}