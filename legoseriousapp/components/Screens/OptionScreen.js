import React, {Component} from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity 
} from 'react-native';

//import { mainRoutes } from './Contents';




export default class OptionScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <View>
            <Text>aoisdhaoiudsahio</Text>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Personal')}>
                <Text>Alone</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Team')}>
                <Text>Team</Text>
            </TouchableOpacity>
        </View>
    );
  }
}
