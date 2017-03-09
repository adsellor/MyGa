

import React, { Component } from 'react';

import StartPage  from './lib/components/startScreen'

import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';



class MyGa extends Component {

    render() {
        return (
        <StartPage/>
        )
    }
}




AppRegistry.registerComponent('MyGa', () => MyGa);
