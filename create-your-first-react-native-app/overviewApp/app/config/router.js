import {StackNavigator} from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me';
import NewContact from '../screens/NewContact';

import {capitalizeFirstLetter} from '../helpers/string';


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
      const { contact } = navigation.state.params;
      const { name } = contact;

      const contactName = `${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`
      return {title: `${contactName} Details`};
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'My Personal Details'
    }
  },
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'Create New Contact'
    }
  }
});

export default ContactsStack;