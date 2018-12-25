import React, { Component } from 'react';
import {
    View, 
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';
import contents from '../../Contents';
import QuestionBox from './Question-components/QuestionBox';
import QuestionButtons from './Question-components/QuestionButtons'

export default class QuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            item: 0
        }
    }
    answerQuestion = () => {
        this.setState({'item': this.state.item + 1})
    }   
    render() {
        
        const questions = this.props.questions || contents.core.collabGame.questions;
        const currentQuestion = questions[this.state.item]
        const question = currentQuestion.question;
        const answers = currentQuestion.answers;
        console.log("vastused",answers);
        return (
            <View style={styles.container}>
                <QuestionBox question={question} />
                <QuestionButtons answers={answers} onPress={this.answerQuestion}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#505050',
        flex: 1,
        flexDirection: 'column',
    },
})