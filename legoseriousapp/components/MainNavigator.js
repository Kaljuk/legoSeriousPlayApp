import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IntroScreen from './Screens/IntroScreen';
import OptionScreen from './Screens/OptionScreen';
import Personal from './Personal';
import Team from './Team';

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
    Option: {
        screen: OptionScreen
    },
    Personal: {
      screen: Personal
    },
    Team: {
      screen: Team
    },
    initialRouteName: 'Intro',
    },
    {
      navigationOptions: {
          header: null,
      }
    });

