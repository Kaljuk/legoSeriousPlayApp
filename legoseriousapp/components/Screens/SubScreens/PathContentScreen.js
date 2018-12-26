/** Greeting and Branch Selection Screen */

import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';

// // // Content Elements

// // Slides & Text
import SlideScreen from './../SlideScreen';

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

  contentElement(contentType=null, data={}) {
    if (!contentType) return null;
    switch(contentType) {
      // // Games
      case 'questionGame':
        const questions = data.questions;
        return (<QuestionScreen questions={questions} />);
      // // Slides
      case 'slides':
        const slides = data.slides;
        return (<SlideScreen />)
      break;
      default: 
        return null;
    }

  }

  render() {

    const contentType = this.props.contentType || 'slides'; //'questionGame';
    const contentData = this.props.content || {};
    const ContentElement = this.contentElement(contentType, contentData)
    console.log('Showing content')
    return (
      <View style={{ flex: 1 }}>
        { ContentElement }
      </View>
    )
  }
}
