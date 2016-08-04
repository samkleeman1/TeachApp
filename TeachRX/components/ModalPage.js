import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
var t = require('tcomb-form-native');
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form'
const url = 'ws://localhost:3000/websocket';
var Form = t.form.Form;
var Person = t.struct({
  name: t.String,              // a required string 
  surname: t.String,  // an optional string 
  age: t.Number,               // a required number 
});

export default class ModalPage extends Component {

componentWillMount() {
    Meteor.connect(url);
  }

handleAddItem() {
  var value = this.refs.form.getValue();
  Meteor.call('Items.addOne', { name:value.name, surname:value.surname, age: value.age }, (err, res) => {

    console.log('Items.addOne', err, res);
    this._handleBackButtonPress();
  });
}

_handleBackButtonPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
      <Form
          ref="form"
          type={Person}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleAddItem.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex:1,
    marginTop: 65,
    padding: 30
  },
   buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});