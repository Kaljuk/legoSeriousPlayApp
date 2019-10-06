import React, { Component } from 'react';
import {
    View, Text
  } from 'react-native';
  
import ProgressBar from './ProgressBar'


 

export default class ProgressBars extends Component {
  
    render() {
        
    let mockData = [
        {
            title: 'PRACTICAL',
            progress: '60%',    
        },
        {
            title: 'CREATIVE',
            progress: '20%'
        },
        {
            title: 'RATIONAL',
            progress: '0%'
        },
        {
            title: 'EMOTIONAL',
            progress: '20%'
        }
    ]
        
        return (
            <View style={{flex:1, alignItems:'center', flexDirection:"column", marginTop: '10%'}}>
                <Text>
                    PROGRESSBAR
                </Text>
                <View>
                    <View>
                        <ProgressBar title={mockData[0].title} progress={mockData[0].progress}/>
                        <ProgressBar title={mockData[1].title} progress={mockData[1].progress}/>
                        <ProgressBar title={mockData[2].title} progress={mockData[2].progress}/>
                        <ProgressBar title={mockData[3].title} progress={mockData[3].progress}/>
                    </View>
                </View>
            </View>
        );
    }
}
