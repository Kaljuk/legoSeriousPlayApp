import React, { Component } from 'react';
import { View } from 'react-native';
import QuestionButton from './QuestionButton';

class QuestionButtons extends Component {
    constructor(props){
        super(props);
        this.state={
            firstAnswered: !(props.answers.length > 1) //true
            // nextQuestion: !(props.answers.length > 1) //false
        }
        console.log('refresh');
    }
    componentWillReceiveProps(props){
        this.setState({
            'firstAnswered': !(props.answers.length > 1) //true
        })
    }
    answerQuestion(){
        console.log('answered',this.state.firstAnswered)
        if(this.state.firstAnswered){
            this.props.onPress()
        }else{
            this.setState({'firstAnswered': true})
        }
    }
    render(){
        const answers = this.props.answers || [];
        const buttons = answers.map((answer, id)=>{
            const button = (
                <QuestionButton key= {id} 
                enabled={false}
                answers={answer.text}
                callable={()=>console.log('nupu vajutus')}
                />
            )
            return button;

        })
        const pressFirstButton = !(this.state.firstAnswered);
        const onlyOneAnswer = !(this.props.answers.length>1);
        const moreThanOneButton = (answers.length > 1);
        const firstButtonPressed= (this.state.firstAnswered);

        const firstText = (answers.length > 0)?answers[0].text:'teks puudub';
        const secondText = (answers.length > 1)?answers[1].text:'teks puudub';
        const buttonss = (
            <View>
                <QuestionButton enabled={pressFirstButton || onlyOneAnswer} callable={()=>this.answerQuestion()} text={firstText} />  
                {moreThanOneButton && <QuestionButton enabled={firstButtonPressed} callable={()=>this.answerQuestion()} text={secondText}/>}
            </View>
        )
        
        
        console.log('fa',this.state.firstAnswered)
    return (
        <View>
            { buttonss }
        </View>
    );
    } 
}
export default QuestionButtons;



