export default (state, action = {}) => {
  if (action.type === 'select_library') {
    return action.payload;
  }

  return null;
};