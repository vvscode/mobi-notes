import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './src/components/header';
const App = () => (<Text>
  <Header />
  </Text>
);

AppRegistry.registerComponent('albums', () => App);
