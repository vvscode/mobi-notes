import React, { Component } from 'react';
import { Text, StatusBar } from 'react-native';

import { Container } from '../components/Containter';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = 100;
const TEMP_QUOTE_PRICE = 79.74;
const TEMP_CONVERTIONS_RATE = 0.7974;
const TEMP_CONVERTION_DATE = new Date();

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

  handleFlipCurrencies() {
    alert('Flip');
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
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          convertionRate={TEMP_CONVERTIONS_RATE}
          date={TEMP_CONVERTION_DATE}
        />
        <ClearButton
          text="Flip currencies"
          onPress={this.handleFlipCurrencies}
        />

      </Container>
    );
  }
}

export default Home;
