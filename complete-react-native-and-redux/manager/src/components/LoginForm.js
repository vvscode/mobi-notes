import React, {Component} from 'react';

import {Card, CardSection, Input, Button} from './common';

export class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection><Input label="Email" placeholder="email@at.com"/></CardSection>
        <CardSection><Input label="Password" placeholder="password"/></CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}