import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as types from './types';

export const employeeFieldUpdate = ({ prop, value }) => ({
  type: types.EMPLOYEE_UPDATE,
  payload: { prop, value },
});

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  dispatch({ type: types.EMPLOYEE_CREATE_START });
  const { currentUser: { uid } } = firebase.auth();
  firebase.database()
    .ref(`/users/${uid}/employees`)
    .push({name, phone, shift })
    .then((employee) => dispatch({
      type: types.EMPLOYEE_CREATE_SUCCESS,
      pyaload: employee
    }))
    .then(() => Actions.employeeList())
    .catch((err) => dispatch({
      type: types.EMPLOYEE_CREATE_FAIL,
      payload: err
    }));
};

export const employeeFetch = () => (dispatch) => {
  dispatch({ type: types.EMPLOYEE_LIST_LOADING_START });
  const { currentUser: { uid } } = firebase.auth();
  const employeesRef = firebase.database().ref(`/users/${uid}/employees`);
  employeesRef.on('value', (snapshot) => dispatch({
    type: types.EMPLOYEE_LIST_LOADING_SUCCESS,
    payload: snapshot.val()
  }));
}
