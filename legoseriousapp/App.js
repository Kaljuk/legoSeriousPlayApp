import React from 'react';
import { 
  StyleSheet, Text, View 
} from 'react-native';

import MainNavigator from './components/MainNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return < MainNavigator />
  }
}

