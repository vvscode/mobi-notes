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

let { width, height } = Dimensions.get("window");

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
      <View>
        <Modal
        
          animationType={"slide"} 
          visible={this.state.isModalVisible}>
          <View style={styles.modalColumn}>
            <View style={styles.modal}>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>ID: </Text>
                <Text style={styles.rowText}>{id} </Text>
              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>Name: </Text>
                <Text style={styles.rowText}>{name} </Text>
              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>Email: </Text>
                <Text style={styles.rowText}>{email}</Text>

              </View>

              <View style={styles.modalRow}>
                <Text style={styles.rowText}>Phone: </Text>
                <Text style={styles.rowText}>{phone} </Text>
              </View>
              <Button
                style={styles.modalCloseButton}
                color="blue"
                onPress={() => this.onClosePress(false)}
                title="Close"
                />
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => this.onClosePress(!this.state.isModalVisible)}
          >
          <View style={styles.row}>
            <Text style={styles.rowText}>#{id} {name}</Text>
            <Text style={styles.rowText}>{email}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  modal: {
    backgroundColor: '#add8e6',
    marginTop: height - 500,
    paddingLeft: 50,
    paddingRight: 50

  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',

  },
  rowText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 10

  },

  modalRow: {
    flexDirection: 'row',

    marginTop: 10,
    borderBottomWidth: 1,
    justifyContent: 'center'

  },
  modalCloseButton: {
    marginTop: 10
  },

});