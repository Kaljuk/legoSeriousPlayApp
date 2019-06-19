import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';


//import { mainRoutes } from './Contents';

export default class OptionScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <View style={{flex:1, backgroundColor: '#F9C137'}}>
            <Icon name='three-bars' size={30} color='#000' style={{marginTop: 35, marginLeft:'4%'}}/>
            <Text style={{fontSize: 45, color: 'white', marginTop:'1%', marginLeft:'4%', fontWeight:'500'}}>CORE</Text>
            <Text style={{fontSize:14, color:'white', marginTop: '2%', marginLeft:'4%'}}>Learn the basics of LEGO Serious Play. How to use LEGO bricks for communication, creativity and new ideas</Text>
            <Image style={{justifyContent: 'center', alignItems:'center', marginLeft: '16%', marginTop:'7%', marginBottom:'7%'}} source={require("./../../assets/pictures/Group4.png")}></Image>
            <View style={{justifyContent:'center', alignItems:'center', }}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Team')}>
                  <Text style={{
                    fontSize: 25, color: 'white', 
                    marginBottom: '5%',marginTop: '5%',borderWidth: 1, 
                    borderRadius: 10,
                    borderColor: 'white',
                    width: '100%',
                    padding: 10,
                    }}>
                    ALONE
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Team')}>
                  <Text style={{
                    fontSize: 25, color: 'white',
                    borderWidth: 1, borderRadius: 10, 
                    borderColor: 'white', width: '100%',paddingTop: 10, paddingBottom:10, paddingLeft:16, paddingRight:16 }}
                    >
                    TEAM
                  </Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}
