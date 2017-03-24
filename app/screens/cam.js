import React, { Component } from  'react';
import Camera from 'react-native-camera';
//import Database from '../config/database';
import {
    Dimensions,
   StyleSheet,
   Text,
   TouchableHighlight,
   View,
   Image
} from 'react-native';


export default class Cam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      }
    }
    this.camera = null;
}

  handleContinuePress  = ()  => {
    this.props.navigation.navigate("MapScreen")
  };


  async  takePicture() {
    if(this.camera){
    try {
        const cap_result = await this.camera.capture().then(
          data => this.setState({path: data.path})
        );
     } catch(e) {
      console.log(e);
      return;
    }
  };
}


  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={this.state.camera.aspect}
        captureTarget={this.state.camera.captureTarget}
        type={this.state.camera.type}
        flashMode={this.state.camera.flashMode}
        defaultTouchToFocus
        mirrorImage={false}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (

      <View>
            <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Text
          style={styles.continue}
          onPress={this.handleContinuePress}
        > Continue
      </Text>
        <Text
          style={styles.cancel}
          onPress={() => this.setState({
            path: null
           })}
        >Retake
        </Text>
      </View>

    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#000',
   },
   preview: {
     flex: 1,
     justifyContent: 'flex-end',
     alignItems: 'center',
     height: Dimensions.get('window').height,
     width: Dimensions.get('window').width
   },
   capture: {
     width: 70,
     height: 70,
     borderRadius: 35,
     borderWidth: 5,
     borderColor: '#FFF',
     marginBottom: 15,
   },
   cancel: {
     position: 'absolute',
     left: 20,
     top: 20,
     backgroundColor: 'transparent',
     color: '#FFF',
     fontWeight: '600',
     fontSize: 17,
   },
   continue:  {
     position: 'absolute',
     right: 20,
     top: 20,
     backgroundColor: 'transparent',
     color: '#FFF',
     fontWeight: '600',
     fontSize: 17,
   }
});
