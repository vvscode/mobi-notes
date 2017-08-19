import firebase from 'firebase';
import * as types from './types';

export const emailChanged = (text) => ({type: types.EMAIL_CHANGED, payload: text});

export const passwordChanged = (text) => ({type: types.PASSWORD_CHANGED, payload: text});

export const loginFormSubmit = ({email, password}) => (dispatch) => {
  dispatch({type: types.LOGIN_USER_START});
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => dispatch({type: types.LOGIN_USER_SUCCESS, payload: user}))
    .catch(({code, message}) => dispatch({type: types.LOGIN_USER_FAIL, payload: message}));
};