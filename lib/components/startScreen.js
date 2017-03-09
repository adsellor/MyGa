import React, { Component } from 'react';

import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  PropTypes,
  Alert,
  TouchableOpacity
} from 'react-native';

export default class StartPage extends Component {
    render() {
        return (
            <Image source={require('../../assets/background.jpg')}
                  style={styles.backgroundImage}>
              <TouchableOpacity
                  style={styles.reportButton}

              >
                <Text style={styles.text}>    Report    </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.lookButton}
                  >
                  <Text style={styles.text}>   Explore   </Text>
              </TouchableOpacity>
            </Image>
        )
    }
}

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    opacity: 0.64,
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  reportButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 400,
    height: 50,
    width: 200,
  },

lookButton: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#32BE0A',
  marginTop: 50,
  height: 50,
  width: 200,

},

  text: {
    color:  "white",
    letterSpacing: 2,
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "100",
    borderStyle: "solid",
    borderColor: "#32BE0A",
    borderWidth : 2,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 36,
    paddingRight: 36,
  }
});
