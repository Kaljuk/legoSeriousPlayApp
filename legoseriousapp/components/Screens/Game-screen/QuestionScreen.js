import React, { Component } from 'react';
import {
    View, 
    StyleSheet,
    Text,
    ScrollView,
    // For sharing results / score on facebook
    Share
} from 'react-native';
import contents from '../../Contents';
import QuestionBox from './Question-components/QuestionBox';
import QuestionButtons from './Question-components/QuestionButtons'





export default class QuestionScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            index: 0,
            results: { test: "Produtive person" }
        }
        this.answerQuestion = this.answerQuestion.bind(this);
        this.shareResults   = this.shareResults.bind(this);
    }
    answerQuestion (index = 0) {
        if(index == 1) {
            this.setState({index:0})
        } else if(index == 2) {
           console.log('quit')
        } else if (index == 3) { // Share results
            console.log('Sharing results');
            
            this.shareResults();
        } else {
            this.setState({'index': this.state.index + 1})
        }
        
    }   

    shareResults = async () => {
        try {
          const result = await Share.share({
            title: 'LegoSeriousPlayTitle',
            message: 'LegoSeriousPlay app cool',
            url: 'http://seriousplaypro.com/'
          })
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    render() {
        console.log('do we have quit?', (this.props.quit))
        const questions = this.props.questions || contents.core.collabGame.questions;
        const lastQuestion = ((questions.length - 1) > this.state.index)? false : true;
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