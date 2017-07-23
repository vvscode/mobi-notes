import React from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from '../components/Containter';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Text>Home Screen</Text>
  </Container>
);
