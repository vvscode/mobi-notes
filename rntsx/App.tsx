import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';

import ListItem from './components/ListItem/index';

const App = () => {
  const [text, setText] = useState('');
  const [titles, setTitles] = useState([] as string[]);
  const onSubmit = () => {
    if (!text) {
      return Alert.alert('First enter text');
    }
    Alert.alert('You entered', text);
    setTitles([...titles, text]);
    setText('');
  }

  return <View style={styles.container}>
    <View style={styles.inputContainer}>

      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.textInput}
        placeholder="An awesome input..."
        placeholderTextColor="red" />
      <Button
        title="Click me"
        onPress={onSubmit}
      />
    </View>
    {titles.map((text, index) => <ListItem key={index} placeName={text} />)}
  </View>
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
  }
});

export default App;