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

      this.contentFinished = this.contentFinished.bind(this);
  }

  contentElement(contentType=null, data={}) {
    if (!contentType) return null;
    switch(contentType) {
      // // Games
      case 'questionGame':
        const questions = data.questions;
        const share = data.share || null;
        return (<QuestionScreen questions={questions} quit={ this.contentFinished } share={share} />);
      // // Slides
      case 'slides':
        const slides = data.slides;
        return (<SlideScreen quit={ this.contentFinished } />)
      break;
      default: 
        return null;
    }
  }

  contentFinished() {
    this.props.quit();
  }

  render() {

    const contentType = this.props.contentType || 'slides'; //'questionGame';
    const contentData = this.props.contentData || {};
    const ContentElement = this.contentElement(contentType, contentData)
    console.log('Showing content')
    return (
      <View style={{ flex: 1 }}>
        { ContentElement }
      </View>
    )
  }
}
