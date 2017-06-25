import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';

import {CardSection, Button, Spinner} from './common';

class LogoutForm extends Component {
  state = {
    loading: false
  }

  resetLoading() {
    this.setState({loading: false});
  }

  onLogoutButtonPress() {
    this.setState({loading: true});
    firebase
      .auth()
      .signOut()
      .then(() => this.resetLoading())
      .catch(() => this.resetLoading());
  }

  render() {
    return (
      <CardSection>
        <Button onPress={this
          .onLogoutButtonPress
          .bind(this)}>Log out</Button>
          {this.state.loading && <Spinner />}
      </CardSection>
    )
  }
}

export default LogoutForm;