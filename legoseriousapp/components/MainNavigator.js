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


// Icons
import Icon from 'react-native-vector-icons/Octicons';
const TabIcon = (props={}) => (
  <Icon
    name={props.icon || 'person'} 
    size={30} 
    color={props.color || '#fff'} 
  />
);

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
// Games
import QuestionScreen from './Screens/Game-screen/QuestionScreen';

// // Data
import { mainRoutes } from './Contents';

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
            pressedTab: -1,
            selectedTab: -1
        }

        this.choosePath = this.choosePath.bind(this);
    }

    isHovering(tabId) {
        this.setState({ pressedTab: tabId })
    }

    choosePath(pathId=-1) {
        this.setState({ selectedTab: pathId })
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
        const routes = mainRoutes;
        

        const tabs = routes.map( (route, id) => {
            // console.log(`Route: ${route.title} Screen: ${route.screen}`);
            const isSelected    = (id === this.state.selectedTab);
            const isHighlighted = (id === this.state.pressedTab) || isSelected;
            
            const navigateToRoute = route.screen && (() => { 
                console.log("Routes",route);
                console.log('Navigating to', route.title);
                const data = {
                    title: route.title,
                    mainColor: route.mainColor,
                    secondaryColor: route.secondaryColor,
                    content: route.content
                }
                this.setState({ selectedTab: id })
                navigation.navigate( route.screen, { test: 'TestInject', data: data, choosePath: this.choosePath});
                navigation.closeDrawer();
            }) || (() => console.log('No Screen Assigned'));
            
            const textColor = (isHighlighted) ? '#fff' : '#808080';

            return (
                <TouchableHighlight key={id} 
                onPressIn={()=>this.isHovering(id)} 
                onPressOut={()=>this.isHovering(-1)} 
                onPress={() => navigateToRoute()} 

                underlayColor={ route.mainColor || '#808080' }
                style={{ 
                    flex: 0.15, flexDirection: 'column', justifyContent:'center',
                    backgroundColor: isSelected && route.mainColor || '#fff'
                    /*, backgroundColor: 'blue'*/
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10/*, backgroundColor: 'red'*/ }}>
                        {/* Icon / Logo */}
                        <View style={{ marginRight: 10 }}>
                            <TabIcon color={ textColor || '#4c4c4c'} icon={route.icon}/>
                        </View>
                        {/* Route Name */}
                        <Text style={{ 
                            fontFamily: 'Ubuntu', fontSize: 18, color: textColor,
                            textAlignVertical: 'center'
                        }}>{ route.title }</Text>
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
    // TEMP START
    Home: {
        screen: LoadingScreen // ProfileScreen
    },// TEMP END
    Profile: {
        screen: LoadingScreen // ProfileScreen
    },
    /** Greeting and Branch Selection Screen */
    Path: {
        screen: PathsScreen
    },
    Settings: {
        screen: SlideScreen // SettingsScreen
    },
    About: {
        screen: PathsScreen // AboutScreen
    },
    Branches: {
        screen: QuestionScreen
    },
    Game: {
        screen: QuestionScreen //GuessingGame // Game Screen
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
