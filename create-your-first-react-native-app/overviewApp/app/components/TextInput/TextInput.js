import React, {PropTypes} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const CustomTextInput = (props) => (
  <View style={styles.container}>
    <TextInput
      autoCorrect={false}
      autoCapitalize="none"
      style={styles.input}
      { ...props }/>
  </View>
);

CustomTextInput.propTypes = {
  onPress: PropTypes.func
};

export default CustomTextInput;