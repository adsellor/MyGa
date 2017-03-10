import React, { Component } from  'react';

import  {
  View,
  Navigator,
  Text,
  Alert,
  StyleSheet
} from 'react-native';


export default class Navigation extends Component {
  render()  {
    return(
      <Navigator
        initialRoute={"/",{id: 'first'}}
        renderScene={this.navigatorRenderScene} />
    )
  }
  navigatorRenderScene(route, navigator)  {
    _navigator  = navigator;
    switch(route.id)  {
      case 'start':
        return(<StartPage navigator={navigator} title='start' />)
      case 'map ':
        return(<Map navigator={navigator} title ='map' />)
    }
  }
}
