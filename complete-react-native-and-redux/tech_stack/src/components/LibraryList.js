import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';
import {connect} from 'react-redux';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow({id, title, description}) {
    return (
      <Text>#{id} {title}</Text>
    );
  }

  render() {
    return (<ListView
      dataSource={this.dataSource}
      renderRow={this
      .renderRow
      .bind(this)}/>);
  }
}

const mapStateToProps = ({libraries}) => ({libraries});

export default connect(mapStateToProps,)(LibraryList);