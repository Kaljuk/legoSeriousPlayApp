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
      eventOver: false
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "green"}}>
        {/* Event SubScreen goes here */}
      </View>
    );
}
}