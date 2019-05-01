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
import logo from '../../assets/Group.png';
import VideoSlide from './Slides/VideoSlide';
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
  },
  textBox: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
  }
})

  

export default class IntroScreen extends Component {
    render(){
      return (
        <Swiper style={styles.wrapper} showsButtons={true}>

          <View style={styles.slide0}>
              <Image source={logo} style={{width: 180, height: 75}}/>
                  <View style={styles.textBox}>
                    <Text style={{color:'white', fontSize: 18, textAlign: 'center'}}>Learn LEGO® Serious Play® Methodology for  communication, creativity and challenges</Text>
                  </View>
          </View>

          <View style={styles.slide1}>
            <VideoSlide />
          </View>

          <View style={styles.slide2}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Option') & console.log("aa")}>
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