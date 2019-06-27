import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class AboutScreen extends React.Component {
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
        <View style={{flex:1, backgroundColor: '#E5E5E5', justifyContent:'left', alignItems:'left'}}>
            <TouchableOpacity onPress={() => callable()}>
                    <Icon name='three-bars' size={30} color='#000' style={{marginTop: 35, marginLeft:'4%'}}/>
            </TouchableOpacity>
            
            <Text style={{fontSize: 45, color: '#979797', marginTop:'1%', marginLeft:'4%', fontWeight:'500'}}>ABOUT</Text>
            <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%'}}>This APP is a tool to help to teach about using open source LEGO Serious Play methodology. The creators of this APP are not affiliated with LEGO group. LEGO and Serious Play are the trademarks of LEGO group, which have been used according to Open Source guidelines.</Text>
            <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%'}}>The creators of this APP are not affiliated with LEGO group. LEGO and Serious Play are the trademarks of LEGO group, which have been used according to Open Source guidelines.</Text>
        
            <View style={{justifyContent:'center', alignItems:'center', marginLeft: '7%' }}>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://seriousplaypro.com/about/open-source/')}}>
                    <Text style={{
                      fontSize: 14, color: 'white', 
                      marginBottom: '7%',marginTop: '7%',borderWidth: 1,marginLeft: '0%', backgroundColor: '#1EB5F6',
                      paddingTop: 15, paddingBottom: 15,
                      borderRadius: 10,
                      borderColor: '#1EB5F6',
                      width: '100%',
                      padding: 10, overflow: 'hidden' }}
                      >
                      Read about LEGO® Serious Play® Open Source
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ ()=>{ Linking.openURL('http://seriousplaypro.com/')}}>
                    
                  <Text style={{
                    fontSize: 14, color: 'white',
                    borderWidth: 1, borderRadius: 10, width: '100%', borderColor: '#1EB5F6', backgroundColor: '#1EB5F6', marginLeft: '0%',
                    paddingTop: 15, paddingBottom:15, paddingLeft:45, paddingRight:45, width: '100%', overflow: 'hidden' }}
                    >
                   International Facilitators Community
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent:'left', alignItems:'left', marginTop:'5%'}}>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Concept: Marko Rillo and Martin Sillaots</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Design: Esin Kalay and Mariam Margishvili</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Content: Dania Castillo</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Coding: Erik Kaljumäe and Paul Oskar Soe</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '15%', marginLeft:'20%', justifyContent:'center', alignItems:'center'}}>© 2019 LSP app. All rights reserved.</Text>
                
             </View>
        </View>
    );
  }
}
