import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class BusinessScreen extends React.Component {
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
        <View style={{flex:1, backgroundColor: '#4F4F94'}}>
            <TouchableOpacity onPress={() => callable()}>
                    <Icon name='three-bars' size={30} color='#000' style={{marginTop: 35, marginLeft:'4%'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 45, color: 'white', marginTop:'1%', marginLeft:'4%', fontWeight:'500'}}>BUSINESS</Text>
            <Text style={{fontSize:14, color:'white', marginTop: '2%', marginLeft:'4%'}}>Use LEGO Serious Play in organizations. Build teams, come up with strategies and new business ideas</Text>
            <Image style={{justifyContent: 'center', alignItems:'center', marginLeft: '16%', marginTop:'7%', marginBottom:'7%'}} source={require("./../../assets/pictures/Group43.png")}></Image>
            <View style={{justifyContent:'center', alignItems:'center', }}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SelectedBusinessScreen')}>
                  <Text style={{
                    fontSize: 25, color: 'white', 
                    marginBottom: '5%',marginTop: '5%',borderWidth: 1, 
                    borderRadius: 10,
                    borderColor: 'white',
                    width: '100%',
                    padding: 10,
                    }}>
                    CHOOSE
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('SelectScreen')}>
                  <Text style={{
                    fontSize: 25, color: 'white',
                    borderWidth: 1, borderRadius: 10, 
                    borderColor: 'white', width: '100%',paddingTop: 10, paddingBottom:10, paddingLeft:29, paddingRight:29 }}
                    >
                   BACK
                  </Text>
              </TouchableOpacity>
            </View>
        </View>
    );
  }
}
