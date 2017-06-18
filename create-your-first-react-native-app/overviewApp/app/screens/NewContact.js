import React, {Component} from 'react';
import {View, Text} from 'react-native';

class NewContact extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>NewContact Screen</Text>
      </View>
    )
  }
}

export default NewContact;

var styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}