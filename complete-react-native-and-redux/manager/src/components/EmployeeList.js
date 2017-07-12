import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {Card, CardSection} from './common';

class EmployeeList extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Card>
            <Text>Andy Boone</Text>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
            <Text>Sam Scaller</Text>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
            <Text>Rob White</Text>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
            <Text>John Bow</Text>
          </Card>
        </CardSection>
        <CardSection>
          <Card>
            <Text>Holy JS</Text>
          </Card>
        </CardSection>
      </View>
    );
  }
}

export default EmployeeList;