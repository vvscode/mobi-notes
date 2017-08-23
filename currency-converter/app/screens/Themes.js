import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
  $orange: '$primaryOrange',
});

class Themes extends Component {
  handleThemePress = color => alert(`Theme press: ${color}`)

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handleThemePress(styles.$blue)}
          checkmark={false}
          selected
          iconBackground={styles.$blue}
        />
        <Separator />

        <ListItem
          text="Orange"
          onPress={() => this.handleThemePress(styles.$orange)}
          checkmark={false}
          selected
          iconBackground={styles.$orange}
        />
        <Separator />

        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          checkmark={false}
          selected
          iconBackground={styles.$green}
        />
        <Separator />

        <ListItem
          text="Purple"
          onPress={() => this.handleThemePress(styles.$purple)}
          checkmark={false}
          selected
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
