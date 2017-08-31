import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" source={require('./images/background.png')} style={styles.outerImage}>
      <Image resizeMode="contain" source={require('./images/logo.png')} style={styles.innerImage} />
    </Image>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
