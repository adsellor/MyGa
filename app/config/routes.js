import React from 'react';
import {StackNavigator} from 'react-navigation';

import StartPage from '../screens/startScreen';
import Cam from '../screens/cam';
import Maps from '../screens/map';
import ReportForm  from '../screens/reportForm'

export  const ScreenStack = StackNavigator({
  StartScreen: {
    screen: StartPage,
    navigationOptions: {
      header: {
        visible: false,
      }
    },
    },
  CamScreen: {
    screen: Cam,
    navigationOptions: {
      animated: true,
      header: {
        visible: false,
      }
    },
  },
  MapScreen:  {
    screen: Maps,
    navigationOptions:  {
      title: 'Maps',
      animated: true,
      header: {
        style: {
          backgroundColor: '#32BE0A',

        }
      },
    }
  },
  ReportBox: {
    screen: ReportForm,
    navigationOptions:  {
      header:{
        visible: false,
      }
    }
  }
});
