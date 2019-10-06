import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native'

type ProgressBarProps = {
    title: string
    progress: string
}

export default class ProgressBar extends Component<ProgressBarProps> {
    constructor(props) {
        super(props)

        
    }

    render() {
        return (
            <View style={{marginTop: '10%'}}>
            <Text>{this.props.title}</Text>
            <View style= {{ backgroundColor: '#C4C4C4', width:280, height:30  }}>
                <View style={[styles.container, {width: this.props.progress}]} >
                    <Text>
                        {this.props.progress}
                    </Text>
                </View>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '0%',
        backgroundColor: '#1EB5F6', 
        height:'100%'
    }
})