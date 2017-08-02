import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ClearButton = ({
  text,
  onPress = () => null,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        source={require('./images/icon.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
