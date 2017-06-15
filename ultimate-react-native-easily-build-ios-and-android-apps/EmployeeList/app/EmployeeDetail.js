import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Modal, 
  Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export default class EmployeeDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: false
    };
  }

  render() {
    let { id, name } = this.props;
    return (
      <View style={styles.container}>
        <Text>#{id} {name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});