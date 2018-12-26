import React, { Component } from 'react';
import {
    View, 
    StyleSheet,

    Text,

    Animated
} from 'react-native';

import {
    createMaterialTopTabNavigator,
} from 'react-navigation';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


// My Modules
import Slide from '../Slide';
// VideoSlide
import VideoSlide from './Slides/VideoSlide';

class SlideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.bw = new Animated.Value(0);

        
    }

    

    render() {
        
        console.log("NavState", this.props.navigationState.index);
        
        const currentPosition = this.props.navigationState.index;

        const dots = Array(this.props.navigationState.routes.length).fill(1)
            .map( (c, index) => {
                console.log(`Index: ${index} CurrentPos: ${currentPosition}`);
                
                return (
                    <Text key={ index }
                        style={{
                            fontSize: (index === currentPosition)? 60 : 40,
                            color: 'white'
                        }}
                    >.</Text>
                )
            })

        // const {
        //     navigation,
        //     renderIcon,
        //     activeTintColor,
        //     inactiveTintColor,
        //     jumpToIndex
        // } = this.props;
        // const { routes } = (navigation || {}).state || {};
        // Animated.timing(this.state.bw, { 
        //     toValue: 2,
        //     duration: 1500,
        //     delay: 1000
        // }).start();

        // console.log("Routes:", routes, navigation.state.index)
        // console.log("Nav:", navigation)
        
        return (
            <View style={ styles.navContainer }>
                <Text style={{ 
                    // backgroundColor: 'red',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontFamily: 'Ubuntu'
                }}> {dots} </Text>
                {/* <Animated.View style={[styles.navOuterCircle, { borderWidth: this.state.bw } ]}>
                    <View style={ styles.navInnerCircle }></View>    
                { (routes || []).map((route, id) => <Text style={{ backgroundColor: ((navigation.state.index === id) ? 'blue' : 'green'), textAlign: 'center' }} key={id}>Sisukas {route.routeName} {navigation.state.index}</Text>)}
                </Animated.View> */}
            </View>
        )
    }
}

const data = [
    {title: "LEGO® Serious Play®", text: 'Use LEGO Bricks to Make Sense of Yourself and Communicate Better with Others'}, 
    {title: "practical game"},
    {title: "Some other content"}
];
let slides = {};

Array(data.length).fill(1).map( (c, index) => {
    slides[`S${index}`] = {
        screen: Slide
    }
})

const tintColor = '#6666C1';
const SlideNavigation = createMaterialTopTabNavigator({
    // Slide1: { screen: Slide },
    // Slide2: { screen: Slide }
    ...slides}
    ,{
    initialRouteName: 'S0',
    //order: ['Feed', 'Groups', 'Tasks', 'Profile'],
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#1d4457',
        inactiveTintColor: '#b3d2ee',
        style: {
            backgroundColor: '#ddd'
        },
        showIcon: true,
        showLabel: false,
    },
    tabBarComponent: (props) => {
        // console.log(props)
        return <SlideNav {...props} />
    }
});






export default class SlideScreen extends Component {
    constructor(props) {
        super(props);
    }

    nextSlide() {
      
    }
    render() {
        const data = [
            {title: "LEGO® Serious Play®", text: 'Use LEGO Bricks to Make Sense of Yourself and Communicate Better with Others'}, 
            {title: "practical game"},
            {title: "Some other content"}
        ];

        return (
            <View style={{ backgroundColor: 'red', flex: 1 }}>
                {/* <VideoSlide /> */}
                <SlideNavigation screenProps={{ data }}></SlideNavigation>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    navContainer: { 
        // backgroundColor: 'blue',
        position: "absolute",
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        bottom: 30
    },
    navOuterCircle: {
        height: 20,
        width:  20,
        // backgroundColor: 'yellow',
        borderRadius: 90,
        borderWidth: 3,
        borderColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed'
    },
    navInnerCircle: {
        height: "50%",
        width:  "50%",
        backgroundColor: 'yellow',
        borderRadius: 90,
        borderWidth: 0,
        borderColor: 'brown'
    }
})