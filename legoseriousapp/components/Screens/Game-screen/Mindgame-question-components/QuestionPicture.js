import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class QuestionPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let picture = this.props.picture
    console.log(picture)
    return ( 
      <View>
        <View style = {{marginTop: '10%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style= {{fontSize: 17, color: 'white'}}>{this.props.questions}</Text>
        </View>
        <View>          
           <Image style = {{marginTop: '5%', width:400, height:300}} source = {picture}></Image> 
        </View>
      </View>
    );
  }
}
