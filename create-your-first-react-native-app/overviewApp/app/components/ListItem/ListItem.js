import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import {capitalizeFirstLetter} from '../../helpers/string';
import styles, {CHEVRON_SIZE} from './styles';

const iconName = Platform.OS === 'ios'
  ? 'ios-arrow-forward'
  : 'md-arrow-forward';

class ListItem extends Component {
  render() {
    const {onPress, contact} = this.props;
    const {name, email, picture} = contact;
    const contactName = `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`

    return (
      <TouchableHighlight onPress={onPress} underlayColor={colors.underlayColor}>
        <View style={styles.row}>
          <Image
            style={styles.avatar}
            source={{
            uri: picture.thumbnail
          }}/>
          <View>
            <Text style={styles.name}>{contactName}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style={styles.chevronContainer}>
            <Icon
              style={styles.chevron}
              name={iconName}
              size={CHEVRON_SIZE}
              color={colors.subtitleText}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ListItem;