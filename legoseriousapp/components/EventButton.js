import React, { Component } from 'react';
import {
    View, ScrollView,
    TouchableOpacity,

    Text
} from 'react-native';


export default class EventButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const 
      contentColor = this.props.contentColor
      contentType  = this.props.contentType,
      contentData  = this.props.contentData,
      contentTitle = this.props.contentTitle;
      
    return (
      <TouchableOpacity
        style={{ 
          height: 100,
          width : 100,
          marginHorizontal: 5,
          flexDirection: 'column',
          alignItems: 'center'
        }} 
        onPress={ () => this.props.selectContent(contentType, contentData)}
      >
        <View style={{
            height: 80,
            width : 80,
            borderRadius: 40,
            backgroundColor: contentColor
        }}></View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
            <Text style={{  fontSize: 12, color: 'white' }} numberOfLines={1}> { contentTitle } </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
