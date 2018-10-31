import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,

    Dimensions
} from 'react-native';

import {
    createDrawerNavigator
} from 'react-navigation';

// Screens
import HomeScreen from './Screens/HomeScreen';
import FeedScreen from './Screens/FeedScreen';
import GuessingGame from './GuessingGame';

const DEVICE_WIDTH = Dimensions.get('window').width;


function TargetRect(props) {
    return (
        <View style={[ styles.targetBox, { borderColor: props.color } ]}>
            <View style={ [styles.targetBoxFlag, { backgroundColor: props.color }]}></View>
            <Text style={ styles.targetBoxText }>{props.text}</Text>
        </View>
    )
}

class DrawerContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;
        const menuTabData = [
            { color: "#003DA5", text: "Business" },
            { color: "#E93CAC", text: "Education" }, // #ECB3CB
            { color: "#A2E4B8", text: "Personal" },
            { color: "#FFCD00", text: "Core" }
        ];
        const menuTabs = menuTabData.map( (data, id) => {
            return (
                <View key={id} style={{paddingTop: 10}}>
                    <TargetRect color={ data.color } text={ data.text }/>
                </View>
            )
        })
        return (
            <View style={ styles.container }>
                { menuTabs }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    targetBox: {
        height: 70, 
        width : 70,
        alignContent: 'center',
        borderRadius: 2,
        // borderColor: 'black',
        borderWidth: 2,

        paddingBottom: "30%",
        backgroundColor: '#fff'
    },
    targetBoxFlag: {
        height: "50%", 
        width: "100%"
    },
    targetBoxText: {
        height: "100%",
        width: "100%",
        // backgroundColor: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlignVertical: 'center',
        textAlign: 'center'        
    },
    
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      paddingTop: 80,
      paddingHorizontal: 5
    },
    uglyDrawerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#E73536',
      padding: 15,
      margin: 5,
      borderRadius: 2,
      borderColor: '#E73536',
      borderWidth: 1,
      textAlign: 'center'
    }
})

const Navigator = createDrawerNavigator({
    Home: {
        screen: FeedScreen
    },
    Game: {
        screen: GuessingGame
    }
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerContainer,
    drawerWidth: DEVICE_WIDTH * 0.25
})


export default class MainNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActivity: 'none'
        }


        console.log("loading")
    }

    render() {
        
        return (
            <View style={{ width: "100%", height: "100%", backgroundColor: '#fff'}}>
                <Navigator></Navigator>
            </View>
        )
    }
}
