import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumsListItem = ({ title, artist, url, image, thumbnail_image }) => (
  <Card>
    <CardSection>
      <Text>{title} by {artist}!</Text>
    </CardSection>
    <CardSection>
      <Image
      style={styles.imageStyles}
      source={{ uri: image }}
      />
    </CardSection>
  </Card>
);

const styles = {
  imageStyles: {
    width: 150,
    height: 150
  }
};

export default AlbumsListItem;
