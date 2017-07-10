import React, {Component} from 'react';
import {connect} from 'react-redux';

import {emailChanged, passwordChanged, loginFormSubmit} from './../actions';
import {Card, CardSection, Input, Button} from './common';

export class LoginForm extends Component {
  onEmailChange(text) {
    this
      .props
      .emailChanged(text);
  }

  onPasswordChange(text) {
    this
      .props
      .passwordChanged(text);
  }

  onSubmit() {
    const {email, password} = this.props;
    this
      .props
      .loginFormSubmit({email, password});
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@at.com"
            value={this.props.email}
            onChangeText={this
            .onEmailChange
            .bind(this)}/>
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
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

export default connect(({ auth: {email, password}}) => ({email, password}), {emailChanged, passwordChanged, loginFormSubmit})(LoginForm);