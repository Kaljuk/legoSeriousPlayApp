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
  quit = () =>{
    this.props.navigation.navigate('Personal')
  }

  render() {
      //Gets scores from question buttons and computes results with an algoritm
    return (
      <View style={{alignItems: 'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>this.shareResults()}>
            <View style={{ backgroundColor: 'white', width: 200, height: 50, marginTop: 200, justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {{ backgroundColor: 'white', width: 200, height: 50, marginTop: 20, justifyContent: 'center'}}>SHARE</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.quit()}>
          <View style={{ backgroundColor: 'white', width: 200, height: 50, marginTop: 1200, justifyContent: 'center', alignItems:'center'}} >
              <Text style={{fontSize: 20, textAlign: 'center'}}>QUIT</Text>
          </View>
      </TouchableOpacity>
      </View>
    );
  }
}
