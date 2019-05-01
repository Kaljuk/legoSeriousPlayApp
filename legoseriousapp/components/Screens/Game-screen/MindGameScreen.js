import React, { Component } from 'react';
import { View, Share, StyleSheet } from 'react-native';
import contents from '../../Contents';
import QuestionButtons from './Mindgame-question-components/QuestionsButtons';
import QuestionPicture from './Mindgame-question-components/QuestionPicture';

export default class MindGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      eventOver: false
    };
  }


  nextQuestion(){
    this.setState({index : this.state.index + 1})
    if(this.state.index >= 7){
      this.setState({eventOver: true})
    }
  }



  render() {
    const index = this.state.index < 6 ? this.state.index : 6
    const questions = contents.core.mindGame.questions[index].question
    const picture = contents.core.mindGame.questions[index].picture
    const answers = contents.core.mindGame.questions[index].answers

    return (
      <View style={styles.container}>
        {this.state.index < 7 && <QuestionPicture questions={questions} picture = {picture}/>}
        <QuestionButtons index = {this.state.index} answers = {answers} nextQuestion = {this.nextQuestion.bind(this)}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#505050',
    flex: 1,
    flexDirection: 'column',
}, 
})