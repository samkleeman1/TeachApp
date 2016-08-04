import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Navigator,
  View,
  Text
} from 'react-native';


import SearchPage from './SearchPage.js'
import ChatPage from './ChatPage'
import ProfilePage from './ProfilePage'
import ModalPage from './ModalPage'


export class Feed extends Component {


    render() {
   
    return (

    <NavigatorIOS
        ref='nav'
        initialRoute={{
        title : 'Feed',
        component: SearchPage,
        rightButtonTitle:'New',
        onRightButtonPress: this._newmodal.bind(this)
         }}
         style={styles.container}/>
    )}
  
_newmodal () {

  this.refs.nav.navigator.push({
  title: 'New',
  component: ModalPage

  });
};

}
 export class Chat extends Component {

  render() {
    return (

    <NavigatorIOS
        initialRoute={{
        title : 'Chat',
        component: ChatPage }}
         style={styles.container}/>
    )}}

    export class Profile extends Component {

  render() {
    return (

    <NavigatorIOS
        initialRoute={{
        title : 'Feed',
        component: ProfilePage}}
         style={styles.container}/>
    )}}

    var styles = StyleSheet.create({
         container: {
    flex: 1
  }});