import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Me extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Me Screen</Text>
      </View>
    )
  }
}

export default Me;

var styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}