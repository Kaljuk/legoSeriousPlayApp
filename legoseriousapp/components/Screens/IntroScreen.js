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
import PathScreen from './PathScreen';

const styles = StyleSheet.create({
  wrapper: {
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
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7f7fff',
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb732',
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute'
  }
})
export const route = createStackNavigator({ Path: {screen: PathScreen}});

export default class IntroScreen extends Component {
    render(){
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Lego Serious Play</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Guided Videos</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Mini-Games</Text>
        </View>
        <View style={styles.slide4}>
          <Text style={styles.text}>Share your skills</Text>
        </View>
        <View style={styles.slide5}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Path') & console.log("aa")
          }>
            <View style={{ marginBottom: 580, marginLeft: 300, position: "relative"}}>
              <Text style={{color:'white', fontSize: 15, fontFamily: 'Ubuntu', textAlign: 'center'}}>Skip</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>What is LSP?</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent('myproject', () => Swiper);