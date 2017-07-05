import React, {Component} from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import {TextInput} from '../components/TextInput';
import {PrimaryButton} from '../components/Buttons';

const fields = [
  {
    placeholder: 'First Name',
    stateKey: 'firstName'
  }, {
    placeholder: 'Last Name',
    stateKey: 'lastName'
  }, {
    placeholder: 'Email',
    stateKey: 'email'
  }, {
    placeholder: 'Mobile Phone',
    stateKey: 'mobilePhone'
  }, {
    placeholder: 'City',
    stateKey: 'city'
  }, {
    placeholder: 'birthdate',
    stateKey: 'birthdate'
  }, {
    placeholder: 'registered',
    stateKey: 'registered'
  }, {
    placeholder: 'User Name',
    stateKey: 'userName'
  }
];

class NewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onInputChange = (text, stateKey) => {
    const mode = {};
    mode[stateKey] = text;
    this.setState(mode);
  }

  handleSubmit = (index) => {
    if (index === fields.length - 1) {
      alert('Submit');
    } else {
      const nextField = fields[index + 1];
      this[nextField.stateKey].focus();
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.viewStyle}>
        {fields.map((item, index) => (<TextInput
          placeholder={item.placeholder}
          onChangeText={(text) => this.onInputChange(text, item.stateKey)}
          returnKeyType={index === fields.length - 1
          ? 'done'
          : 'next'}
          onSubmitEditing={() => this.handleSubmit(index)}
          ref={(input) => this[item.stateKey] = input}
          key={item.stateKey}/>))}
        <View>
          <PrimaryButton label="Create" onPress={() => this.handleSubmit()}/>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default NewContact;

var styles = {
  viewStyle: {
    backgroundColor: colors.background
  }
}