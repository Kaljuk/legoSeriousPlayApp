import { createAppContainer } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';

// Screens
import ProfileScreen from './Screens/ProfileScreen';
import IntroScreen from './Screens/IntroScreen';
import PathScreen from './Screens/PathScreen';

const MainDrawer = createDrawerNavigator({
  Intro: {
    screen: IntroScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Path: {
    screen: PathScreen
  }
}, {
  initialRouteName: 'Intro'
});

export default createAppContainer(MainDrawer);