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

// For sharing results / score on facebook
import {
    ShareDialog
} from 'react-native-fbsdk'



export default class QuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: 0
        }
    }
    answerQuestion = (index = 0) => {
        if(index == 1){
            this.setState({index:0})
        }else if(index == 2){
            const callabale = this.props.quit || (()=>console.log('quit missing'))
            callabale();
        }else{
            this.setState({'index': this.state.index + 1})
        }
        
    }   

    shareResults(results) {
        /** @todo: Create sharing function */
        // ShareDialog.canShow({
        //     contentType: 'link',
        //     contentUrl: 'http://seriousplaypro.com/',
        //     contentDescription: ''
        // })
    }

    render() {
        console.log('do we have quit?', (this.props.quit))
        const questions = this.props.questions || contents.core.collabGame.questions;
        const lastQuestion = ((questions.length - 1) > this.state.index)? false: true;
        const currentQuestion = questions[this.state.index]
        const question = currentQuestion.question;
        const answers = currentQuestion.answers;
        console.log("vastused",answers);
        return (
            <View style={styles.container}>
                <QuestionBox question={question} />
                <QuestionButtons isLastQuestion = {lastQuestion} answers={answers} onPress={this.answerQuestion}/>
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