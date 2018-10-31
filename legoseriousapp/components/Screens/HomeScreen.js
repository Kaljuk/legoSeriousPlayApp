import React, { Component } from 'react';
import {
    View, 
    Image, Text,
    StyleSheet,

    Button,

    TouchableHighlight
} from 'react-native';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.playGame = this.playGame.bind(this);
    }

    playGame() {
        this.props.navigation.navigate('Game');
    }

    render() {

        return (
            <View style={{ paddingTop: "10%" }}>
                <Text>HomeScreen</Text>
                <Button title="PlayGame" onPress={ () => this.playGame() }></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    
})