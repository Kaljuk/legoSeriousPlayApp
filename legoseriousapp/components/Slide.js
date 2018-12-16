import React, { Component } from 'react';
import {
    View, 
    StyleSheet,

    Image, ImageBackground, 
    Text,
    Button,
    TouchableHighlight, TouchableOpacity,
    
    ScrollView,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get("window");



class SlidePicture extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    //   const imgUrl = this.props.pictureURI || 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

      return (
        <View style={[ styles.slidePictureContainer, { backgroundColor: this.props.color || 'white' } ]}>
          {/* <Image style={styles.FeedBoxPicture} source={{ uri: imgUrl }}> </Image> */}
          {/* <ImageBackground style={{ width: "100%", height: "100%", borderRadius: Math.round(Dimensions.get('window').height) }} source={{ uri: imgUrl }}></ImageBackground> */}
          {/* <View style={styles.FeedBoxPictureTextBox}>
              <Text>{this.props.description || "Photo description"}</Text>
          </View> */}
          {/* <View style={{ height: "100%", width: "100%", backgroundColor: 'red', borderRadius: Math.round(Dimensions.get('window').height) }}></View> */}
          { this.props.image && <Image style={{ width: "100%", height: "100%", resizeMode: 'cover', borderRadius: Math.round(Dimensions.get('window').height)/2 }} source={{ uri: this.props.image }} />}
        </View>
      )
  }
}

class SlideText extends Component {
  constructor(props) {
      super(props);
  }


  render() {
    
      return (
        <View style={ styles.FeedBox }>
          <ScrollView style={{}}>
            <View style={[{ marginBottom: 0 }]}>

              <Text style={[ { fontSize: 24, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Ubuntu', color: 'white', marginBottom: 20, marginTop: 15 } ]}>{this.props.title || "Lorem Ipsum Title"}</Text>
              <Text style={{ paddingHorizontal: "10%", textAlign: 'center', fontFamily: 'Ubuntu', color: 'white' }}>{this.props.text ||
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."              
              }</Text>
            </View>
          </ScrollView>
        </View>
      )
  }
}

export default class Slide extends Component {
    constructor(props) {
        super(props);
        // console.log('Show slide: ', props)
        // console.log("hihi:", props);
        
    }

    render() {
        const data = [
            {title: "LEGO® Serious Play®", text: 'Use LEGO Bricks to Make Sense of Yourself and Communicate Better with Others'}, 
            {title: "practical game"},
            {title: "Some other content"}
        ];
        const themeColor = this.props.color || "#7AC133";
        const circleColor= this.props.darkColor || "#5d9427";
        const pictureUrl = this.props.picture || 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

        const title = this.props.title || 'NoTitle';
        const text  = this.props.text  || 'NoText';

        return (
            <View style={[ styles.slideBox, { backgroundColor: themeColor || '#7AC133' } ] }>
                {/* { currentFeed } */}
                {/* SlidePicture makes it slow */}
                <SlidePicture color={circleColor} image={pictureUrl}></SlidePicture>
                <SlideText title={title} text={text} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    slideBox: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green',
        paddingTop: "15%"
        // backgroundColor: '#F5F5F5',
        // paddingTop: 80,
        // paddingHorizontal: "4%"
    },

    slidePictureContainer: {
        elevation: 2,
        // maxHeight: "60%",
        height: 335,
        width:  335,
        
        alignItems: 'center',
        // marginTop: "15%",

        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: Math.round(Dimensions.get('window').height/2),
        borderWidth: 1
    },

    FeedBoxPicture: {
        // margin: "3%",
        // resizeMode: 'cover',
        backgroundColor: 'white',
        height: "90%",
        width: "100%"
    },
    FeedBoxPictureTextBox: {
        height: "100%",
        width: "100%"
    }, 
    FeedBoxPictureText: {
        height: "100%", 
        width: "100%", 
        fontSize: 24, 
        fontWeight: 'bold', 
        // backgroundColor: 'green', 
        alignContent: 'center', 
        justifyContent: 'center' 
    }
})