import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

import {contacts} from '../config/data';
import colors from '../config/colors';
import {ListItem} from '../components/ListItem/index';

class Contacts extends Component {
  handleRowPress(constact) {
    return null
  }

  
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Contacts Screen</Text>
        <FlatList
          data={contacts}
          style={styles.flatListStyles}
          renderItem={({item}) => <ListItem contact={item} onPress={() => this.handleRowPress(item)}/>}
          keyExtractor={({email}) => email}/>
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