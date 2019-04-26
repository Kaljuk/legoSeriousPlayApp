
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
    <Video
      source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: 300, height: 300 }}
    />

    )
  }
}
