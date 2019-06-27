import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
import Icon from 'react-native-vector-icons/Octicons';

const IntroVideo = require('./../../../assets/videos/03Whatdoyouneed.mp4');

export default class WhatDoYouNeedVideo extends React.Component {
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
							resizeMode="cover"
							style={{ width, height: 330 }}
							isMuted={this.state.mute}
						/>	
						<View style={{marginTop: '10%'}}>
							<Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontWeight: 'bold' }}> What do you need? </Text>
							<Text style={{ marginTop: '3%', textAlign: 'center', fontSize: 20, color: 'white' }}> What do you need for this app? </Text>
						</View>
					</View>
					<View style={{position: "absolute", bottom: '5%', right: '10%'}}>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('LearnMoreScreen')}>
										<Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Next  &nbsp;   
											<Icon name='chevron-right' size={22} color='#fff' />                 
										</Text>
								</TouchableOpacity>
					</View>
					<View style={{position: "absolute", bottom: '5%', left: '10%'}}>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('ShareSkillScreen')}>
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
    backgroundColor: '#B06495',
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