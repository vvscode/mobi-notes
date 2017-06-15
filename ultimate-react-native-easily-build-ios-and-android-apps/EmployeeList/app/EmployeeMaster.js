import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

export default class EmployeeMaster extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersList) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(usersList)
          });
      })
      .catch((e) => console.error('fetchUsers error', e));
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Some text here</Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>#${rowData.id} {rowData.name}</Text>}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
