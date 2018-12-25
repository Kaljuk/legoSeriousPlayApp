import React, { Component } from 'react';
import {
    View, 
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

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
        let Questions = 
        [
            {
            question: 'Build a tower with 5 blocks',
            answers: [{text: "It's ready"}] 
            },
            {
            question: 'Now pass it to the next person to you',
            answers: [{text: 'OK!'}, {text: "Got it!"}]
            },
            {
            question: 'Tell a story about the building',
            answers: [{text: "It's done"}]
            },
            {
            question: 'Change the building so that it is taller',
            answers: [{text: "It's done"}]
            },
            {
            question: 'Ask the next person to close their eyes \n\n Do 3 changes on the building',
            answers: [{text: "It's done"}]
            },
            {
            question: 'Now, pass it to the person next to you! \n\n Ask them to explain the building while blindfolded',
            answers: [{text: 'OK!'}]
            },            
            {
            question: 'Ask them to open their eyes',
            answers: [{text: 'Reveal all the instructions'}]
            },            
            {
            question: 'Instruction recieved: \n\n1. Build a tower with 10 bricks \n2. Tell a story about the building \n3. Change the building so that is taller \n4. Do 3 changes on the building \n5. Explain when blindfolded'
            ,
            answers: [{text:'Quit'}, {text: 'Play again!'}]
            },
                
            
            
        ]
        const currentQuestion = Questions[this.state.item]
        const question = currentQuestion.question;
        const answers = currentQuestion.answers;
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