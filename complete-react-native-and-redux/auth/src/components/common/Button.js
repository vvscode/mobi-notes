import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({
  children,
  onPress = () => null
}) => {
  const {touchableOpacityStyles, textStyles} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={touchableOpacityStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  touchableOpacityStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5
  },
  textStyles: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export {Button};
