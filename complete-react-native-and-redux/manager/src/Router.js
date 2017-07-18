import React from 'react';
import {Scene, Router} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Please Login"/>
    </Scene>
    <Scene key="main" initial={true}>
      <Scene 
        key="employeeList" 
        component={EmployeeList} 
        title="Employee List" 
        rightTitle="Add" 
        onRight={() => alert('add')}
        />
    </Scene>
  </Router>
)

export default RouterComponent;