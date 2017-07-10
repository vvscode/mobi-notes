import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View, Text} from 'react-native';

import reducers from './reducers';
import {initFirebase} from './config/firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    initFirebase();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;