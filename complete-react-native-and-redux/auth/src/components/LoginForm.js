import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }
  
  render() {
    const { email, password } = this.state;
    return (<Card>
      <CardSection>
        <Input
        label="Email"
        keyboardType="email-address"
        placeholder="some@email.com"
        value={email}
        onChangeText={(email) => this.setState({email})}
        />
      </CardSection>
      <CardSection>
        <Input 
        label="Password"
        keyboardType="default"
        placeholder="****"
        value={password}
        maxLength={20}
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
        />
      </CardSection>
      <CardSection>
        <Button>Log in ({email} / {password})</Button>
      </CardSection>
      
    </Card>);
  }
}

export default LoginForm;