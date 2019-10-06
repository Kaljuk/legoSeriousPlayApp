import React, { Component } from 'react';
import {
  View, Text
} from 'react-native';

import Avatar from './Avatar'
import ProgressBars from './ProgressBars'
import { ScrollView } from 'react-native-gesture-handler';

export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <ScrollView style={{backgroundColor: '#E5E5E5', width: '100%', height: '100%'}}>
        <View >
          <Avatar />
          <ProgressBars />
        </View>
      </ScrollView>
    )
  }
}