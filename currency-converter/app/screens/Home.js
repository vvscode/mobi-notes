import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from '../components/Containter';
import { Logo } from '../components/Logo';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);
