import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity
  } from 'react-native';

  


export default class Avatar extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', flexDirection:"column", marginTop: '20%'}}>
                <Text style={{fontSize: 24, color:'#979797', fontWeight:'bold'}}>
                    PROFILE
                </Text>
                <Image 
                    style={{width: 173, height: 291, padding: 20, marginTop: '8%'}}
                    source={require('./../../assets/avatar.png')}
                 />
                <TouchableOpacity style={{width: '45%', height: 50, backgroundColor: '#1EB5F6', marginTop: '5%'}}>
                    <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                        <Text style={{color:'white', textAlign:'center'}}>
                            Edit Profile
                        </Text>
                    </View>
                </TouchableOpacity>
                <View>
                </View>
            </View>
        );
    }
}

