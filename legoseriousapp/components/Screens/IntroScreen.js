import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import backgroundPic from '../../assets/seriousplayapp.jpg';
import VideoSlide from './Slides/VideoSlide';
import GuidedVideos from './Slides/GuidedVideos';
import MiniGames from './Slides/MiniGames';
import ShareSkills from './Slides/ShareSkills.js';
import WhatDoYouNeedVideo from './Slides/WhatDoYouNeedVideo';
import LastVideo from './Slides/LastVideo';


import OptionScreen from './OptionScreen';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  slide0: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F4F94',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88C9B3',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B06495',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F4F94',
  },

  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9C137',
  },

  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B06495',
  },

  slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F4F94',
  },
})

  

export default class IntroScreen extends Component {
    render(){
      return (
        <Swiper style={styles.wrapper} showsButtons={true}>

          <View style={styles.slide0}>
            <Image source={backgroundPic}  style={{width: 400, height: 700}}></Image>
          </View>

          <View style={styles.slide1}>
            <VideoSlide />
          </View>

          <View style={styles.slide2}>
            <GuidedVideos/>
          </View>

          <View style={styles.slide3}>
            <MiniGames/>
          </View>

          <View style={styles.slide4}>
            <ShareSkills />
          </View>

          <View style={styles.slide5}>
            <WhatDoYouNeedVideo />
          </View>

          <View style={styles.slide6}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Option') & console.log("aa")}>
                  <View style={{ marginBottom: 580, marginLeft: 300, position: "relative"}}>
                      <Text style={{color:'white', fontSize: 15, textAlign: 'center'}}>Skip</Text>
                      
                  </View>
              </TouchableOpacity>
              <LastVideo />
              <Text style={styles.text}>Continue button</Text>
          </View>


        </Swiper>
      );
  }
}

AppRegistry.registerComponent('myproject', () => Swiper);