import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');
const borderBottomWidth = Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0;

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 15,
    borderBottomWidth
  },
  input: {
    height: 40,
    width: window.width
  }
});