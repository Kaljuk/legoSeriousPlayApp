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
      const imgUrl = this.props.pictureURI || 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

      return (
        <View style={ [styles.FeedBox] }>
          {/* <Image style={styles.FeedBoxPicture} source={{ uri: imgUrl }}> </Image> */}
          <ImageBackground style={styles.FeedBoxPicture} source={{ uri: imgUrl }}></ImageBackground>
          
          <View style={styles.FeedBoxPictureTextBox}>
              <Text>{this.props.description || "Photo description"}</Text>
          </View>
        </View>
      )
  }
}

class SlideText extends Component {
  constructor(props) {
      super(props);
      this.prev = this.prev.bind(this);
  }

  prev() {
    if (this.props.prev) this.props.prev()
    else console.log("NO PREV")
  }

  render() {
    
      return (
        <View style={ styles.FeedBox }>
          <ScrollView style={{}}>
            <View style={[{ marginBottom: 50 }]}>
              {/* Title */}
              <Text style={[ /*styles.FeedBoxPictureText*/, { fontSize: 30, fontWeight: 'bold', textAlign: 'center' } ]}>{this.props.title || "Lorem Ipsum Title"}</Text>
              {/* Content */}
              <Text style={{ paddingHorizontal: "10%" }}>{this.props.text ||
                "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."              
              }</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor:'green' }}>
              
            <View style={{ width: "50%", height: 50}}>
                <TouchableOpacity  style={{ width: "100%", height: "100%", backgroundColor: '#9BBBD8', alignContent:'center', justifyContent: 'center' }} title="<" onPress={() => this.prev()}>
                    <Text style={{textAlign:'center'}}>{"<"}</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: "50%", height: 50}}>
                <TouchableOpacity  style={{ width: "100%", height: "100%", backgroundColor: '#9BBBD8', alignContent:'center', justifyContent: 'center' }} title="<" onPress={() => console.log('PREV')}>
                    <Text style={{textAlign:'center'}}>{">"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )
  }
}

export default class SlideScreen extends Component {
    constructor(props) {
        super(props);

    }

    nextSlide() {
      
    }

    render() {
        const data = [
            {title: "Mind game"}, 
            {title: "practical game"},
            {title: "Some other content"}
        ];
        const currentFeed = data.map( (d, key) => {
            return (
                <SlidePicture key={key} title={d.title} />
            )
        })
        return (
            <View>
                {/* { currentFeed } */}
                <SlidePicture></SlidePicture>
                <SlideText></SlideText>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingBottom: 100,
        paddingHorizontal: 15,
        // flex: 1,
        alignItems: 'center',
        // backgroundColor: '#F5F5F5',
        // paddingTop: 80,
        // paddingHorizontal: "4%"
    },

    FeedBox: {
        elevation: 2,
        // maxHeight: "60%",
        height: 300,
        width: "100%",
        paddingHorizontal: 15,
        paddingTop: 15,

        alignItems: 'center',
        marginTop: 20,

        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 1,
        borderWidth: 0
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