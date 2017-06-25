import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';

import {Header} from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
  state = {
    loggedIn: false
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyD7oW3mKg8plezXw3x84d91htiCweAsYYc",
      authDomain: "react-native-auth-b744f.firebaseapp.com",
      databaseURL: "https://react-native-auth-b744f.firebaseio.com",
      projectId: "react-native-auth-b744f",
      storageBucket: "react-native-auth-b744f.appspot.com",
      messagingSenderId: "310523910803"
    });

    firebase.auth().onAuthStateChanged((user) => this.setState({ loggedIn: !!user }));
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <View>
        <Header text={"Auth app"}/>
        {loggedIn ? <LogoutForm /> : <LoginForm/>}
      </View>
    );
  }
}

export default App;