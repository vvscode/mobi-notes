export default (state = {}, action = {}) => {
  if(action.type === 'email_changed') {
    return {
      ...state,
      email: action.payload
    }
  }
  if(action.type === 'password_changed') {
    return {
      ...state,
      password: action.payload
    }
  }
  return state;
};