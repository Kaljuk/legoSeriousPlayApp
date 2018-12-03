import React from 'react';
import { 
  StyleSheet, Text, View 
} from 'react-native';

import {
  Font
} from 'expo';

// Custom Components
import MainNavigator from './components/MainNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Ubuntu': require('./assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View>
        { 
          ( 
            this.state.fontLoaded && 
            <MainNavigator />
          ) || null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
