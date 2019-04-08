import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import IntroScreen from './Screens/IntroScreen';
import OptionScreen from './Screens/OptionScreen';



const DEVICE_WIDTH = Dimensions.get('window').width;

class MainNavigator extends Component {
  render() {
    return (
        <Navigator />
    )

    
  }
}
export default MainNavigator;

const Navigator = createStackNavigator({
    Intro: {
        screen: IntroScreen
    },
    Options: {
        screen: OptionScreen
    },
    initialRouteName: 'Intro',
});

