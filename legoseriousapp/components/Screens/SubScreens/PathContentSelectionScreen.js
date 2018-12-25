
import React from 'react';
import {
    View,
    TouchableOpacity,

    Text
} from 'react-native';

// LazyLogging
const log = console.log;


export default class PathContentSelectionScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // Title of the current path
        const title = this.props.title || 'NoTitle';
        // Colors
        const mainColor = this.props.mainColor || '#4f4f94';
        const secondaryColor = this.props.secondaryColor || '#3d3d72';
        
        // Icon = picture on the content button, isNew: has the user clicked on it before?
        const rowOne = [{ title: 'Tutorial', icon: null, isNew: false }]
        const rowTwo = [{ title: 'Video', icon: null, isNew: false }]        
        const rowThree = [{ title: 'Infographic', icon: null, isNew: true }, { title: 'Infographic', icon: null, isNew: true }]
        const rowFour = [{ title: 'Mind game', icon: null, isNew: true }, { title: 'Collab Game', icon: null, isNew: true }, { title: 'Practical Game', icon: null, isNew: true }]
        
        const fillerContent = [rowOne, rowTwo, rowThree, rowFour];

        const content = this.props.content || fillerContent;
        // console.log('Content', content);
        
        const pathElements = content.map( (elementRow=[], elementRowId) => {
            
            const elements = elementRow.map( (element={}, elementId) => {
                return (
                    <TouchableOpacity  key={ elementId } style={{ 
                        height: 100,
                        width : 100,
                        marginHorizontal: 5,
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            height: 80,
                            width : 80,
                            borderRadius: 40,
                            backgroundColor: secondaryColor
                        }}></View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                            <Text style={{ fontFamily: 'Ubuntu', fontSize: 14, color: 'white' }} numberOfLines={1}> { element.title || 'Tiitel'} </Text>
                        </View>
                    </TouchableOpacity>
                )
            })

            return (
                <View key={elementRowId} style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 15
                }}>
                    { elements }
                </View>
            )
        })
        
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: mainColor }}>
                {/* Header with nav button */}
                <View style={{ 
                    flex: 0.18, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', 
                    paddingBottom: 10
                }}>
                    <Text style={{ fontFamily: 'Ubuntu', fontSize: 24, fontWeight: 'bold', color: 'white' }}> { (title || 'Core').toUpperCase() } </Text>
                </View>
                {/* Contents Container */}
                <View style={{ flex: 0.8 }}>
                    { pathElements }
                </View>
            </View>
        )
    }
}

