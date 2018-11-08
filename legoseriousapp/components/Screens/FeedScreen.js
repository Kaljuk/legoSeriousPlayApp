import React, { Component } from 'react';
import {
    View, 
    StyleSheet,

    Image, ImageBackground, 
    Text,
    Button,
    TouchableHighlight,
    
    ScrollView,
    Dimensions
} from 'react-native';

import { 
    Video 
} from 'expo';

const { width } = Dimensions.get("window");

class FeedBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imgUrl = 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

        return (
            <View style={ styles.FeedBox }>
                {/* <Image style={styles.FeedBoxPicture} source={{ uri: imgUrl }}> </Image> */}
                <ImageBackground style={styles.FeedBoxPicture} source={{ uri: imgUrl }}></ImageBackground>
                <View style={styles.FeedBoxPictureTextBox}>
                    <Text style={ styles.FeedBoxPictureText }>{this.props.title.toUpperCase() || "Feed Content"}</Text>
                </View>
            </View>
        )
    }
}

class VideoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldPlay: true
        }
        this.playVideo = this.playVideo.bind(this);
    }
    playVideo() {
        console.log(this.state.shouldPlay? 'Pausing' : 'Continue playing');
        this.setState({shouldPlay: !this.state.shouldPlay});
    }

    render() {
        const imgUrl = 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

        return (
            <View style={ styles.FeedBox }>
                {/* <Image style={styles.FeedBoxPicture} source={{ uri: imgUrl }}> </Image> */}
                <TouchableHighlight onPress={ () => this.playVideo() }>
                    <Video
                        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                        shouldPlay
                        resizeMode="cover"
                        style={{ width, height: 300, backgroundColor: 'red' }}
                    />
                </TouchableHighlight>
                <View style={styles.FeedBoxPictureTextBox}>
                    <Text style={ styles.FeedBoxPictureText }>Video Content</Text>
                </View>
            </View>
        )
    }
}



export default class FeedScreen extends Component {
    constructor(props) {
        super(props);

        this.playGame = this.playGame.bind(this);
    }

    playGame() {
        this.props.navigation.navigate('Game');
    }

    render() {
        const data = [
            {title: "Mind game"}, 
            {title: "practical game"},
            {title: "Some other content"}
        ];
        const currentFeed = data.map( (d, key) => {
            return (
                <FeedBox key={key} title={d.title} />
            )
        })
        return (
            <View>
                <ScrollView contentContainerStyle={ styles.container }>
                    { currentFeed }
                    {/* <VideoBox /> */}
                </ScrollView>

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