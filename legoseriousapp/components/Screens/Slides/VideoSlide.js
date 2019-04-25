
// LazyLogging
const log = console.log;

import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

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

    return (

    <VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: require('./../../../assets/videos/introVideoLSP.mp4'),
        
      }}
      isPortrait={true}
      playFromPositionMillis={0}
      videoWidth={800}
      videoHeight={900}
    />

    )
  }
}
