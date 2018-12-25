import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity
} from 'react-native';

const QuestionButton = (props) => {
        return (
            <View style={{ backgroundColor: '#00BFFF', width: 170, height: 70, marginTop: 30, justifyContent: 'center'}} >
                <TouchableOpacity
                    onPress={() => props.onPress()} 
                >
                    <Text style={{color:'white', fontSize: 20, fontFamily: 'Ubuntu', textAlign: 'center'}}>{props.answers}</Text>
                </TouchableOpacity>
            </View>
        );
    }
export default QuestionButton;


