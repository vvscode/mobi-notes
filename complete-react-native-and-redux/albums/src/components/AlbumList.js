// Import libs
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumsListItem from './AlbumListItem';

// Make a component
class AlbumsList extends Component {
  state = {
    items: []
  }

  render() {
    const { items } = this.state;
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>List will be here:</Text>
        {items.map((item) => AlbumsListItem(item))}
      </View>
    );
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((resp) => resp.json())
      .then((items) => this.setState({ items }));
  }
}

const styles = {
  textStyle: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make the component availbale from other parts
export default AlbumsList;
