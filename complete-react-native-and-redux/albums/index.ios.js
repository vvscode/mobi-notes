import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumsList from './src/components/AlbumList';

const App = () => (<View style={{ flex: 1 }}>
  <Header text={'Albums'} />
  <AlbumsList />
</View>
);

AppRegistry.registerComponent('albums', () => App);
