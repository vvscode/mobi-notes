import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  return <View style={styles.container}>
    <View style={styles.inputContainer}>

      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.textInput}
        placeholder="An awesome input..."
        placeholderTextColor="red" />
      <Button
        style={styles.button}
        title="Click me"
        onPress={() => Alert.alert(text)}
      />
    </View>
    <Text>{text}</Text>
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
  },
  button: {
    width: '25%',
  }
});

export default App;