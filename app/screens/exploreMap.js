import  React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.1930380;
const LONGITUDE = 44.5044750;
const LATITUDE_DELTA = 0.002;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;



export default class Maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: LATITUDE,
				longitude: LONGITUDE,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA,
			},
			markers: [],
		};

		this.onMapPress = this.onMapPress.bind(this);
	}

	onMapPress(e) {
		this.setState({
			markers: [
				...this.state.markers,
				{
					coordinate: e.nativeEvent.coordinate,
					key: `issue${id++}`,
					description: 'this is a description	'
				},
			],
		});
	}

	render() {
		return (
      <View style={styles.container}>
        <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={this.onMapPress}
        >
          {this.state.markers.map(marker => (
            <Marker
              title={marker.description}
							draggable
              key={marker.key}
              coordinate={marker.coordinate}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            <Text>Tap To Report an Issue</Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

Maps.propTypes = {
	provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	bubble: {
		backgroundColor: 'rgba(255,255,255,0.7)',
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
	},
	latlng: {
		width: 200,
		alignItems: 'stretch',
	},
	button: {
		width: 80,
		paddingHorizontal: 12,
		alignItems: 'center',
		marginHorizontal: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginVertical: 20,
		backgroundColor: 'transparent',
	},
});
