import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';

const url = 'ws://localhost:3000/websocket';

class SearchPage extends Component {

  componentWillMount() {
    Meteor.connect(url);
  }

renderRow(Do){
    return(
      <View style={styles.row}>
      <Text>{Do.name}</Text>
      <Text>{Do.surname}</Text>
      <Text>{Do.age}</Text>
      </View>
    )
  }

  render() {
    return (
  
        <MeteorListView
        collection="items"
        renderRow={this.renderRow}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        enableEmptySections={true}
        style={styles.container}
        />
  
    );
  }
}

export default createContainer(() => {
   Meteor.subscribe('items');
  return {
    count: Meteor.collection('items').find({}).length
  };
}, SearchPage);


var styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#c5c5c5',
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column'
  },
    row: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F6F6F6',
    padding:12
  },
  separator: {

   
    margin:10
    
  },
});