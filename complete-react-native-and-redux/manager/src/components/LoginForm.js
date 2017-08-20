import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';

import {emailChanged, passwordChanged, loginFormSubmit} from './../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

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

  renderButton() {
    if (this.props.loading) {
      return (<Spinner/>);
    }
    return (
      <Button onPress={this
        .onSubmit
        .bind(this)}>
        Login
      </Button>
    );
  }

  renderError() {
    if (!this.props.error) {
      return null;
    }
    return (
      <CardSection>
        <Text>{this.props.error}</Text>
      </CardSection>
    );
  }
  render() {
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
            secureTextEntry={true}
            label="Password"
            placeholder="password"
            onChangeText={this
            .onPasswordChange
            .bind(this)}/>
        </CardSection>
        <CardSection>{this.renderButton()}</CardSection>
        {this.renderError()}
      </Card>
    );
  }
}
export default connect(({
  auth: {
    email,
    password,
    loading,
    error
  }
}) => ({email, password, loading, error}), {emailChanged, passwordChanged, loginFormSubmit})(LoginForm);