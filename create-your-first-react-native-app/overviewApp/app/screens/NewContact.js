import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

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
    const mod = {};
    mod[stateKey] = text;
    this.setState(mode);
  }

  handleSubmit = () => {
    alert('Submit')
  }

  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        {fields.map((item) => (<TextInput
          placeholder={item.placeholder}
          onChangeText={(text) => this.onInputChange(text, item.stateKey)}
          key={item.stateKey}/>))}
        <View>
          <PrimaryButton 
            label="Create"
            onPress={() => this.handleSubmit()}
            />
        </View>
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