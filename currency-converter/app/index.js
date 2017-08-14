import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',

  // outline: 1,
});

export default () => <CurrencyList />;
