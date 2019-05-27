import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo';
//import Video from 'react-native-video';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
//import {Platform, StyleSheet} from 'react-native';

const IntroVideo = require('./../../../assets/videos/introVideoLSP.mp4');



export default class VideoSlide extends React.Component {
	state = {
		mute: false,
		fullScreen: false,
		shouldPlay: false,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}

  render() {
		const { width } = Dimensions.get('window');
		
    return (
      <View style={styles.container}>
					<View>
						<Text style={{ textAlign: 'center' }}> What is Lego Serious Play? </Text>
						<Video
							isLooping
							shouldPlay
							source={IntroVideo}
							style={styles.video}
							resizeMode="cover"
							style={{ width, height: 330 }}
							isMuted={this.state.mute}
						/>
{/*						<View style={styles.controlBar}>
								<MaterialIcons 
									name={this.state.mute ? "volume-mute" : "volume-up"}
									size={45} 
									color="white" 
									onPress={this.handleVolume} 
								/>
								<MaterialIcons 
									name={this.state.shouldPlay ? "pause" : "play-arrow"} 
									size={45} 
									color="white" 
									onPress={this.handlePlayAndPause} 
								/>
						</View>*/}
					</View>
      </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	},
	controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
		height: 45,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	wrapper: {
    flex: 1
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
		bottom: 0,

  }
});