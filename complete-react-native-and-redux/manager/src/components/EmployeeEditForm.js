import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';

import {employeeUpdate, employeeFieldUpdate, employeeDelete} from './../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import EmployeeForm from './EmployeeForm';

export class EmployeeEditForm extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => this.props.employeeFieldUpdate({prop, value}));
  }

  submit() {
    const {name, phone, shift} = this.props;
    this
      .props
      .employeeUpdate({
        name,
        phone,
        shift: shift || 'Monday',
        uid: this.props.employee.uid,
      });
  }

  onDeletePress() {
    this.props.employeeDelete(this.props.employee.uid);
  }

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
}) => ({name, phone, shift, loading, error}), {employeeUpdate, employeeFieldUpdate, employeeDelete})(EmployeeEditForm);