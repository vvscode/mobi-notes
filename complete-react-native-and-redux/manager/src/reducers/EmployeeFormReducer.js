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
  return state;
}