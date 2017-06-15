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

  onClosePress(visible) {
    this.setState({
      isModalVisible: visible
    })
  }

  render() {
    let { id, name, email, username, phone, website } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.isModalVisible}>
          <View
            style={{paddingTop: 50, backgroundColor: 'blue'}}
            >
            <Text>#{id}</Text>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{username}</Text>
            <Text>{phone}</Text>
            <Text>{website}</Text>
            <Button
              onPress={() => this.onClosePress(false)}
              title="Close"
              />
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => this.onClosePress(!this.state.isModalVisible)}
          >
          <Text>#{id} {name}</Text>
        </TouchableHighlight>
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