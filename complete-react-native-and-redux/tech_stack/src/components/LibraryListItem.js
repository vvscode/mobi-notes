import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {
  onClick() {
    const id = this.props.library.id;

    this
      .props
      .selectLibrary(id);
  }

  renderDescription() {
    const { expanded, library } = this.props;
    const {id, title, description } = library;
    return !expanded ? null : (
      <Text>{description}</Text>
    );
  }

  render() {
    const {id, title, description} = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={this
        .onClick
        .bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
            {this.renderDescription()}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default connect((state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
}, actions)(LibraryListItem);
