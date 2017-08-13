import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

const InputWithButton = (props) => {
  const {
    editable = true,
    onPress = () => null,
    buttonText,
  } = props;
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
        style={styles.input}
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
};

export default InputWithButton;
