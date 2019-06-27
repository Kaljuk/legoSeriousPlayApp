import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableHighlight } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { mainRoutes } from './Contents';
import Icon from 'react-native-vector-icons/Octicons';

const TabIcon = (props={}) => (
  <Icon
    name={props.icon || 'person'} 
    size={30} 
    color={props.color || '#fff'}
    
  />
);

//import all screens
import IntroScreen from './Screens/IntroScreen';
import OptionScreen from './Screens/OptionScreen';
import PersonalScreen from './Screens/PersonalScreen';
import EducationScreen from './Screens/EducationScreen';
import BusinessScreen from './Screens/BusinessScreen';
import Personal from './Personal';
import Team from './Team';
import QuestionScreen from './Screens/Game-screen/QuestionScreen';
import MindGameScreen from './Screens/Game-screen/MindGameScreen';
import AboutScreen from './Screens/AboutScreen';
import VideoSlide from './Screens/Slides/VideoSlide';
import GuidedVideos from './Screens/Slides/GuidedVideos';
import LastVideo from './Screens/Slides/LastVideo';
import MiniGames from './Screens/Slides/MiniGames';
import ShareSkills from './Screens/Slides/ShareSkills';
import WhatDoYouNeedVideo from './Screens/Slides/WhatDoYouNeedVideo';
import LearnMore from './Screens/Slides/LearnMore';
import SelectScreen from './Screens/SelectScreen';
import CoreAloneScreen from './Screens/CoreAloneScreen';
import SelectedPersonalScreen from './Screens/SelectedPersonalScreen';
import SelectedEducationScreen from './Screens/SelectedEducationScreen';
import SelectedBusinessScreen from './Screens/SelectedBusinessScreen';
import EtiquetteScreen from './Screens/Slides/EtiquetteScreen';
import HowToBuildScreen from './Screens/Slides/HowToBuildScreen';
import StorytellingScreen from './Screens/Slides/StorytellingScreen';
import MetaphorsScreen from './Screens/Slides/MetaphorsScreen';

// Screen for all the events (little action bubbles you press in Team | Alone)
import EventScreen from './Screens/EventScreen';

//Drawer Container of different routes
//Gets Data from Content.js 
//Maps all the routes
class DrawerContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
          pressedTab: -1,
          selectedTab: -1
      }

      this.choosePath = this.choosePath.bind(this);
  }

  isHovering(tabId) {
      this.setState({ pressedTab: tabId })
  }

  choosePath(pathId=-1) {
      this.setState({ selectedTab: pathId })
  }

  render() {
      const { navigation } = this.props;

      /*const menuTabData = [
          // { color: "#003DA5", text: "Business",  target: 'Home' },
          // { color: "#E93CAC", text: "Slides|Education", target: 'Slides' }, // #ECB3CB
          { color: "#A2E4B8", text: "Branches",  target: 'Branches' },
          
          { color: "#FFCD00", text: "Core", target: 'Feed' },
          { color: "#192837", text: "Load", target: 'Loading' }
      ];*/

      const routes = mainRoutes;
      
      const tabs = routes.map( (route, id) => {
          // console.log(`Route: ${route.title} Screen: ${route.screen}`);
          const isSelected    = (id === this.state.selectedTab);
          const isHighlighted = (id === this.state.pressedTab) || isSelected;
          
          const navigateToRoute = route.screen && (() => { 
            console.log("Routes",route);
            console.log('Navigating to', route.title);
            const data = {
                title: route.title,
                mainColor: route.mainColor,
                secondaryColor: route.secondaryColor,
                content: route.content
            }
            this.setState({ selectedTab: id })
            console.log("Sending data", data);
            
            navigation.navigate( route.screen, { test: 'TestInject', data: data, choosePath: this.choosePath});
            navigation.closeDrawer();
          }) || (() => console.log('No Screen Assigned'));
          
          const textColor = (isHighlighted) ? '#fff' : '#808080';

          return (
              <TouchableHighlight key={id} 
                onPressIn={()=>this.isHovering(id)} 
                onPressOut={()=>this.isHovering(-1)} 
                onPress={() => navigateToRoute()} 

                underlayColor={ route.mainColor || '#808080' }
                style={{ 
                    flex: 0.15, flexDirection: 'column', justifyContent:'center',
                    backgroundColor: isSelected && route.mainColor || '#fff'
                    /*, backgroundColor: 'blue'*/
              }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10/*, backgroundColor: 'red'*/ }}>
                      {/* Icon / Logo */}
                      <View style={{ marginRight: 10 }}>
                          <TabIcon color={ textColor || '#4c4c4c'} icon={route.icon}/>
                      </View>
                      {/* Route Name */}
                      <Text style={{ 
                          fontSize: 18, color: textColor,
                          textAlignVertical: 'center'
                      }}>{ route.title }</Text>
                  </View>
              </TouchableHighlight>
          )
      })
      return (
          <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              // alignItems: 'center',
              backgroundColor: 'white',
              paddingTop: 40
          }}>
              { tabs }
          </View>
      )
  }
}


const SideMenu = createDrawerNavigator({
    IntroScreen: {
        screen: IntroScreen
    },
    OptionScreen: {
        screen: OptionScreen
    },
    PersonalScreen: {
        screen: PersonalScreen
    },
    EducationScreen: {
        screen: EducationScreen
    },
    BusinessScreen: {
        screen: BusinessScreen
    },
    AboutScreen: {
        screen: AboutScreen
    },
    CoreTeam: {
        screen: Team
    },
    Personal: {
        screen: Personal
    },
    Game: {
        screen: QuestionScreen
    },
    VideoSlide:{
        screen: VideoSlide
    },
    GuidedVideoScreen:{
        screen: GuidedVideos
    },
    LastVideoScreen:{
        screen: LastVideo
    },
    MiniGameScreen:{
        screen: MiniGames
    },
    ShareSkillScreen:{
        screen: ShareSkills
    },
    WhatDoYouNeedVideoScreen:{
        screen: WhatDoYouNeedVideo
    },
    LearnMoreScreen:{
        screen: LearnMore
    },
    SelectScreen:{
        screen: SelectScreen
    },
    CoreAloneScreen:{
        screen: CoreAloneScreen
    },
    SelectedPersonalScreen:{
        screen: SelectedPersonalScreen
    },
    SelectedEducationScreen:{
        screen: SelectedEducationScreen
    },
    SelectedBusinessScreen:{
        screen: SelectedBusinessScreen
    },
    EtiquetteScreen:{
        screen: EtiquetteScreen
    },
    HowToBuildScreen:{
        screen: HowToBuildScreen
    },
    StorytellingScreen:{
        screen: StorytellingScreen
    },
    MetaphorsScreen:{
        screen: MetaphorsScreen
    },
    MindGame: {
        screen: MindGameScreen
    }},
    {
        //Mis screeni expo kohe peale js-reloadi näitab:
        initialRouteName: 'IntroScreen',
        contentComponent: DrawerContainer
     }

);

class MainNavigator extends Component { 
  render() {
    return ( 
      <SideMenu />
    );
  }
}

export default MainNavigator;


