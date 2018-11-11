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

import Icon from 'react-native-vector-icons/Ionicons';

// My Modules
import Slide from '../Slide';


class SlideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.bw = new Animated.Value(0);

    }

    

    render() {
        const {
            navigation,
            renderIcon,
            activeTintColor,
            inactiveTintColor,
            jumpToIndex
        } = this.props;
        
        const { routes } = (navigation || {}).state || {};
        
        Animated.timing(this.state.bw, { 
            toValue: 2,
            duration: 1500,
            delay: 1000
        }).start();

        // console.log("Routes:", routes, navigation.state.index)
        // console.log("Nav:", navigation)
        
        return (
            <View style={ styles.navContainer }>
                <Animated.View style={[styles.navOuterCircle, { borderWidth: this.state.bw } ]}>
                    <View style={ styles.navInnerCircle }></View>    
                { (routes || []).map((route, id) => <Text style={{ backgroundColor: ((navigation.state.index === id) ? 'blue' : 'green'), textAlign: 'center' }} key={id}>Sisukas {route.routeName} {navigation.state.index}</Text>)}
                </Animated.View>
            </View>
        )
    }
}

const tintColor = '#6666C1';
const SlideNavigation = createMaterialTopTabNavigator({
    Slide1: {
        screen: Slide
    },
    Slide2: {
        screen: Slide
    }

},{
    initialRouteName: 'Slide1',
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
    tabBarComponent: (props) => <SlideNav {...props} />
});






export default class SlideScreen extends Component {
    constructor(props) {
        super(props);
    }

    nextSlide() {
      
    }
    render() {
        return (
            <View style={{ backgroundColor: 'red', flex: 1 }}>
                <SlideNavigation></SlideNavigation>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    navContainer: { 
        backgroundColor: 'blue',
        position: "absolute",
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        bottom: 0
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