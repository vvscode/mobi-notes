import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from './common';
import * as actions from '../actions';

class LibraryListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  onClick() {
    const id = this.props.library.id;

    this
      .props
      .selectLibrary(id);
  }

  renderDescription() {
    const {expanded, library} = this.props;
    const {id, title, description} = library;
    return !expanded
      ? null
      : (
        <CardSection>
          <Text style={styles.descriptionTextStyles}>{description}</Text>
        </CardSection>
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
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionTextStyles: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  }
}

export default connect((state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
}, actions)(LibraryListItem);
