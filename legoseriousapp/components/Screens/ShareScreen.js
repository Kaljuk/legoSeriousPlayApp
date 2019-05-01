import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';

export default class ShareScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  shareResults = async () => {
    try {
      const result = await Share.share({
        title: 'LegoSeriousPlayTitle',
        message: 'LegoSeriousPlay app cool',
        url: 'http://seriousplaypro.com/'
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
      //Gets scores from question buttons and computes results with an algoritm
    return (
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={()=>this.shareResults()}>
            <View>
                <Text>Share{'\n'}</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{console.log(Quit) }}>
            <View>
                <Text>Quit</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}
