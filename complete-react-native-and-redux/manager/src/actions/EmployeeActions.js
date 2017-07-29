import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import * as types from './types';

const getUserUid = () => firebase
  .auth()
  .currentUser
  .uid;

export const employeeFieldUpdate = ({prop, value}) => ({
  type: types.EMPLOYEE_FIELD_UPDATE,
  payload: {
    prop,
    value
  }
});

export const employeeCreate = ({name, phone, shift}) => (dispatch) => {
  dispatch({type: types.EMPLOYEE_CREATE_START});
  const uid = getUserUid();
  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .push({name, phone, shift})
    .then((employee) => dispatch({type: types.EMPLOYEE_CREATE_SUCCESS, pyaload: employee}))
    .then(() => Actions.employeeList())
    .catch((err) => dispatch({type: types.EMPLOYEE_CREATE_FAIL, payload: err}));
};

export const employeeFetch = () => (dispatch) => {
  dispatch({type: types.EMPLOYEE_LIST_LOADING_START});
  const uid = getUserUid();
  const employeesRef = firebase
    .database()
    .ref(`/users/${uid}/employees`);
  employeesRef.on('value', (snapshot) => dispatch({
    type: types.EMPLOYEE_LIST_LOADING_SUCCESS,
    payload: snapshot.val()
  }));
}

export const employeeUpdate = ({uid, name, phone, shift}) => (dispatch) => firebase
  .database()
  .ref(`/users/${getUserUid()}/employees/${uid}`)
  .update({name, phone, shift})
  .then(() => dispatch({ type: types.EMPLOYEE_FIELD_UPDATE_SUCCESS }))
  .then(() => Actions.employeeList());

export const employeeDelete = (uid) => (dispatch) => firebase
  .database()
  .ref(`/users/${getUserUid()}/employees/${uid}`)
  .remove()
  .then(() => dispatch({ type: types.EMPLOYEE_FIELD_DELETE_SUCCESS }))
  .then(() => Actions.employeeList());;