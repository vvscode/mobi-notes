import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';

import {employeeUpdate} from './../actions';
import {Card, CardSection, Input, Button} from './common';

export class EmployeeCreateForm extends Component {
  submit() {
    alert(`${this.props.name} ${this.props.phone} will be created`);
  }

  onInputChange(prop) {
    return (value) => this
      .props
      .employeeUpdate({prop, value})
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            value={this.props.name}
            onChangeText={this.onInputChange('name')}/>
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="+375 29 555 55 55"
            value={this.props.phone}
            onChangeText={this.onInputChange('phone')}/>
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyles}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={this.onInputChange('shift')}>
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="T"/>
            <Picker.Item label="Wendsday" value="Wendsday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this
            .submit
            .bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyles: {
    fontSize: 18,
    paddingLeft: 20
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
}) => ({name, phone, shift, loading, error}), {employeeUpdate})(EmployeeCreateForm);