import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo';
import Icon from 'react-native-vector-icons/Octicons';

const IntroVideo = require('./../../../assets/videos/06metaphors.mp4');

export default class MetaphorsScreen extends React.Component {
	state = {
		mute: false,
		fullScreen: false,
		shouldPlay: true,
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
					<Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontWeight: 'bold' }}>Metaphors</Text>
				</View>
			</View>
				<View style={{position: "absolute", bottom: '5%', right: '10%'}}></View>
				<View style={{position: "absolute", bottom: '5%', left: '10%'}}>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('CoreAloneScreen')}>
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
    backgroundColor: '#F9C137',
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