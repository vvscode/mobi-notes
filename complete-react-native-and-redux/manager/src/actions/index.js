import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as types from './types';

export const emailChanged = (text) => ({type: types.EMAIL_CHANGED, payload: text});

export const passwordChanged = (text) => ({type: types.PASSWORD_CHANGED, payload: text});

export const loginFormSubmit = ({email, password}) => (dispatch) => {
  dispatch({type: types.LOGIN_USER_START});
  let firebaseAuth = firebase.auth();
  Promise
    .resolve()
    .then(() => firebaseAuth.signInWithEmailAndPassword(email, password))
    .catch(() => firebaseAuth.createUserWithEmailAndPassword(email, password))
    .then((user) => dispatch({type: types.LOGIN_USER_SUCCESS, payload: user}))
    .then(() => Actions.main())
    .catch(({message}) => dispatch({type: types.LOGIN_USER_FAIL, payload: message}));
};

export * from './EmployeeActions';