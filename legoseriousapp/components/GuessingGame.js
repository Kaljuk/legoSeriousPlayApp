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
        
        const picUrl = 'https://www.lego.com/r/www/r/seriousplay/-/media/serious%20play/shared/idea-0534.png?l.r2=35248712';

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
                        <Text>Options</Text>
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