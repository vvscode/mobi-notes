import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumsListItem = ({ title, artist, url, image, thumbnail_image }) => (
  <Card>
    <CardSection style={styles.cardSectionStyles}>
      <View style={styles.imageWrapperStyles}>
        <Image
        style={styles.imageStyles}
        source={{ uri: image }}
        />
      </View>
      <View style={styles.textWrapperStyles}>
        <Text style={styles.titleStyles}>{title}</Text>
        <Text style={styles.artistStyles}>{artist}</Text>
      </View>
    </CardSection>
  </Card>
);

const styles = {
  cardSectionStyles: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  imageWrapperStyles: {
  },
  imageStyles: {
    width: 50,
    height: 50
  },
  textWrapperStyles: {
    justifyContent: 'space-around',
    marginLeft: 10
  },
  titleStyles: {

  },
  artistStyles: {

  }
};

export default AlbumsListItem;
