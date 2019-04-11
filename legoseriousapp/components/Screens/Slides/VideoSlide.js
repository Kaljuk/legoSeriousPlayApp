
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
    
    const uri = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

    return (<VideoPlayer
      videoProps={{
        shouldPlay: true,
        resizeMode: Video.RESIZE_MODE_CONTAIN,
        source: {
          uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
        },
      }}
      isPortrait={true}
      playFromPositionMillis={0}
    />
    )
  }
}
