import React, { Component } from 'react';
import {
    View, 
    Text,
    Image, ImageBackground,
    StyleSheet,

    TouchableHighlight
} from 'react-native';


export default class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        let countdownOn = false;
        this.loaded = this.loaded.bind(this);
    }

    
    loaded() {
      console.log("ScreenID", this.props.navigation.testID)
      this.props.navigation.navigate('Home');
    }
    
    componentDidMount() {
      if (!this.countdownOn) {
        setTimeout(() => {
          this.loaded();
        }, 2500)
        this.countdownOn = true;
      }
    }

    render() {
      const imgURI = 'https://images-na.ssl-images-amazon.com/images/I/81z-khCwxQL.jpg';

      return (
        <View style={{ backgroundColor: '#d01012', height: "100%", width: "100%",flex: 1 }}>
          {/* <View style={{ position: 'absolute' }}></View> */}

          <View style={{ 
            width: "100%", //backgroundColor:'yellow', 
            alignItems: 'center', 
            marginTop: '35%' 
          }}>
            <ImageBackground style={{ width: 250, minHeight: 250 }}  source={{ uri: imgURI }}></ImageBackground>
          </View>

          <TouchableHighlight 
            style={{ 
              position:'absolute'/*, backgroundColor: 'yellow'*/, 
              height: "20%", width: '100%', 
              justifyContent: 'center', bottom: 0 
            }} 
            underlayColor={"#EF3340"}
            onPress={ () => this.loaded()}
            >
            <View style={{ opacity: 0.5, justifyContent: 'center'/*, backgroundColor: 'blue'*/ }}>
              <Text style={{ color: 'white', opacity: 1, fontSize: 15, textAlign: 'center' }}>Click to skip</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
}


const styles = StyleSheet.create({
    
})