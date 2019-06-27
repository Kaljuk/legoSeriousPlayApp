import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { Video } from 'expo';
import Icon from 'react-native-vector-icons/Octicons';

const IntroVideo = require('./../../../assets/videos/03Whatdoyouneed.mp4');

export default class LearnMore extends React.Component {
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
                    <TouchableOpacity style={styles.button1} onPress={ ()=>{ Linking.openURL('http://seriousplaypro.com/contact')}}>
                        <Text style={{
                            fontSize: 14, color: 'white',
                            paddingLeft: 10,paddingRight: 10,paddingBottom: 15,paddingTop: 0,}}
                        >
                        Send the infographic to my e-mail
                        </Text>
                    </TouchableOpacity>
				</View>
                <View style={{marginTop: '1%'}}>
                    <TouchableOpacity style={styles.button2} onPress={ ()=>{ Linking.openURL('https://www.lego.com/en-us/seriousplay/the-method')}}>
                        <Text style={{
                            fontSize: 14, color: 'white',
                            paddingLeft: 10,paddingRight: 10,paddingBottom: 3,paddingTop: 0,
                            }}
                        >
                        Learn more about LSP
                        </Text>
                    </TouchableOpacity>
				</View>
                <View style={{marginTop: '15%', padding: 0}}>
                    <TouchableOpacity style={styles.button3} onPress={()=> this.props.navigation.navigate('SelectScreen')}>
                        <Text style={{
                            fontSize: 14, color: 'white',
                            paddingLeft: 10,paddingRight: 10,paddingBottom: 0,paddingTop: 0,
                            }}
                        >
                        CONTINUE
                        </Text>
                    </TouchableOpacity>
				</View>
			</View>

			<View style={{position: "absolute", bottom: '5%', right: '10%'}}>

			</View>

			<View style={{position: "absolute", bottom: '5%', left: '10%'}}>

		    </View>
      </View>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F4F94',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#333368',
    paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10,
    width: 300,
    marginLeft: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333368',
    overflow: 'hidden',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: '#4F4F94',
    paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10,
    width: 300,
    marginLeft: 35,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  button3: {
    alignItems: 'center',
    backgroundColor: '#333368',
    paddingTop: 10, paddingLeft: 10, paddingRight: 10, paddingBottom: 10,
    height: 40,
    width: 150,
    marginLeft: '30%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#333368',
    overflow: 'hidden',
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