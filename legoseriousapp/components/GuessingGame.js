import React, { Component } from 'react';
import {
    View, 
    Image, Text,
    StyleSheet,

    TouchableHighlight
} from 'react-native';


export default class GuessingGame extends Component {
    constructor(props) {
        super(props);

        this.endGame = this.endGame.bind(this);
    }

    endGame(data = {}) {
        this.props.navigation.navigate('Home', data);
    }

    render() {
        
        const picUrl = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/39762352_1043680182481202_1385387597345325056_o.png?_nc_cat=111&_nc_ht=scontent-arn2-1.xx&oh=38a7278b781cf2201013f75aa6ed6f60&oe=5C4B7FDF";

        return (
            <View style={ styles.GameView }>
                {/* Picture */}
                <View style={ styles.PictureBox }>
                    <TouchableHighlight onPress={() => console.log("Prssed picture")}>
                        <Image 
                            resizeMode={"cover"}
                            style ={{ width: "100%", height: "100%" }}
                            source={{uri: picUrl }} 
                            
                        />
                    </TouchableHighlight>     
                </View>
                {/* Options */}
                <View style={ styles.AnswerBox }>
                    <TouchableHighlight onPress={() => console.log("Prssed picture")}>
                        <Text>Option</Text>
                    </TouchableHighlight>     
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    GameView: {
        height: "100%",
        width: "100%",

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'yellow'

    },
    PictureBox: {
        width: "100%",
        height: "50%",
        
        backgroundColor: '#f2f2f2',
        marginTop: "15%",
        // marginHorizontal: 20,
        // paddingHorizontal: "5%",
        
        elevation: 2
    },
    AnswerBox: {
        width: "100%",
        height: "50%",

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'grey'
    },
    AnswerRow: {
        
    }
})