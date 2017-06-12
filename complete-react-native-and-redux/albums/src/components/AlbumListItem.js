import React from 'react';
import { Text, View } from 'react-native';


const AlbumsListItem = ({ title, artist, url, image, thumbnail_image }) => (
  <View>
    <Text>{title} by {artist}</Text>
  </View>
);

export default AlbumsListItem;
