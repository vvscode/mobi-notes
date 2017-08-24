import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 24;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes');
  }

  handleSitePress = () => {
    alert('press stite');
  }

  render() {
    return (
      <View>
        <StatusBar tranlucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={<Icon name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
        <Separator />
        <ListItem
          text="Flixer.io"
          onPress={this.handleSitePress}
          customIcon={<Icon name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        />
      </View>
    );
  }
}
export default Options;
