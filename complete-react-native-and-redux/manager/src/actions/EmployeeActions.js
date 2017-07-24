import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import * as types from './types';

export const employeeUpdate = ({ prop, value }) => ({
  type: types.EMPLOYEE_UPDATE,
  payload: { prop, value },
});

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  dispatch({ type: types.EMPLOYEE_CREATE_START });
  const { currentUser: { uid } } = firebase.auth();
  debugger;
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
