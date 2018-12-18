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

// My components
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
    const { navigation } = this.props;
    const { content } = [];//this.props.navigation.state.params;
    console.log('proPPeS', this.props );
    console.log('Params', navigation.getParam('test', 'NO-ID') );
    

    const description = 'Pellentesque tempus elit sed ante. Nunc am lectus at egestas laoreet. Sed your purpose, tempus elit sed.';

    return (
        <View style={{ 
          backgroundColor: '#F4F4F4', 
          flex: 1, flexDirection: 'column'
        }}>
          {/* SideMenu button */}
          <SideMenuButton callable={ this.openNavigator } />

          { true && 
              // <PathSelection />
              <PathContentScreen content={ content }/>
            ||
              <PathChoose description={description} />
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


// #InititalPathSelection
class PathSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Call to Action text
    const cta = 'What is your purpose?'
    // Paths to select
    // First row

    return (
      <View style={{ flex: 1 }}>
        {/* CTA */}
        <View style={{ 
          flex: 0.2, 
          flexDirection: 'column',
          justifyContent: 'flex-end'
          // backgroundColor: 'blue'
        }}>
          <Text style={{ fontFamily: 'Ubuntu', fontSize: 28, color: '#818181'  }}> { cta } </Text>
        </View>

        {/* Paths to Select */}
        <View style={{ 
          flex: 0.75, flexDirection: 'column', justifyContent: 'flex-end' 
          // backgroundColor: 'green' 
        }}>
          {/* First Row */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <PathBox color={'#F9C137'} title={'CORE'} />
            <PathBox color={'#88C9B3'} title={'PERSONAL'}/>
          </View>
          {/* Second Row */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <PathBox color={'#B06495'} title={'EDUCATIONAL'}/>
            <PathBox color={'#4F4F94'} title={'BUSINESS'}/>
          </View>
        </View>
      </View>
    )
  }
}


class PathBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const title = (this.props.title || 'title').toUpperCase();
    const color = this.props.color || '#F9C137';
    const callable = this.props.callable || ( () => console.log('PathBox: Pressed'));

    return (
      <View style={{
        width: 169, height: 169, 
        flexDirection: 'column',
        // backgroundColor: 'red',
        margin: 8
      }}>
        <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => callable()}>
        <View style={{ 
          width: '100%', height: '100%', 
          backgroundColor: color,
          borderRadius: 15,
          flexDirection: 'column'
        }}>
          {/* Path Name */}
          <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Ubuntu', fontSize: 20, color: 'white', fontWeight: 'bold' }}>{ title }</Text>
          </View>
          {/* Lego Person Icon */}
          <View style={{ flex: 0.7 }}>

          </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}







// #PathChoose
class PathChoose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Choose path function
    const choosePath = this.props.callable || (() => console.log('ChooseThisPath'))
    const title = (this.props.title || 'title').toUpperCase();
    const description = (this.props.description || 'Description');

    const skill = (this.props.skill || 'Skill Name');

    const mainColor = this.props.color || '#f9c137';
    return (
      <View style={{ 
        flex: 1, backgroundColor: mainColor
      }}>
        {/* Empty space */}
        <View style={{ flex: 0.15 }}></View>
        
        {/* Title & Description*/}
        <View style={{ 
          flex: 0.20, flexDirection: 'column', alignItems: 'flex-start', 
          // backgroundColor: 'blue',
          paddingLeft: 16,
          paddingRight: 50 
        }}>
          <Text style={{ 
            fontFamily: 'Ubuntu', fontSize: 50, textAlign: 'left', 
            color: 'white'//, backgroundColor: 'red' 
          }}>{ title }</Text>
          <Text style={{ 
            fontFamily: 'Ubuntu', fontSize: 18, textAlign: 'left', 
            color: 'white'//, backgroundColor: 'green' 
          }}>{ description }</Text>
        </View>

        {/* Icons with skill description & CHOOSE button*/}
        <View style={{ 
          flex: 0.48, flexDirection: 'column', 
          justifyContent: 'flex-start', //, alignItems: 'center'
          // backgroundColor: 'blue' 
        }}>
          {/* Circle */}
          <View style={{ 
            backgroundColor: 'black',
            alignSelf: 'center',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            height: 220, width: 220, 
            borderRadius: 150, 
            opacity: .2
          }}>
            <View style={{ backgroundColor: 'red', width: '40%', height: '40%' }}></View>
          </View>
          
          <View style={{ flexGrow: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ borderColor: 'white', borderWidth: 2, borderRadius: 10 /*, width: '100%', height: '100%' */ }}>
              <View style={{ marginVertical: 10, marginHorizontal: 18 }}>
                <Text style={{ fontFamily: 'Ubuntu', fontSize: 16, color: 'white', fontWeight: 'bold' }}>CHOOSE</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Path Mini Selection */}
        <View style={{ flex: 0.17, backgroundColor: 'white' }}>
          {/* OPTIONS */}
        </View>
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

