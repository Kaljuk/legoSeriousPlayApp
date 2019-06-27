import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class ShareSkills extends React.Component {
	
  render() {
    return (
      <View style={styles.container}>
					<View>
					<Image style={{justifyContent: 'center', alignItems:'center', marginLeft: '17%', marginTop:'7%', marginBottom:'7%'}} source={require("../../../assets/pictures/Sharelogo.png")}></Image>
						<View style={{marginTop: '11%'}}>
							<Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontWeight: 'bold' }}>Share your skills </Text>
							<Text style={{ marginTop: '3%', textAlign: 'center', fontSize: 20, color: 'white' }}>Share your skills with your friends and engage them in your games</Text>
						</View>
					</View>
					<View style={{position: "absolute", bottom: '5%', right: '10%'}}>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('WhatDoYouNeedVideoScreen')}>
										<Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>Next  &nbsp;   
											<Icon name='chevron-right' size={22} color='#fff' />                 
										</Text>
								</TouchableOpacity>
					</View>
					<View style={{position: "absolute", bottom: '5%', left: '10%'}}>
								<TouchableOpacity onPress={()=> this.props.navigation.navigate('MiniGameScreen')}>
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