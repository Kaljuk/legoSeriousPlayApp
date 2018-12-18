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
import PathScreen from './Screens/PathScreen';


const DEVICE_WIDTH = Dimensions.get('window').width;


function TargetRect(props) {
    // console.log(props)
    return (
        <View>
            <TouchableHighlight onPress={ () => (props.onPress) ? props.onPress() : console.log('Pressed', props.text)}>
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
        this.state = {
            pressedTab: -1
        }
    }

    isHovering(tabId) {
        this.setState({ pressedTab: tabId })
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

        /** 
         * Profile   -> ProfileScreen
         * 
         * Core      -> PathScreen + props 
         * Personal  -> PathScreen + props
         * Education -> PathScreen + props
         * Business  -> PathScreen + props
         * 
         * Sound     -> (>NoPath<) + static mute button
         * 
         * About     -> AboutScreen
        */
        const routes = [
            // // Profile
            { 
                title: 'Profile', 
                screen: null, 
                mainColor: null, 
                secondaryColor: null,
                content: []
            },
            // // Paths
            // Core
            { 
                title: 'Core', 
                screen: 'Path', 
                mainColor: '#f9c137', 
                secondaryColor: '#bf942a',
                content: [ [{ title: 'Tutorial' }], [{ title: 'Video' }], [{ title: 'Infograpic' },{ title: 'Infographic' }], [{ title: 'Mind Game' },{ title: 'Collab Game' },{ title: 'Practical Game' }] ]
            },
            // Personal
            { 
                title: 'Personal', 
                screen: 'Path', 
                mainColor: '#88c9b3', 
                secondaryColor: '#699a89',
                content: [ [{ title: 'Tutorial' }], [{ title: 'Video' }], [{ title: 'Infograpic' },{ title: 'Infographic' }], [{ title: 'Mind Game' },{ title: 'Collab Game' },{ title: 'Practical Game' }] ]
            },
            // Education
            { 
                title: 'Education', 
                screen: 'Path', 
                mainColor: '#b06495', 
                secondaryColor: '#874d72',
                content: [ [{ title: 'Tutorial' }], [{ title: 'Video' }], [{ title: 'Infograpic' },{ title: 'Infographic' }], [{ title: 'Mind Game' },{ title: 'Collab Game' },{ title: 'Practical Game' }] ]
            },
            // Business
            { 
                title: 'Business', 
                screen: 'Path', 
                mainColor: '#4f4f94', 
                secondaryColor: '#3d3d72',
                content: [ [{ title: 'Tutorial' }], [{ title: 'Video' }], [{ title: 'Infograpic' },{ title: 'Infographic' }], [{ title: 'Mind Game' },{ title: 'Collab Game' },{ title: 'Practical Game' }] ]
            },
            // // Settings
            { 
                title: 'Settings', 
                screen: 'Settings', 
                mainColor: null, 
                secondaryColor: null,
                content: []
            }
            // // Sound

            // // About
        ]
        // console.log('Props', this.props);
        

        const menuTabs = menuTabData.map( (data, id) => {
            // console.log(data.target)
            return (
                <View key={id} style={{paddingTop: 10}}>
                    <TargetRect color={ data.color } text={ data.text } onPress={() => navigation.navigate(data.target)}/>
                </View>
            )
        })
        
        const tabs = routes.map( (route, id) => {
            console.log(`Route: ${route.title} Screen: ${route.screen}`);
            
            const navigateToRoute = route.screen && (() => navigation.navigate( route.screen, {test: 'sisukassisu'})) || (() => console.log('No Screen Assigned'));
            const isHighlighted = (id === this.state.pressedTab);
            const textColor = (isHighlighted) ? '#fff' : '#808080';
            return (
                <TouchableHighlight key={id} onPressIn={()=>this.isHovering(id)} onPressOut={()=>this.isHovering(-1)} onPress={() => navigateToRoute()} style={{ flex: 0.1, flexDirection: 'column', justifyContent:'center', backgroundColor: 'blue' }} underlayColor={ route.mainColor || '#808080' }>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 10, backgroundColor: 'red' }}>
                        {/* Icon / Logo */}
                        <View><Text> O </Text></View>
                        {/* Route Name */}
                        <Text style={{ fontFamily: 'Ubuntu', fontSize: 18, color: textColor }}>{ route.title }</Text>
                    </View>
                </TouchableHighlight>
            )
        })

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                // alignItems: 'center',
                backgroundColor: 'white',
                paddingTop: 40
            }}>
                { tabs }
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


// const Navigator = createDrawerNavigator({
//     Loading: {
//         screen: LoadingScreen
//     },
//     Home: {
//         screen: HomeScreen
//     },
//     Feed: {
//         screen: FeedScreen
//     },
//     Game: {
//         screen: GuessingGame
//     },
//     Slides: {
//         screen: SlideScreen
//     },
//     /** Greeting and Branch Selection Screen */
//     Paths: {
//         screen: PathsScreen
//     }
// }, {
//     initialRouteName: 'Paths',
//     contentComponent: DrawerContainer,
//     drawerWidth: DEVICE_WIDTH * 0.70
// })

const Navigator = createDrawerNavigator({
    LoadingScreen: {
        screen: LoadingScreen
    },
    Profile: {
        screen: LoadingScreen // ProfileScreen
    },
    Path: {
        screen: PathScreen
    },
    Settings: {
        screen: SlideScreen // SettingsScreen
    },
    About: {
        screen: PathScreen // AboutScreen
    },
    Game: {
        screen: GuessingGame // Game Screen
    }
}, {
    initialRouteName: 'Path',
    contentComponent: DrawerContainer,
    drawerWidth: DEVICE_WIDTH * 0.70
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
                <Navigator screenProps={{a: 'none'}}/>
            </View>
        )
    }
}
