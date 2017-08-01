import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = ({
  editable = true,
  onPress = () => null,
  buttonText,
  value,
  keyboardType = 'numeric',
  onChangeText = () => null }) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        value={`${value}`}
        style={styles.input}
        editable={editable}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
};

export default InputWithButton;
