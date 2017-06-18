import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

import {contacts} from '../config/data';
import colors from '../config/colors';

class Contacts extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Contacts Screen</Text>
        <FlatList 
          data={contacts} 
          style={styles.flatListStyles}
          renderItem={({item}) => <View><Text>{item.email}</Text></View>}
          keyExtractor={({email}) => email} />
      </View>
    )
  }
}

export default Contacts;

var styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flatListStyles: {
    backgroundColor: colors.background
  }
}