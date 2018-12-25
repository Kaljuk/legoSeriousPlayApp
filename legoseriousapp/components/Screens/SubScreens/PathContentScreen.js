/** Greeting and Branch Selection Screen */

import React, { Component } from 'react';
import {
    View
} from 'react-native';


export default class PathContentScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        // Content done, return back to pathScreen?
        contentDone: false
      }
  }

  render() {
    const contentElement = this.props.contentElement;
    return (
      <View>
        
      </View>
    )
  }
}
