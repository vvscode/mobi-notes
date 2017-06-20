import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }
  
  render() {
    const { email, password } = this.state;
    return (<Card>
      <CardSection>
        <TextInput 
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        maxLength={20}
        onChangeText={(email) => this.setState({email})}
        style={{height: 20, width: 100 }}
        />
      </CardSection>
      <CardSection>
        <TextInput 
        keyboardType="default"
        placeholder="Password"
        value={password}
        maxLength={20}
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
        style={{height: 20, width: 100 }}
        />
      </CardSection>
      <CardSection>
        <Button>Log in ({email} / {password})</Button>
      </CardSection>
      
    </Card>);
  }
}

export default LoginForm;