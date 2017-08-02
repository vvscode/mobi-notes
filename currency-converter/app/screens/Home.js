import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from '../components/Containter';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = 100;
const TEMP_QUOTE_PRICE = 79.74;

class Home extends Component {
  state = {
    basePriceAmount: `${TEMP_BASE_PRICE}`,
  }

  handlePressBaseCurrency() {
    alert('hey');
  }

  handlePressQuoteCurrency() {
    alert('How');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          onChangeText={basePriceAmount => this.setState({ basePriceAmount })}
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={this.state.basePriceAmount}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          defaultValue={`${TEMP_QUOTE_PRICE}`}
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;
