import React, {Component} from 'react';

import {Card, CardSection, Input, Button} from './common';

export class LoginForm extends Component {
  onEmailChange() {}

  onPasswordChange() {}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@at.com"
            onChangeText={this
            .onEmailChange
            .bind(this)}/>
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            onChangeText={this
            .onPasswordChange
            .bind(this)}/>
        </CardSection>
        <CardSection>
          <Button onPress={this
            .onSubmit
            .bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}