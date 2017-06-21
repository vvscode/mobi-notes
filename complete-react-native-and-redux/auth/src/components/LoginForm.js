import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import firebase from 'firebase';

import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: null
  }

  onAuthSuccess() {
    this.setState({ error: null });
    console.log('onAuthSuccess');
  }

  onAuthError(err) {
    console.log('onAuthError', err);
    this.setState({
      error: 'Something went wrong'
    })
  }

  onButtonPress() {
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.onAuthSuccess())
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .catch((err) => this.onAuthError(err));
  }

  renderErrorMsg() {
    return this.state.error ? (
      <CardSection style={styles.errorWrapperStyles}>
        <Text style={styles.errorStyles}>{this.state.error}</Text>
      </CardSection>
    ) : null;
  }

  render() {
    const {email, password, error} = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            keyboardType="email-address"
            placeholder="some@email.com"
            value={email}
            onChangeText={(email) => this.setState({email})}/>
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            keyboardType="default"
            placeholder="****"
            value={password}
            maxLength={20}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}/>
        </CardSection>

        <CardSection>
          <Button onPress={this
            .onButtonPress
            .bind(this)}>Log in</Button>
        </CardSection>
        {error && this.renderErrorMsg()}

      </Card>
    );
  }
}

const styles = {
  errorStyles: {
    color: 'red',
    fontSize: 18,
    flex: 1,
    textAlign: 'center'
  },
  errorWrapperStyles: {
  }
};

export default LoginForm;