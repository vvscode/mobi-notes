import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({
  size = 'large'
}) => (
  <View style={styles.spinnerStyles}>
    <ActivityIndicator size={size}/>
  </View>
);

const styles = {
  spinnerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
export {Spinner};