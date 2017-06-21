import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import firebase from 'firebase';

import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: null,
    loading: false
  }

  onAuthSuccess() {
    this.setState({error: null});
    console.log('onAuthSuccess');
  }

  onAuthError(err) {
    console.log('onAuthError', err);
    this.setState({error: 'Something went wrong'})
  }

  onButtonPress() {
    this.setState({error: null, loading: true});
    const {email, password} = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password))
      .then(() => this.onAuthSuccess())
      .catch((err) => this.onAuthError(err))
      .then(() => this.setState({loading: false}));
  }

  renderErrorMsg() {
    return this.state.error
      ? (
        <CardSection style={styles.errorWrapperStyles}>
          <Text style={styles.errorStyles}>{this.state.error}</Text>
        </CardSection>
      )
      : null;
  }

  render() {
    const {email, password, error, loading} = this.state;
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
        {loading && <Spinner/>}
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
  errorWrapperStyles: {}
};

export default LoginForm;