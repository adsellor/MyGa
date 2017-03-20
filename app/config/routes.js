import React from 'react';
import {StackNavigator} from 'react-navigation';

import StartPage from '../screens/startScreen'
import Cam from '../screens/cam';

export  const ScreenStack = StackNavigator({
  StartScreen: {
    screen: StartPage,
  },
  CamScreen: {
    screen: Cam,
  }
})
