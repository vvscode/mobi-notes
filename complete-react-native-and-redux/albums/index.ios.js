import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
const App = () => (<View>
  <Header text={'Albums'} />
</View>
);

AppRegistry.registerComponent('albums', () => App);
