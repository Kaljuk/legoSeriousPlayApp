import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';


export default class EventScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      eventOver: false,
      eventName: props.title || 'TestTitle'
    }
    
  }
  render() {
    console.log('test');
    
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "green", alignItems: 'center'}}>
        {/* Event SubScreen goes here */}
        
        <Text style={{ flex: .5, textAlignVertical: 'center'}}>
          { this.state.eventName } 
          and 
          { this.props.title }
        </Text>
      
      </View>
    );
}
}