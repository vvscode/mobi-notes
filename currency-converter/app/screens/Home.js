import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Containter';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = 100;
const TEMP_QUOTE_PRICE = 79.74;
const TEMP_CONVERTIONS_RATE = 0.7974;
const TEMP_CONVERTION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  state = {
    basePriceAmount: `${TEMP_BASE_PRICE}`,
  }

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
    });
  }

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
    });
  }

  handleFlipCurrencies() {
    alert('Flip');
  }

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
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
          <ClearButton text="Flip currencies" onPress={this.handleFlipCurrencies} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
