import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "react-navigation";
import Swiper from 'react-native-swiper';
import VideoSlide from './Slides/VideoSlide';
import OptionScreen from './OptionScreen';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88e188',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc5490',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute'
  }
})
export const route = createStackNavigator({ 
  Option: {screen: OptionScreen},
});

export default class IntroScreen extends Component {
    render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <VideoSlide />
          {/* <Text style={styles.text}>Lego Serious Play</Text> */}
        </View>
        <View style={styles.slide2}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Option') & console.log("aa")
          }>
            <View style={{ marginBottom: 580, marginLeft: 300, position: "relative"}}>
              <Text style={{color:'white', fontSize: 15, textAlign: 'center'}}>Skip</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>What is LSP?</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('myproject', () => Swiper);