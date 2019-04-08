import React, { Component } from 'react';
import {
    View, 
    Text,
} from 'react-native';

const QuestionBox = (props) => {
    return (
        <View>
            <Text style=
            {{
                marginTop: 30,
                marginLeft: 35,
                marginRight: 35,
                fontSize: 25, 
                textAlign: 'center', 
                color: 'white',
            }}>{props.question}</Text>
        </View>
    );
}
export default QuestionBox;


