import React, { Component } from 'react';
import {
    StyleSheet,
    View, 
    Text,
} from 'react-native';

const QuestionBox = (props) => {
    return (
        <View stlye={{
            marginTop: 120,
            backgroundColor: 'red',
        }}>
            <Text style=
            {{
                marginTop: 30,
                marginLeft: 35,
                marginRight: 35,
                fontSize: 25, 
                textAlign: 'center', 
                fontFamily:'Ubuntu',
                color: 'white',
            }}>{props.question}</Text>
        </View>
    );
}
export default QuestionBox;


