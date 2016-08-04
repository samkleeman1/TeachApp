import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
 TabBarIOS,
 NavigatorIOS,
 TouchableHighlight,
  View
} from 'react-native';

import {Feed, Chat, Profile} from './components/RootNav';
import Icon from 'react-native-vector-icons/MaterialIcons';



class TabBar extends Component {

constructor(props) {
    super(props);
    this.state = {selectedTab:'feed'}
  

};


render() {
  return (
      <TabBarIOS selectedtab={this.state.selectedTab}>
      <Icon.TabBarItem
      title='Feed'
      iconName='home'
      selected={this.state.selectedTab == 'feed'}
    onPress={() => {this.setState({selectedTab:'feed'})}}>
        <Feed/>
       </Icon.TabBarItem>
         <Icon.TabBarItem
      title='Chat'
      iconName='chat'
      selected={this.state.selectedTab == 'chat'}
    onPress={() => {this.setState({selectedTab:'chat'})}}>
      <Chat/>
       </Icon.TabBarItem>
       <Icon.TabBarItem
      title='Profile'
      iconName='settings'
      selected={this.state.selectedTab == 'profile'}
    onPress={() => {this.setState({selectedTab:'profile'})}}>
     <Profile/>
       </Icon.TabBarItem>
    
      </TabBarIOS>

    );
  }
}


  
var styles = StyleSheet.create({
    toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,     
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },
    mainContainer:{
        flex:1                  //Step 1
    },
    content:{
        backgroundColor:'#ebeef0',
        flex:1,
        flexDirection:'column',
        margin:20
    },
     text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});
    
AppRegistry.registerComponent('TeachRX', () => TabBar);