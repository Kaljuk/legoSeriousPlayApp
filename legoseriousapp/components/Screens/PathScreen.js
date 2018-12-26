/** Greeting and Branch Selection Screen */

import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity

} from 'react-native';

// // My components

// Screen to select path
import PathSelectionScreen from './SubScreens/PathSelectionScreen';
// Screen to select path content
import PathContentSelectionScreen from './SubScreens/PathContentSelectionScreen';
// Path Content Screen
import PathContentScreen from './SubScreens/PathContentScreen';

import Icon from 'react-native-vector-icons/Octicons';
const MenuIcon = () => (
  <Icon 
    name='three-bars' 
    size={30} 
    color='#000' 
  />
);

export default class PathsScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        pathChosen: true,
        showContent: false,

        contentType: null,
        contentData: null
      }
      this.openNavigator = this.openNavigator.bind(this);
      this.selectContent = this.selectContent.bind(this);
      this.hideContent   = this.hideContent.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ showContent: false })
  }

  openNavigator() {
    console.log('Opening');
    if ((this.props.navigation || {}).navigate) {
      this.props.navigation.openDrawer() 
    }  
    
    // this.props.navigator.navigate('DrawerOpen')
  }

  selectContent(contentType=null) {
    this.setState({ contentType: contentType, showContent: true });
  }

  showContent() {
    this.setState({ showContent: true });
  }
  hideContent() {
    this.setState({ showContent: false });
  }  

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', {msg: 'NoData'});
    const { title, mainColor, secondaryColor, content } = data;//this.props.navigation.state.params;

    const choosePath = navigation.getParam('choosePath', (() => console.log('No Choose path function')));

    console.log(`Title: ${title}`);
    
    const description = 'Pellentesque tempus elit sed ante. Nunc am lectus at egestas laoreet. Sed your purpose, tempus elit sed.';

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          {/* SideMenu button */}
          <SideMenuButton callable={ this.openNavigator } />

          { !this.state.pathChosen && 
              // Path Selection
              <PathSelectionScreen choosePath={choosePath} description={description} />
            ||
              (// Path Content Selection
              !this.state.showContent &&
              <PathContentSelectionScreen title={title} mainColor={mainColor} secondaryColor={secondaryColor} content={ content } selectContent={ this.selectContent }/>
              )
            || 
              // Path Content
              <PathContentScreen contentType={ this.state.contentType } contentData={ this.state.contentData } quit={ this.hideContent } />
          }
        </View>
    )
  }
}

class SideMenuButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const callable = this.props.callable || (() => console.log('SideMenuButton: Callable'));

    return (
      <View style={{ 
        // flex: 0.1, 
        paddingTop: '25%',
        paddingLeft: 16,//'10%',
        // backgroundColor: 'red', 
        justifyContent: 'center', 
        height: '15%',
        width: '30%',
        position: 'absolute',
        zIndex: 3
      }}>
      <TouchableOpacity style={{ width: '100%', height: '100%' }}
        onPress={() => callable()}
      >
        <View style={{
          height: '100%',
          width: '100%',
          // paddingLeft: "4%",
          paddingTop: 10
          // backgroundColor:'green',
          // color: 'grey'
        }}>
          <MenuIcon />
        </View>
      
      </TouchableOpacity>
      </View>
    )
  }
}


const colors = {
  'whitish' : '#ffe4e1',


  'softRed' : '#ff7373',

  'solidBlue': '#0d6eb8',

  /** @todo: Use these colors (maybe day&night mode :) ) */
  // Day Mode White
  'shadyWhite': '#d4d2d4', // GreyerWhite
  'whityWhite': '#fefcfe', // Lighter white
  // Night Mode DarkBlue
  'smoothBlue': '#2a3444', // 
  // Sunny Yellow
  'sunnyYellow': '#fadb44',

  'muddyYellow': '#daa520',
  'muddyLightBlue': '#718da5',

  'darkPurple' : '#220508',
  'darkishBlue': '#088da5',
  'darkGreen'  : '#052208',

}

