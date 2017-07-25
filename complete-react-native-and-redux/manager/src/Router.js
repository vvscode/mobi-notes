import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreateForm from './components/EmployeeCreateForm';

const RouterComponent = () => (
  <Router sceneStyle={{
    paddingTop: 65
  }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login"/>
    </Scene>
    <Scene key="main">
      <Scene
        key="employeeList"
        component={EmployeeList}
        title="Employee List"
        rightTitle="Add"
        onRight={() => Actions.employeeCreateForm()}/>
      <Scene
        key="employeeCreateForm"
        component={EmployeeCreateForm}
        title="Add Employee"/>
      <Scene
        key="employeeEditForm"
        component={EmployeeCreateForm}
        title="Edit Employee"/>
    </Scene>
  </Router>
)

export default RouterComponent;