import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {CardSection} from './common';

class ListItem extends Component {
  render() {
    const {name, phone, shift, uid} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  onPress() {
    Actions.employeeEditForm({
      employee: this.props.employee
    });
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;