/** Greeting and Branch Selection Screen */

import React, { Component } from 'react';
import {
    View, 
    StyleSheet,

    Image, ImageBackground, 
    Text,
    Button,
    TouchableHighlight, TouchableOpacity

} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
const MenuIcon = () => (
  <Icon 
    name='three-bars' 
    size={30} 
    color='#000' 
  />
);


export default class BranchScreen extends Component {
  constructor(props) {
      super(props);

      this.openNavigator = this.openNavigator.bind(this);
  }

  openNavigator() {
    console.log('Opening');
    if ((this.props.navigation || {}).navigate) {
      this.props.navigation.openDrawer() 
    }  
    
    // this.props.navigator.navigate('DrawerOpen')
  }

  render() {

      return (
          <View style={{ 
            backgroundColor: '#F4F4F4', 
            flex: 1, flexDirection: 'column',
            paddingTop: 20
          }}>
            {/* SideMenu button */}
            <View style={{ 
              flex: 0.1, 
              paddingLeft: '4%',
              // backgroundColor: 'red', 
              justifyContent: 'center', width: '100%'}}>
            <TouchableOpacity style={{ width: '100%', height: '100%' }}
              onPress={() => this.openNavigator()}
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

            
            {/* Purpose */}
            <View style={{ 
              flex: 0.2, 
              justifyContent: 'center',
              paddingLeft: "4%"
            }}>
              <Text style={{
                fontFamily: 'Ubuntu',
                fontSize: 28,
                color: '#818181'
              }}> What is your purpose, </Text>
              <Text style={{
                fontFamily: 'Ubuntu',
                fontSize: 28,
                color: '#818181'
              }}> tempus elit sed? </Text>
            </View>


            {/* Options */}
            <View style={{ 
              flex: 0.7, flexDirection: 'column', 
              // backgroundColor: 'blue',
              padding: 5, paddingTop: 20
            }}>
              {/* First row */}
              <View style={{ 
                flexDirection: 'row', justifyContent: 'space-evenly'
                // ,backgroundColor: 'green' 
              }}>
                <BranchBox color={'#F9C137'} title={'CORE'} />
                <BranchBox color={'#88C9B3'} title={'PERSONAL'}/>
              </View>
              {/* Second row */}
              <View style={{ 
                flexDirection: 'row', justifyContent: 'space-evenly'
                // ,backgroundColor: 'green' 
              }}>
                <BranchBox color={'#B06495'} title={'EDUCATIONAL'}/>
                <BranchBox color={'#4F4F94'} title={'BUSINESS'} />
              </View>
            </View>
          </View>
      )
  }
}


class BranchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const callable = this.props.callable || (() => console.log('Pressed'))

    return (
      <View style={{ 
        width: 169, height: 169, 
        // backgroundColor: this.props.color || '#F9C137',
        // borderRadius: 15,
        flexDirection: 'column',
        margin: 8
      }}>
      <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => callable()}>
      <View style={{ 
        width: '100%', height: '100%', 
        backgroundColor: this.props.color || '#F9C137',
        borderRadius: 15,
        flexDirection: 'column',
        // margin: 8
      }}>

        <Text style={{
          fontFamily: 'Ubuntu',
          fontSize: 20,
          color: this.props.fontColor || '#F4F4F4',
          flex: 0.3,
          textAlign: 'center',
          textAlignVertical: 'center'
          // ,backgroundColor: 'red'
        }}>{ this.props.title || 'CORE'}</Text>
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