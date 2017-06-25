import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {capitalizeFirstLetter} from '../helpers/string';

class Details extends Component {
  render() {
    const {navigation} = this.props;
    const {contact} = navigation.state.params;
    const {name} = contact;

    const contactName = `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`

    return (
      <View style={styles.viewStyle}>
        <Text>Details Screen for {contactName}</Text>
      </View>
    )
  }
}

export default Details;

var styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}