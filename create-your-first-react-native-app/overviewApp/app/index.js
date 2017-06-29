import React from 'react';
import { Platform } from 'react-native';

import {Drawer, Tabs} from './config/router';

const AppComponent = Platform.OS === 'ios' ? Tabs : Drawer;

const App = () => {
  return (<AppComponent/>);
}

export default App;