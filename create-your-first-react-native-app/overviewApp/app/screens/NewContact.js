import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import colors from '../config/colors';
import {TextInput} from '../components/TextInput';

class NewContact extends Component {
  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        <TextInput placeholder="First Name..."/>
        <TextInput placeholder="Last Name..."/>
      </ScrollView>
    )
  }
}

export default NewContact;

var styles = {
  viewStyle: {
    backgroundColor: colors.background
  }
}