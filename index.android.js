<<<<<<< HEAD
import StartPage  from './lib/components/startScreen';
import Report from './lib/components/report';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  Navigator,
} from 'react-native';



class MyGa extends Component {

    render() {
      const routes = [
        {title: "Start Screne", index: 0},
        {title: "Map Screne", index: 1},
      ]
        return (
        <Navigator
          initialRoute  = {routes[0]}
          renderScene ={(route,  navigator) => {
            switch(route.index) {
              case 0:
                return <StartPage nextScene ={()  => navigator.push(routes[route.index  + 1])}/>
              case 1:
                return  <Report prevScene={() => navigator.pop()}/>
                }
          }}
        />
        )
    }
}



AppRegistry.registerComponent('MyGa', () => MyGa);
=======
import { AppRegistry } from 'react-native';
import App from './app/index';

AppRegistry.registerComponent('MyGa', () => App);
>>>>>>> refactoring
