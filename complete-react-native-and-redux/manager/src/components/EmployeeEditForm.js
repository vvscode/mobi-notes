import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';

import {employeeUpdate, employeeFieldUpdate, employeeDelete} from './../actions';
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner,
  Confirm
} from './common';
import EmployeeForm from './EmployeeForm';

export class EmployeeEditForm extends Component {
  state = {
    showModal: false
  };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => this.props.employeeFieldUpdate({prop, value}));
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this
      .props
      .employeeUpdate({
        name,
        phone,
        shift: shift || 'Monday',
        uid: this.props.employee.uid
      });
  }

  onTextPress() {
    const {phone, shift} = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    this
      .props
      .employeeDelete(this.props.employee.uid);
    this.closeModal();
  }

  onDecline() {
    this.closeModal();
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm/>

        <CardSection>
          <Button onPress={this
            .onButtonPress
            .bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this
            .onTextPress
            .bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({
            showModal: !this.state.showModal
          })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this
          .onAccept
          .bind(this)}
          onDecline={this
          .onDecline
          .bind(this)}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
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