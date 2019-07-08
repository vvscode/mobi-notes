import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const App = () => {
   const [text, setText] = useState('');
    return <View style={styles.container}>
      <Text>Enter text:</Text>
      <TextInput 
        value={text} 
        onChangeText={setText} 
        style={styles.textInput} 
        defaultValue="ho-ho-ho" />
      <Text>{text}</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 100,
  }
});

export default App;