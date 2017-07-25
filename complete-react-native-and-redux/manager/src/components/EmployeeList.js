import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {ListView } from 'react-native';


import {employeeFetch} from './../actions';
import ListViewItem from './EmployeeListItem';
import {Card, CardSection, Spinner} from './common';

export class EmployeeList extends Component {
  componentWillMount() {
    this
      .props
      .employeeFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.props still old props
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(props.employees);
  }

  renderRow(employee) {
    return <ListViewItem employee={employee} />
  }

  render() {
    const {loading, employees} = this.props;
    if (loading) {
      return <CardSection><Spinner/></CardSection>
    }
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  };
}

export default connect(({
  employeeList: {
    employees,
    loading,
    error
  }
}) => ({
  employees: _.map(employees, (val, uid) => ({
    ...val,
    uid
  })),
  loading,
  error
}), {employeeFetch})(EmployeeList);