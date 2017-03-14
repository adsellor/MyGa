import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


export default class StartPage extends Component {


    render() {

        return (

            <Image source={require('../../assets/background.jpg')}
                  style={styles.backgroundImage}>
              <TouchableOpacity
                  onPress={this.props.nextScene}

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
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 200,
    height: 50,
    width: 180,
  },

lookButton: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#32BE0A',
  marginTop: 30,
  height: 50,
  width: 180,

},

  text: {
    color:  "white",
    letterSpacing: 2,
    fontFamily :  "Helvetica",
    fontSize: 20,
    fontWeight: "100",
    borderStyle: "solid",
    borderColor: "#32BE0A",
    borderWidth : 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  }
});
