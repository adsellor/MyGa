import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

const { width, height } = Dimensions.get('window');




const ASPECT_RATIO = width / height;
const LATITUDE = 40.19303;
const LONGITUDE = 44.50447;
const LATITUDE_DELTA = 0.002;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export	default	class ReportMap extends Component {
	constructor(props) {
		super(props);

		this.state = {
			markerDraggable: {
				latitude: LATITUDE ,
				longitude: LONGITUDE,
			}
		};
	}

	render() {
		return (
      <View style={styles.container}>
        <MapView
					showsUserLocation={true}
					followUserLocation={true}
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
	latitude: LATITUDE,
	longitude: LONGITUDE,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
}}
        >
          <Marker
            coordinate={this.state.markerDraggable}
						onSelect={console.log('onSelect', arguments)}
						onDrag={console.log('onDrag', arguments)}
            onDragStart={console.log('onDragStart',	arguments)}
            onDragEnd={(e) => this.setState({ markerDraggable: e.nativeEvent.coordinate })}
            onPress={console.log('onPress', arguments)}
            draggable
          />


        </MapView>
      </View>
		);
	}
}



const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
});
