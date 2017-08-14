import React, { Component } from 'react';
import { FlatList, Text, StatusBar, View } from 'react-native';

import currencies from '../data/currencies';

class CurrencyList extends Component {
  handlePress = (item) => {
    alert(`${item} pressed`);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => <Text onPress={() => this.handlePress(item)}>{item}</Text>}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default CurrencyList;
