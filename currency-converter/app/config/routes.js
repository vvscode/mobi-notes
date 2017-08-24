import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    },
  },
}, {
  headerMode: 'screen', // android-like header
});

export default StackNavigator({
  Home: {
    screen: HomeStack,
  },
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
}, {
  mode: 'modal', // render from bottom to top
  cardStyle: {
    paddingTop: StatusBar.currentHeight,
  },
  headerMode: 'none',
});
