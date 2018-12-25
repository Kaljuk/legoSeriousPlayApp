/** Greeting and Branch Selection Screen */

import React, { Component } from 'react';
import {
    View
} from 'react-native';

// // // Content Elements

// // Games
// QuestionScreen
import QuestionScreen from './../Game-screen/QuestionScreen';


export default class PathContentScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // Content done, return back to pathScreen?
        contentDone: false
      }
  }

  contentElement(contentType=null) {
    if (!contentType) return null;
    switch(contentType) {
      case 'questionGame':
        return QuestionScreen;
      break;
      default: 
        return null;
    }

  }

  render() {
    const contentType = this.props.contentType || 'questionGame';

    

    return (
      <View>
        
      </View>
    )
  }
}
