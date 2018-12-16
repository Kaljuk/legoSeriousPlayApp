
import React, { Component } from 'react';
import {
    View, 
    StyleSheet,

    Image, ImageBackground, 
    Text,
    Button,
    TouchableHighlight, TouchableOpacity

} from 'react-native';

// LazyLogging
const log = console.log;


export default class PathContentScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // Title of the current path
        const title = this.props.title;
        // Icon = picture on the content button, isNew: has the user clicked on it before?
        const rowOne = [{ name: 'Tutorial', icon: null, isNew: false }]
        const rowTwo = [{ name: 'Bricks', icon: null, isNew: true }, { name: 'Collab Game', icon: null, isNew: true }]
        const fillerContent = [rowOne, rowTwo];

        const content = this.props.content || fillerContent;
        const komment = `
        const contentRows = content.map( (rows=[], id)=> {
            console.log('Filler:', content)
            const renderableButtons = contentRows.map( (contentButton={}, id) => {
                
                return (
                    <View key={id} style={{ backgroundColor: 'red' }}>
                        {/* CircleLogo */}
                        <View></View>
                        {/* Button title */}
                        <Text style={{ fontSize: 50 }}> { contentButton.title || 'Tiitel' } </Text>
                    </View>
                )    
            });
            const rendereableRows = contentRows.map( (row, id) => {
                return (
                    <View key={ id } style={{ flex:1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        { renderableButtons }
                    </View>
                )
            })
            const renderableContent = (
                <View key={id} style={{ flexDirection: 'column' }}>
                    { rendereableRows }
                    <Text>Sisukas sisu</Text>
                </View>
            )
            return renderableContent;
        })
        `
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'blue' }}>
                {/* Header with nav button */}
                <View style={{ flex: 0.2, backgroundColor: 'red' }}>
                    <Text> { title || 'PuudubTitle'} </Text>
                </View>
                {/* Contents Container */}
                <View style={{ flex: 0.8, backgroundColor: 'green' }}>
                    { contentRenderable }
                </View>
            </View>
        )
    }
}

