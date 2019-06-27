import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class SelectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.openNavigator = this.openNavigator.bind(this);
  }

  openNavigator() {
    if ((this.props.navigation || {}).navigate) {
      this.props.navigation.openDrawer() 
    }  
  }

  render() {
    const callable = this.openNavigator || (() => console.log('SideMenuButton: Callable'));
    return (
        <View style={{backgroundColor: 'F4F4F4'}}>
            <TouchableOpacity onPress={() => callable()}>
                    <Icon name='three-bars' size={30} color='#000' style={{marginTop: 35, marginLeft:'4%'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 25, color: '#818181', marginTop:'10%', marginLeft:'4%', fontWeight:'500'}}>What is your purpose?</Text>
            
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('OptionScreen')}>
                <Image style={{position: 'absolute', top: 70, left: 10, overflow: 'hidden',
                        
                }} source={require("./../../assets/pictures/Core.png")}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('PersonalScreen')}>
                <Image style={{position: 'absolute', top: 70, right: 10,
                    overflow: 'hidden',   
          
                    }} source={require("./../../assets/pictures/Personal.png")}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EducationScreen')}>
                <Image style={{position: 'absolute', top: 270, left: 10,
                   overflow: 'hidden',
                        
                }} source={require("./../../assets/pictures/Educational.png")}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('BusinessScreen')}>
                <Image style={{position: 'absolute', top: 270, right: 10,
                   overflow: 'hidden', 
                        
                }} source={require("./../../assets/pictures/Business.png")}></Image>
            </TouchableOpacity>
        </View>
    );
  }
}
