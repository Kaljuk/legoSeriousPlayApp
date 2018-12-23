import React, { Component } from 'react';
import {
    View, 
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';

export default class BranchSelection extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={ styles.container }>
                    <Text>BranchSelection</Text>
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