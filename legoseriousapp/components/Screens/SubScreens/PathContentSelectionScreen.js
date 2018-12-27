
import React from 'react';
import {
    View, ScrollView,
    TouchableOpacity,

    Text
} from 'react-native';

// LazyLogging
const log = console.log;



export default class PathContentSelectionScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    selectContent(contentType, content) {
        console.log("Selected data", contentType, content)
        this.props.selectContent(contentType, content);
    }

    render() {
        // Title of the current path
        const title = this.props.title || 'NoTitle';
        // Colors
        const mainColor = this.props.mainColor || '#4f4f94';
        const secondaryColor = this.props.secondaryColor || '#3d3d72';
        
        // Icon = picture on the content button, isNew: has the user clicked on it before?
        const rowOne = [{ title: 'Tut', icon: null, isNew: false }]
        const rowTwo = [{ title: 'Vid', icon: null, isNew: false }]        
        const rowThree = [{ title: 'Infographic', icon: null, isNew: true }, { title: 'Infographic', icon: null, isNew: true }]
        const rowFour = [{ title: 'Mind game', icon: null, isNew: true }, { title: 'Collab Game', icon: null, isNew: true }, { title: 'Practical Game', icon: null, isNew: true, contentType: 'questionGame' }]

        
        const fillerContent = [rowOne, rowTwo, rowThree, rowFour, rowFour, rowFour];

        const content = this.props.content || fillerContent;
        // console.log('Content', content);
        
        const pathElements = content.map( (elementRow=[], elementRowId) => {
            
            const elements = elementRow.map( (element={}, elementId) => {
                const contentTitle = (element.contentData && '*' || '')+element.title || 'Tiitel';
                return (
                    <TouchableOpacity  key={ elementId } style={{ 
                        height: 100,
                        width : 100,
                        marginHorizontal: 5,
                        flexDirection: 'column',
                        alignItems: 'center'
                    }} onPress={ () => this.selectContent(element.contentType, element.content)}>
                        <View style={{
                            height: 80,
                            width : 80,
                            borderRadius: 40,
                            backgroundColor: secondaryColor
                        }}></View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
                            <Text style={{ fontFamily: 'Ubuntu', fontSize: 14, color: 'white' }} numberOfLines={1}> { contentTitle } </Text>
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
            <View style={{ 
                flex: 1, 
                flexDirection: 'column',
                backgroundColor: mainColor 
            }}>
                <ScrollView>
                    {/* Header with nav button */}
                    <View style={{ 
                        flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', 
                        paddingTop: 40,
                        paddingBottom: 20
                        // ,backgroundColor: 'red'
                    }}>
                        <Text style={{ fontFamily: 'Ubuntu', fontSize: 24, fontWeight: 'bold', color: 'white' }}> { (title || 'Core').toUpperCase() } </Text>
                    </View>
                    {/* Contents Container */}
                    <View style={{ 
                        //flex: 0.8 
                        paddingTop: 30,
                        paddingBottom: 50
                    }}>
                        { pathElements }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

