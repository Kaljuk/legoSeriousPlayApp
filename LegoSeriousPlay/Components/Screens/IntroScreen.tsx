import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';


export default class IntroScreen extends Component {
  /**
   *
   */
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Intro Screen');
    
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'red' }}>
        <Text style={{ textAlign: 'center', color: 'white' }}>
          Intro Screen
        </Text>
      </View>
    )
  }
}