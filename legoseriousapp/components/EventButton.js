import React, { Component } from 'react';
import {
    View, ScrollView,
    TouchableOpacity,

    Text,
    // Animations
    Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
const LockIcon = () => (
  <Icon 
    name='lock' 
    size={40} 
    color='#FFF' 
    style={{ marginLeft: 10}}
  />
);

const KeyIcon = () => (
  <Icon 
    name='key' 
    size={40} 
    color='#FFF' 
    style={{ marginLeft: 10}}
  />
);

// export default 
class EventButton1 extends Component {
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

/**********************************************   PROTOTYPE **********************************/



export default class EventButton extends Component {
  constructor(props) {
    super(props);
    this.circleSize = new Animated.Value(100);
    this.normal = false;
  }

  bounceCircle() {
    console.log('Lez Bounce');
    this.normal = !this.normal;
    this.circleSize.setValue(this.normal && 130 || 30)
    Animated.spring(
      this.circleSize,
      {
        toValue: this.normal && 80  || 100,
        friction: this.normal && 80 || 100,
        tension: this.normal && 80  || 100
      }
    ).start()
  }

  eventPressed() {
    
    const contentType  = this.props.contentType,
          contentData  = this.props.contentData;

    console.log('Pressed', contentData);
    if (this.normal && contentData)
      this.props.selectContent(contentType, contentData)
    this.bounceCircle()
    
  }

  render() {
    
    const 
      contentColor = this.props.contentColor,
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
        onPress={ () => this.eventPressed() }
      >
        <Animated.View style={{
            height: this.circleSize || 100,
            width : this.circleSize || 100,
            borderRadius: 40,
            backgroundColor: contentColor,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
          { (!this.normal && !this.props.contentData) && <LockIcon /> }
          { (this.normal == false && this.props.contentData) && <KeyIcon />  }
        </Animated.View>
        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
            <Text style={{  fontSize: 12, color: 'white' }} numberOfLines={1}> { contentTitle } </Text>
        </View>
      </TouchableOpacity>
    )
  }
}