import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumsListItem = ({ title, artist, url, image, thumbnail_image }) => (
  <Card>
    <CardSection style={styles.cardSectionStyles}>
      <View style={styles.imageWrapperStyles}>
        <Image
        style={styles.imageStyles}
        source={{ uri: thumbnail_image }}
        />
      </View>
      <View style={styles.textWrapperStyles}>
        <Text style={styles.titleStyles}>{title}</Text>
        <Text style={styles.artistStyles}>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <View>
        <Image
          style={styles.albumImageStyles}
          source={{ uri: image }}
        />
        </View>
      </CardSection>
      <CardSection>
        <Button
          onPress={() => Linking.openURL(url)}
        >Click</Button>
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
    fontWeight: 'bold',
    fontSize: 18
  },
  artistStyles: {

  },
  albumImageStyles: {
    height: 300,
    flex: 1,
    width: 300 // null doesn't work??
  }
};

export default AlbumsListItem;
