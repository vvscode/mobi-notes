import React from 'react';
import { AppRegistry, Text } from 'react-native';

const App = () => (
  <Text>Hello there from linked file</Text>
);

AppRegistry.registerComponent('albums', () => App);
