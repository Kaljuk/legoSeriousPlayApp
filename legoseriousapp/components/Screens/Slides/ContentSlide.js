/**
 * Slide that has picture and some text
 */
import React, { Component } from 'react';
import {
    View, 
    Text, Image,

    // For the circle
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const circleDiameter = screenWidth * 0.95;

export default class ContentSlide extends Component {
  constructor(props) {
      super(props);
  }

  render() {
      const mainColor = this.props.mainColor || "#7AC133";
      const secondaryColor = this.props.secondaryColor || "#5d9427";
      const pictureUrl = this.props.picture || 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

      const title = this.props.title || 'NoTitle';
      const text  = this.props.text  || 'NoText';

      return (
          <View style={{
            flex: 1, flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'blue', //|| mainColor,
            // paddingTop: "15%"
        }}>
              {/* { currentFeed } */}
              {/* SlidePicture makes it slow */}
              <SlidePicture color={secondaryColor} image={pictureUrl}></SlidePicture>
              {/* <SlideText title={title} text={text} /> */}
          </View>
      )
  }
}

// Picture part of the slide
class SlidePicture extends Component {
  constructor(props) {
      super(props);
  }
  render() {

      return (
        <View style={{ 
          flex: 0.65, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
          height: 100, width:"100%",
          backgroundColor: 'white' 
        }}>
          <View style={{
            width: circleDiameter, height: circleDiameter, 
            borderRadius: circleDiameter * 0.5,
            backgroundColor: 'red'
          }}></View>
        </View>
      )
  }
}