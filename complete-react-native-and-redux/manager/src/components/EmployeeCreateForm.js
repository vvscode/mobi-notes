import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Card, CardSection, Input, Button} from './common';

class EmployeeCreateForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="John" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeholder="+375 29 555 55 55" />
        </CardSection>
        {/* <CardSection></CardSection>
        <CardSection></CardSection> */}
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default EmployeeCreateForm;