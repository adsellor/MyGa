import React, { Component } from 'react';


import {  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';



export default class StartPage extends Component {
  constructor(props)  {
    super(props)
    };
		handleReportPress	=	() => {
 this.props.navigation.navigate('CamScreen');
  };
  handleExplorePress  = ()  => {
    this.props.navigation.navigate("MapScreen")
  }

    render() {

        return (

            <Image source={require('../assets/background.jpg')}
                  style={styles.backgroundImage}>
              <TouchableOpacity
                  onPress={this.handleReportPress}

                  style={styles.reportButton}

              >
                <Text style={styles.text}>    Report    </Text>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress= {this.handleExplorePress}
                  style={styles.lookButton}
                  >
                  <Text style={styles.text}>   Explore    </Text>
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
    marginTop: 50,
    height: 50,
    width: 180,
  },

lookButton: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2ecc71',
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
    borderColor: "#27ae60",
    borderWidth : 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
  }
});
