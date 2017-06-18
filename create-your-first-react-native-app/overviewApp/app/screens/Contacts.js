import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Contacts extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Contacts Screen</Text>
      </View>
    )
  }
}

export default Contacts;

var styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}