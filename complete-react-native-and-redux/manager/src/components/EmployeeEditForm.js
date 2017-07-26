import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';

import {employeeFieldUpdate, employeeCreate} from './../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {EmployeeForm} from './EmployeeForm';

export class EmployeeEditForm extends Component {
  submit() {
    const {name, phone, shift} = this.props;
    this
      .props
      .employeeCreate({
        name,
        phone,
        shift: shift || 'Monday'
      });
  }

  onDeletePress() {}

  renderButton() {
    if (this.props.loading) {
      return (
        <CardSection><Spinner/></CardSection>
      );
    }
    return (
      <View>
        <CardSection>
          <Button onPress={this
            .submit
            .bind(this)}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this
            .onDeletePress
            .bind(this)}>
            Delete
          </Button>
        </CardSection>
      </View>
    );
  }

  render() {
    return (
      <View>
        <EmployeeForm/> 
        {this.renderButton()}
      </View>
    )
  }
}

export default connect(({
  employeeForm: {
    name,
    phone,
    shift,
    loading,
    error
  }
}) => ({name, phone, shift, loading, error}), {employeeUpdate})(EmployeeEditForm);