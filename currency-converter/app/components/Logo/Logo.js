import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;
const keybordShowEvent = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
const keybordHideEvent = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

class Logo extends Component {
  constructor(...args) {
    super(...args);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(keybordShowEvent, this.onKeyboardShow);
    this.keyboardHideListener = Keyboard.addListener(keybordHideEvent, this.onKeyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  onKeyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  onKeyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  render() {
    const outerImageStyle = [
      styles.outerImage, {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ];

    const innerImageStyle = [
      styles.innerImage, {
        width: this.imageWidth,
        height: this.imageWidth,
      },
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          source={require('./images/background.png')}
          style={outerImageStyle}
        >
          <Animated.Image
            resizeMode="contain"
            source={require('./images/logo.png')}
            style={innerImageStyle}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
