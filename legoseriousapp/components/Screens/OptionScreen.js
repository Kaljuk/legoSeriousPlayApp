import React, {Component} from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity 
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import PathScreen from './PathScreen';
import { mainRoutes } from './Contents';


export const router = createStackNavigator({Path: {screen: PathScreen}});

export default class OptionScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const routes = mainRoutes;
    return (
        <View>
            <Text>aoisdhaoiudsahio</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate(Path)}>
                <Text>Alone</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate(Path)}>
                <Text>Team</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
