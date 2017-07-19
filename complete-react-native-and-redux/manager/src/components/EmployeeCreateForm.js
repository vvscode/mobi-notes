import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';


import {employeeUpdate} from './../actions';
import {Card, CardSection, Input, Button} from './common';

export class EmployeeCreateForm extends Component {
  submit() {
    alert(`${this.props.name} ${this.props.phone} will be created`);
  }

  onInputChange(prop) {
    return (value) => this.props.employeeUpdate({ prop, value })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Name" 
          placeholder="John"
          value={this.props.name}
          onChangeText={this.onInputChange('name')}
           />
        </CardSection>
        <CardSection>
          <Input 
          label="Phone" 
          placeholder="+375 29 555 55 55"
          value={this.props.phone}
          onChangeText={this.onInputChange('phone')}
           />
        </CardSection>
        {/* <CardSection></CardSection>
        <CardSection></CardSection> */}
        <CardSection>
          <Button onPress={this.submit.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default connect(({
  employeeForm: {
    name,
    phone,
    loading,
    error
  }
}) => ({name, phone, loading, error}), {employeeUpdate})(EmployeeCreateForm);