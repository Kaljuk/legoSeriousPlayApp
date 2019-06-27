import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
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
            
            <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('OptionScreen')}>
                <Image style={{position: 'absolute', top: 200, left: 10, overflow: 'hidden',
                        
                }} source={require("./../../assets/pictures/Core.png")}></Image>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('PersonalScreen')}>
                <Image style={{position: 'absolute', top: 200, right: 10,
                    overflow: 'hidden',   
          
                    }} source={require("./../../assets/pictures/Personal.png")}></Image>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('EducationScreen')}>
                <Image style={{position: 'absolute', top: 400, left: 10,
                   overflow: 'hidden',
                        
                }} source={require("./../../assets/pictures/Educational.png")}></Image>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('BusinessScreen')}>
                <Image style={{position: 'absolute', top: 400, right: 10,
                   overflow: 'hidden', 
                        
                }} source={require("./../../assets/pictures/Business.png")}></Image>
            </TouchableWithoutFeedback>
        </View>
    );
  }
}
