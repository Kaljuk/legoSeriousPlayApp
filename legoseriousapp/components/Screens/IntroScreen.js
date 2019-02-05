import React, { Component } from 'react';
import {
    View, 
    Text,
    Button,
    TouchableHighlight,

} from 'react-native';

import Swiper from 'react-native-swiper'


  class TitleText extends React.Component {
    render() {
      return (
        <Text style={{ fontSize: 48, color: 'white' }}>
          {this.props.label}
        </Text>
      )
    }
  }


export default class IntroScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (           
            <View >
            <Text>
            tere
            </Text>
            <Swiper
            loop={false}
            showsPagination={false}
            index={1}>
            <TitleText label="Left" />
            <Swiper
              horizontal={false}
              loop={false}
              showsPagination={false}
              index={1}>
              <View >
                <TitleText label="Top" />
              </View>
              <View>
                <TitleText label="Home" />
              </View>
              <View>
                <TitleText label="Bottom" />
              </View>
            </Swiper>        
            <View>
              <TitleText label="Right" />
            </View>
          </Swiper>
            </View>
        )
    }
}





