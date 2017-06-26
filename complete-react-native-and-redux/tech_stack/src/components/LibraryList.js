import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    const { libraries = [] }  = this.props;
    const items = libraries.map(({id, title, description}) => (
      <Text>#{id} {title}</Text>
    ));
    return (<View>{items}</View>);
  }
}

const mapStateToProps = ({libraries}) => ({libraries});

export default connect(
  mapStateToProps,  
)(LibraryList);