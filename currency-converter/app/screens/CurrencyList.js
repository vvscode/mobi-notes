import React, { Component } from 'react';
import { FlatList, Text, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePress = (item) => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => <ListItem
            text={item}
            selected={item === TEMP_CURRENT_CURRENCY}
            onPress={this.handlePress}
          />}
          ItemSeparatorComponent={Separator}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default CurrencyList;
