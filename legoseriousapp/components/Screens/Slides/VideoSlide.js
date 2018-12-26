
// LazyLogging
const log = console.log;

import React from 'react';
import {
  View,
  Video
} from 'react-native';



export default class VideoSlide extends React.Component {
  constructor(props) {
    super(props);
  }
  videoError() {
    log('VideoError')
  }
  onBuffer() {
    log('Buffering')
  }
  render() {

    const uri = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

    return (
      <View style={{ 
        flex: 1, flexDirection: 'column', 
        
        backgroundColor: 'red' 
      }}>
        
      </View>
      
    )
  }
}
