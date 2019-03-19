
// LazyLogging
const log = console.log;

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import {Video} from 'expo'


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

    console.log('Render videoSlide');
    
    const uri = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

    return (
      <View style={{ 
        backgroundColor: 'red',
        minWidth: 200,
        minHeight: 300
      }}>
        {/* <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          overrideFileExtensionAndroid={"m3u8"}

          rate={1.0}
          volume={1.0}
          isMuted={false}
          onError={err => console.log("2ERR", err)}
          
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 380, height: 600 }}
        /> */}
        
      </View>
      
    )
  }
}
