import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';
import {capitalizeFirstLetter} from '../helpers/string';

const contactsIconName = Platform.OS === 'ios'
  ? 'ios-list'
  : 'md-list';
const newContactIconName = Platform.OS === 'ios'
  ? 'ios-person-add-outline'
  : 'md-person-add';
const meIconName = Platform.OS === 'ios'
  ? 'ios-paw-outline'
  : 'md-paw';

const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts List'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: ({navigation}) => {
      const {contact} = navigation.state.params;
      const {name} = contact;

      const contactName = `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`
      return {title: `${contactName} Details`};
    }
  }
});

const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      headerTitle: 'New Contact'
    }
  }
});

const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      headerTitle: 'Me'
    }
  }
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({tintColor}) => (<Icon name={contactsIconName} color={tintColor} size={35}/>)
    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({tintColor}) => (<Icon name={newContactIconName} color={tintColor} size={35}/>)
    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'About Me',
      tabBarIcon: ({tintColor}) => (<Icon name={meIconName} color={tintColor} size={35}/>)
    }
  }
});

export const Drawer = DrawerNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBarLabel: 'Contacts'
    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBarLabel: 'New Contact'
    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'About Me'
    }
  }
});

export default ContactsStack;