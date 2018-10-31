import React, { Component } from 'react';
import {
    View, 
    Image, Text,
    StyleSheet,

    Button,

    TouchableHighlight
} from 'react-native';

import { 
    createSwitchNavigator
} from 'react-navigation'


export default class FeedBoxGallery extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imgUrl = 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

        return (
            <View style={ styles.FeedBox }>
                <Image style={styles.FeedBoxPicture} source={{ uri: imgUrl }}></Image>
                <Text>Feed Content</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 80,
        paddingHorizontal: "5%"
    },

    FeedBox: {
        height: "50%",
        width: "100%",
        
        alignItems: 'center',

        backgroundColor: 'grey',
        borderColor: 'black',
        borderRadius: 1,
        borderWidth: 2
    },
    FeedBoxPicture: {
        margin: "5%",
        resizeMode: 'cover',
        backgroundColor: 'white',
        height: "75%",
        width: "90%"
    }
})