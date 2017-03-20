import React, { Component } from  'react';
import Camera from 'react-native-camera';

  import {  Dimensions,
   StyleSheet,
   Text,
   TouchableHighlight,
   View,
   Image
} from 'react-native';

export default class Cam extends Component {
  render() {
    return (


      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>CAPTURE</Text>
        </Camera>

      </View>
    );
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#32BE0A',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  return: {
    flex: 0,
    padding: 5,
    margin: 10
  }
});
