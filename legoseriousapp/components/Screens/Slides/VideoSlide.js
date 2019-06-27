import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
//import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Octicons';
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
						<Video
							shouldPlay
							source={IntroVideo}
							//source={{ uri: 'https://player.vimeo.com/video/336903240' }}
							//style={styles.video}
							resizeMode="cover"
							style={{ width, height: 330 }}
							isMuted={this.state.mute}
						/>
						<View style={{marginTop: '10%'}}>
							<Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontWeight: 'bold' }}> LEGO® Serious Play® </Text>
							<Text style={{ marginTop: '3%', textAlign: 'center', fontSize: 20, color: 'white' }}> Use LEGO bricks to make sense of yourself and communicate better with others </Text>
						</View>
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
					<View style={{position: "absolute", bottom: '5%', right: '10%'}}>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('GuidedVideoScreen')}>
										<Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Next  &nbsp;   
											<Icon name='chevron-right' size={22} color='#fff' />                 
										</Text>
								</TouchableOpacity>
					</View>
					<View style={{position: "absolute", bottom: '5%', left: '10%'}}>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('IntroScreen')}>
                  <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>&nbsp;   
                     <Icon name='chevron-left' size={22} color='#fff' />Back                
                  </Text>
              </TouchableOpacity>
					</View>
      </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88C9B3',
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
});