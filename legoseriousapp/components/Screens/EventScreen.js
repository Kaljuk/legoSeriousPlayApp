import React, { Component } from 'react';
import {
  View
} from 'react-native';

// Events
import QuestionScreen from './Game-screen/QuestionScreen';


export default class EventScreen extends Component {
  
  constructor(props) {
    super(props);
  }
  render() {
    const eventType = this.props.contentType;
    
    console.log('DATAAA', this.props.contentData);
    return (
      <View style={{ flex: 1 }}>
        {
          eventType == 'CollabBasic' &&
          <QuestionScreen />
        }
      </View>
    );
}
}