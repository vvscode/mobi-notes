import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';

import {employeeCreate} from './../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import EmployeeForm from './EmployeeForm';

export class EmployeeCreateForm extends Component {
  submit() {
    const {name, phone, shift } = this.props;
    this
      .props
      .employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  renderButton() {
    if (this.props.loading) {
      return (<Spinner/>);
    }
    return (
      <Button onPress={this
        .submit
        .bind(this)}>
        Create
      </Button>
    );
  }

  render() {
    return (
      <View>
        <EmployeeForm />
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
}) => ({name, phone, shift, loading, error}), {employeeCreate})(EmployeeCreateForm);