import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  keyboardType,
  placeholder,
  secureTextEntry
}) => (
  <View style={styles.containerStyles}>
    <Text style={styles.labelStyles}>{label}</Text>
    <TextInput
      style={styles.inputStyles}
      value={value}
      autoCorrect={false}
      autoCapitalize='none'
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}/>
  </View>
);

const styles = {
  inputStyles: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },

  labelStyles: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },

  containerStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export {Input};