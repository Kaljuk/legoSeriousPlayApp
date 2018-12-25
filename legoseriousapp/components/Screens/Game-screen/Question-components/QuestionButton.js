import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity
} from 'react-native';

class QuestionButton extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const enabled = this.props.enabled || false;
        const callable = (enabled==true && this.props.callable)? this.props.callable : (()=>console.log('question button missing callable'))
        const color = (enabled == false)? 'gray': '#00BFFF'; //ternary operator
        const text = (this.props.text)? this.props.text: 'vastus puudub';
        return (
            <View style={{ backgroundColor: color, width: 170, height: 70, marginTop: 30, justifyContent: 'center'}} >
                <TouchableOpacity onPress={() => callable()}>
                    <Text style={{color:'white', fontSize: 20, fontFamily: 'Ubuntu', textAlign: 'center'}}>{text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default QuestionButton;


