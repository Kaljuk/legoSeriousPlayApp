import React, { Component } from 'react';
import { View } from 'react-native';
import QuestionButton from './QuestionButton';

class QuestionButtons extends Component {
    constructor(props){
        super(props);
        this.state={
            forward: !(props.answers.length > 1)
        }
    }
    forward(){
        this.setState({'forward': true})
    }
    render(){
        const buttons = this.props.answers.map((answer, id)=>{
            const button = (
                <QuestionButton key= {id} 
                onPress={this.props.onPress} 
                answers={answer} 
                forwardState = {this.forward}
                />
            )
            return button;
        })
    return (
        <View>
            {buttons}
        </View>
    );
    } 
}
export default QuestionButtons;



