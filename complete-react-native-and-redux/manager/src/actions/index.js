import * as types from './types';

export const emailChanged = (text) => ({type: types.EMAIL_CHANGED, payload: text});

export const passwordChanged = (text) => ({type: types.PASSWORD_CHANGED, payload: text});

export const loginFormSubmit = ({email, password}) => ({
  type: types.LOGIN_FORM_SUBMIT,
  payload: {
    email,
    password
  }
});