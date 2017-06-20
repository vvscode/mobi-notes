import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD7oW3mKg8plezXw3x84d91htiCweAsYYc",
      authDomain: "react-native-auth-b744f.firebaseapp.com",
      databaseURL: "https://react-native-auth-b744f.firebaseio.com",
      projectId: "react-native-auth-b744f",
      storageBucket: "react-native-auth-b744f.appspot.com",
      messagingSenderId: "310523910803"
    });
  }

  render() {
    return (
      <View>
        <Header text={"Auth app"}/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;