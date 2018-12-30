import React, { Component } from 'react';
import { View } from 'react-native';
import QuestionButton from './QuestionButton';

class QuestionButtons extends Component {
    constructor(props){
        super(props);
        this.state={
            firstAnswered: !(props.answers.length > 1) //true
        }
        
        this.answerQuestion = this.answerQuestion.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({
            'firstAnswered': !(props.answers.length > 1) //true
        })
    }
    answerQuestion(isLast=false, index){
        console.log('answered',this.state.firstAnswered)
        if(!isLast) {
            if(this.state.firstAnswered){
                this.props.onPress()
            }else{
                this.setState({'firstAnswered': true})
            }
        } else {
            this.props.onPress(index)
        }
    }
    render(){
        const answers = this.props.answers || [];
        const pressFirstButton = !(this.state.firstAnswered);
        const onlyOneAnswer = !(answers.length>1);
        const moreThanOneButton = (answers.length > 1);
        const firstButtonPressed= !pressFirstButton;
 
        const firstText = (answers.length > 0)?answers[0].text:'teks puudub';
        const secondText = (answers.length > 1)?answers[1].text:'teks puudub';

        const isLastQuestion = this.props.isLastQuestion || false; 
        // const lastQuestion = (isLastQuestion)? 
        const buttonss = (
            <View>
                {/* Share button - when can share & is last question */}
                { isLastQuestion && <QuestionButton enabled={true} callable={()=>this.answerQuestion(isLastQuestion, 3)} text={"Share results?"}/>}
                {/* First Button */}
                <QuestionButton enabled={pressFirstButton || onlyOneAnswer} callable={()=>this.answerQuestion(isLastQuestion, 1)} text={firstText} />  
                {/* Second Button */}
                {moreThanOneButton && <QuestionButton enabled={firstButtonPressed || isLastQuestion} callable={()=>this.answerQuestion(isLastQuestion, 2)} text={secondText}/>}
            </View>
        )        
        //logs

    return (
        <View>
            { buttonss }
        </View>
    );
    } 
}
export default QuestionButtons;



