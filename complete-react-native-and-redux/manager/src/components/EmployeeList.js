import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import {employeeFetch} from './../actions';

import {Card, CardSection, Spinner} from './common';

export class EmployeeList extends Component {
  componentWillMount() {
    this
      .props
      .employeeFetch();
  }

  renderList() {
    const {loading, employees} = this.props;
    if (loading) {
      return <CardSection><Spinner/></CardSection>
    }
    return Object
      .keys(employees)
      .map((key) => employees[key])
      .map((item) => (
        <Card>
          <CardSection>
            <Text>{item.name}</Text>
          </CardSection>
          <CardSection>
            <Text>{item.phone}</Text>
          </CardSection>
          <CardSection>
            <Text>{item.shift}</Text>
          </CardSection>
        </Card>
      ));
  }

  render() {
    return (
      <View>
        {this.renderList()}
      </View>
    );
  }
}

export default connect(({
  employeeList: {
    employees,
    loading,
    error
  }
}) => ({employees, loading, error}), {employeeFetch})(EmployeeList);