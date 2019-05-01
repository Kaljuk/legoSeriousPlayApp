import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ShareScreen from './../../ShareScreen';
export default class QuestionButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const firstAnswer = this.props.answers[0].text
    const secondAnswer = this.props.answers[1].text
    const thirdAnswer = this.props.answers[2].text
    const fourthAnswer = this.props.answers[3].text
    const answers = 
    (
      <View>
      <TouchableOpacity onPress={() => this.props.nextQuestion()}>
      <View style={{ backgroundColor: 'white', width: 200, height: 50, marginTop: 20, justifyContent: 'center'}} >
            <Text style={{fontSize: 20, textAlign: 'center'}}>{firstAnswer}</Text>
      </View>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => this.props.nextQuestion()}>
      <View style={{ backgroundColor: 'white', width: 200, height: 50, marginTop: 20, justifyContent: 'center'}} >
            <Text style={{fontSize: 20, textAlign: 'center'}}>{secondAnswer}</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => this.props.nextQuestion()}>
      <View style={{ backgroundColor: 'white', width: 200, height: 50, marginTop: 20, justifyContent: 'center'}} >
            <Text style={{fontSize: 20, textAlign: 'center'}}>{thirdAnswer}</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => this.props.nextQuestion()}>
      <View style={{ backgroundColor: 'white', width: 200, height: 50, marginTop: 20, justifyContent: 'center'}} >
            <Text style={{fontSize: 20, textAlign: 'center'}}>{fourthAnswer}</Text>
      </View>
      </TouchableOpacity>
      </View>
)
    console.log(this.props.index);
    return (
      <View >
        {this.props.index > 6 && <ShareScreen/> || answers } 
      </View>
    );
  }
}
