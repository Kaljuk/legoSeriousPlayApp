import React, { Component } from 'react';
import {
  View, Text,
  Dimensions,

  TouchableHighlight
} from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

type IntroPageProps = {
  title?: string
}
class IntroPage extends Component<IntroPageProps> {
  constructor(props: IntroPageProps) {
    super(props);
  }
  render() {
    const title = this.props.title || "No title";
    return (
      <View style={{ flexDirection: 'column', flex: 3 }}>
        <Text>{ title }</Text>
      </View>
    )
  }
}

const IntroPages = createMaterialTopTabNavigator({
  IntroLogo: { 
    screen: () => <IntroPage title={"LSP"} /> 
  },
  LspMeaning: { 
    screen: () => <IntroPage title={"LEGO® Serious Play®"} /> 
  },
  GuidedVideos: { 
    screen: () => <IntroPage title={"Guided videos"} /> 
  },
  MiniGames: { 
    screen: () => <IntroPage title={"Mini-games"} /> 
  },
  ShareSkills: { 
    screen: () => <IntroPage title={"Share your skills"} /> 
  }
}, {
  initialRouteName: 'IntroLogo',
  tabBarComponent: ( () => <View></View> ),
  swipeEnabled: true
})

const IntroPagesContainer = createAppContainer(IntroPages);

export default class IntroScreen extends Component {
  constructor(props) {
    super(props);
  }
  circleRadius = Dimensions.get('screen').width*0.95;

  skipIntro() {
    console.log('Skipping pressed');
  }

  render() {
    const backgroundColor = "#88c9b3"
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', backgroundColor }}>
        {/* Skip Button */}
        <View style={{ flex: 0.10, zIndex: 5 }} >
          <TouchableHighlight onPress={()=>this.skipIntro()} style={{ marginTop: 30 ,padding: 12, position: 'absolute', right: 10, borderRadius: 20 }} 
            underlayColor={"#ffffffaa"}
          >
            <Text style={{ textAlign:'right', color: 'white' }}>Skip</Text>
          </TouchableHighlight>
        </View>
        
        {/* Circle BackGround */}
        <View style={{ 
          backgroundColor: "#689a89", 
          width: this.circleRadius, height: this.circleRadius, borderRadius: this.circleRadius, 
          marginTop: 50, alignSelf: 'center',
          zIndex: -3, position: 'absolute'
        }}></View>

        {/* Underlay for the text */}
        <IntroPagesContainer />
      </View>
    )
  }
}