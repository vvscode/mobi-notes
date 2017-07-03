import React, {Component, PropTypes} from 'react';
import {ScrollView} from 'react-native';

import {Header, Actions, Info} from '../components/UserDetails';
import {PrimaryButton} from '../components/Buttons';
import colors from '../config/colors';

import {me} from '../config/data';

class Me extends Component {
  render() {
    const contact = me;

    return (
      <ScrollView style={{
        backgroundColor: colors.background
      }}>
        <Header {...contact}/>
        <PrimaryButton label="Edit Profile" />
        <Actions {...contact}/>
        <Info {...contact}/>
      </ScrollView>
    );
  }
}

Me.propTypes = {
  navigation: PropTypes.object
};

export default Me;