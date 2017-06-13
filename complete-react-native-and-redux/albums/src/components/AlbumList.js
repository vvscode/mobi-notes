// Import libs
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumsListItem from './AlbumListItem';

// Make a component
class AlbumsList extends Component {
  state = {
    items: []
  }

  render() {
    const { items } = this.state;
    const { viewStyle } = styles;
    return (
      <ScrollView style={viewStyle}>
        {items.map((item) => <AlbumsListItem {...item} key={item.title} />)}
      </ScrollView>
    );
  }

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((resp) => resp.json())
      .then((items) => this.setState({ items }));
  }
}

const styles = {
  viewStyle: {

  }
};

// Make the component availbale from other parts
export default AlbumsList;
