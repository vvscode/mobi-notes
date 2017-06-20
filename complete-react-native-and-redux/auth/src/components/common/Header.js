// Import libs
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

// Make a component
const Header = ({ text }) => {
  const {
    textStyle,
    viewStyle
  } = styles;
  return (<View style={viewStyle}>
    <Text style={textStyle}>{text}</Text>
  </View>);
};


const styles = {
  textStyle: {
    fontSize: 32,
    fontWeight: 'bold',
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
export { Header };
