import React, {Component} from 'react';
import {Text, View} from 'react-native';

import { CardSection } from './common';

class LibraryListItem extends Component {
  render() {
    const {id, title, description} = this.props.library;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>{title}</Text>
      </CardSection>
    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default LibraryListItem;
