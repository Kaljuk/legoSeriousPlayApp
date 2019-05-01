import React from 'react';
import {
    View, ScrollView,
    TouchableOpacity,
    Text
} from 'react-native';

// EventButton
import EventButton from './EventButton';

import Icon from 'react-native-vector-icons/Octicons';
const MenuIcon = () => (
        <Icon 
            name='three-bars' 
            size={30} 
            color='#000' 
        />
);


export default class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          pathChosen: true,
          showContent: false,
  
          contentType: null,
          contentData: null
        }
        this.openNavigator = this.openNavigator.bind(this);
        console.log(props.navigation)
        this.selectContent = this.selectContent.bind(this);
        this.hideContent   = this.hideContent.bind(this);
    }

    selectContent(contentType, content) {
        console.log("Selected data", contentType, content)
        this.props.selectContent(contentType, content);
    }


    openNavigator() {
      console.log('Opening');
      if ((this.props.navigation || {}).navigate) {
        
        this.props.navigation.openDrawer() 
      }  
    }
  
    selectContent(contentType=null) {
      this.setState({ contentType: contentType, showContent: true });
    }
  
    showContent() {
      this.setState({ showContent: true });
    }
    hideContent() {
      this.setState({ showContent: false });
    }  
  

    render() {

        const callable = this.openNavigator || (() => console.log('SideMenuButton: Callable'));
        // Title of the current path
        const title = this.props.title || 'Personal';
        // Colors
        const mainColor = this.props.mainColor || '#88c9b3';
        const secondaryColor = this.props.secondaryColor || '#699a89';
        
        // Icon = picture on the content button, isNew: has the user clicked on it before?
        const rowOne = [{ title: 'Tut', icon: null, isNew: false }]
        const rowTwo = [{ title: 'Vid', icon: null, isNew: false }]        
        const rowThree = [{ title: 'Infographic', icon: null, isNew: true }, { title: 'Infographic', icon: null, isNew: true }]
        const rowFour = [{ title: 'Mind game', icon: null, isNew: true }, { title: 'Collab Game', icon: null, isNew: true }, { title: 'Practical Game', icon: null, isNew: true, contentType: 'questionGame' }]

        
        const fillerContent = [rowOne, rowTwo, rowThree, rowFour];

        const content = fillerContent;
        // console.log('Content', content);
        
        const pathElements = content.map( (elementRow=[], elementRowId) => {
            
            const elements = elementRow.map( (element={}, elementId) => {
                const contentTitle = (element.contentData && '*' || '')+element.title || 'Tiitel';

                return (
                    <EventButton 
                        key={ elementId } 
                        selectContent={ this.selectContent.bind(this) } 
                        contentColor={ secondaryColor }
                        
                        contentTitle={ contentTitle }
                        contentType ={ element.contentType }
                        contentData ={ element.content }
                    />
                )
                /*
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
                            <Text style={{  fontSize: 12, color: 'white' }} numberOfLines={1}> { contentTitle } </Text>
                        </View>
                    </TouchableOpacity>
                )
                */
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
            <View style={{marginTop: 35, marginLeft:25}}>
                <TouchableOpacity onPress={() => callable()}>
                    <MenuIcon />
                </TouchableOpacity>
            </View>
                <ScrollView>
                    {/* Header with nav button */}
                    <View style={{ 
                        flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', 
                        marginBottom: 10,
                        // ,backgroundColor: 'red'
                    }}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}> { (title || 'Core').toUpperCase() } </Text>
                    </View>
                    {/* Contents Container */}
                    <View style={{ 
                        //flex: 0.8 
                        paddingTop: 20,
                        paddingBottom: 20
                    }}>
                        { pathElements }
                    </View>
                </ScrollView>
            </View>
        )
    }
}
