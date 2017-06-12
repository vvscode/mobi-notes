import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';

const AlbumsListItem = ({ title, artist, url, image, thumbnail_image }) => (<View>
    <Card>
      <Text>{title} by {artist}!</Text>
    </Card>
    <Card>
      <Image
      style={styles.imageStyles}
      source={{ uri: image }}
      />
    </Card>
  </View>);

const styles = {
  imageStyles: {
    width: 150,
    height: 150
  }
};

export default AlbumsListItem;
