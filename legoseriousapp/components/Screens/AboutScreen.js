import React, {Component} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <View style={{flex:1, backgroundColor: '#E5E5E5', justifyContent:'left', alignItems:'left'}}>
            <Icon name='three-bars' size={30} color='#000' style={{marginTop: 35, marginLeft:'4%'}}/>
            <Text style={{fontSize: 45, color: '#979797', marginTop:'1%', marginLeft:'4%', fontWeight:'500'}}>ABOUT</Text>
            <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%'}}>This APP is a tool to help to teach about using open source LEGO Serious Play methodology. The creators of this APP are not affiliated with LEGO group. LEGO and Serious Play are the trademarks of LEGO group, which have been used according to Open Source guidelines.</Text>
            <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%'}}>The creators of this APP are not affiliated with LEGO group. LEGO and Serious Play are the trademarks of LEGO group, which have been used according to Open Source guidelines.</Text>
            
            <View style={{justifyContent:'center', alignItems:'center', }}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Team')}>
                  <Text style={{
                    fontSize: 14, color: 'white', 
                    marginBottom: '5%',marginTop: '5%',borderWidth: 1, 
                    borderRadius: 10,
                    borderColor: 'white',
                    width: '100%',
                    padding: 10,
                    }}>
                    Read about LEGO® Serious Play® Open Source
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Team')}>
                  <Text style={{
                    fontSize: 14, color: 'white',
                    borderWidth: 1, borderRadius: 10, borderColor: 'white', width: '100%',
                    paddingTop: 10, paddingBottom:10, paddingLeft:29, paddingRight:29 }}
                    >
                   SeriousPlayPro - International Facilitators Community
                  </Text>
              </TouchableOpacity>
              </View>
              <View style={{justifyContent:'left', alignItems:'left'}}>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Concept: Marko Rillo and Martin Sillaots</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Design: Esin Kalay and Mariam Margishvili</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Content: Dania Castillo</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>Coding: Erik Kaljumäe and Paul Oskar Soe</Text>
                <Text style={{fontSize:14, color: '#979797', marginTop: '2%', marginLeft:'4%', justifyContent:'left', alignItems:'left'}}>AND MANY OTHER TLU ELU PROJECT MEMBERS WHO WILL BE ADDED TO THIS LIST LATER ...</Text>
             </View>
        </View>
    );
  }
}
