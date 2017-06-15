/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import EmployeeMaster from './app/EmployeeMaster';

let { width, height } = Dimensions.get("window");

export default class EmployeeList extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
          style={{ width: width, height: 150 }}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Beach_Boracay_2003.jpg' }}
        >
          <Text style={styles.headline}> Employee List </Text>
        </Image>

        <View style={styles.row}>
          <Text style={styles.rowText}>Full Name</Text>
          <Text style={styles.rowText}>Email</Text>
        </View>

        <EmployeeMaster />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#add8e6',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#15baf0',
    alignItems: 'center'

  },
  rowText: {
    flex: 1,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#15baf0',
  },
  backdrop: {
    paddingTop: 40,
    width: width,
    height: 120
  },
  headline: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

AppRegistry.registerComponent('EmployeeList', () => EmployeeList);
