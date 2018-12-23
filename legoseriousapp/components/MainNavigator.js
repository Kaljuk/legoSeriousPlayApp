import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,

    TouchableHighlight,

    Dimensions
} from 'react-native';

import {
    createDrawerNavigator
} from 'react-navigation';

// // Screens
// Introductary slides
import LoadingScreen from './Screens/LoadingScreen';
// Slides @todo:
import SlideScreen from './Screens/SlideScreen';
// Home @todo:
import HomeScreen from './Screens/HomeScreen';
// Feed @todo:
import FeedScreen from './Screens/FeedScreen';

import GuessingGame from './GuessingGame';

// Greeting and Branch Selection Screen
import PathsScreen from './Screens/PathScreen';
import QuestionScreen from './Screens/Game-screen/QuestionScreen';


const DEVICE_WIDTH = Dimensions.get('window').width;


function TargetRect(props) {
    // console.log(props)
    return (
        <View>
            <TouchableHighlight onPress={ () => (props.onPress)?props.onPress() : console.log('Pressed', props.text)}>
                <View  style={[ styles.targetBox, { borderColor: props.color } ]}>
                    <View style={ [styles.targetBoxFlag, { backgroundColor: props.color }]}></View>
                    <Text style={ styles.targetBoxText }>{props.text}</Text>
                </View>
            </TouchableHighlight>
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
            { color: "#003DA5", text: "Business",  target: 'Home' },
            { color: "#E93CAC", text: "Slides|Education", target: 'Slides' }, // #ECB3CB
            { color: "#A2E4B8", text: "Branches",  target: 'Branches' },
            { color: "#FFCD00", text: "Core", target: 'Feed' },
            { color: "#192837", text: "Load", target: 'Loading' }
        ];

        const menuTabs = menuTabData.map( (data, id) => {
            // console.log(data.target)
            return (
                <View key={id} style={{paddingTop: 10}}>
                    <TargetRect color={ data.color } text={ data.text } onPress={() => navigation.navigate(data.target)}/>
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
    Loading: {
        screen: LoadingScreen
    },
    Home: {
        screen: HomeScreen
    },
    Feed: {
        screen: FeedScreen
    },
    Game: {
        screen: GuessingGame
    },
    Slides: {
        screen: SlideScreen
    },
    Branches: {
        screen: QuestionScreen
    },
    /** Greeting and Branch Selection Screen */
    Paths: {
        screen: PathsScreen
    }
}, {
    initialRouteName: 'Branches',
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
                <Navigator />
            </View>
        )
    }
}
