import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
//import firebase from 'firebase/compat/app';
//import { db } from '../config';
//let markersRef = db.ref('/markers');

export default class Map extends React.Component {

  state ={
     errorMessage: '',
     region: {},
     location: {},
     latitude: null,
     longitude: null
  }

  async componentDidMount() {
    this.addMarker(123, 3.12434932462, 101.683990, 'test', 'description')
    //this._getLocation();
  }

  /*_getLocation = async () => {
    console.log('getting location')
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.log('PERMISSION NOT GRANTED');

      this.setState({
        errorMessage: 'PERMISSION NOT GRANTED'
      })
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({location});
    console.log(location)

    /*Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({latitude, longitude}, () => console.log('state: ', this.state)),
      ( error) => console.log("error: ", error)
    )*/
    /*
    const location = await Location.getCurrentPositionAsync({})
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 5,
        longitudeDelta: 5
      },
    })*/

  setMapView() {
    //this.mapView.animateToRegion(this.state.region, 2000);
  }

  addMarker(userid,latitude,longitude,title,description){
    db.ref('/markers').push({
      userid: userid,
      latitude: latitude,
      longitude: longitude,
      title: title,
      description: description
    });
}

FloatingButtonEvent = () => {
  console.log('click')
  this.props.navigation.navigate('Request Help')
}

  render() {
    //const {location} = this.state.location
    //console.log(location)
    //if (location.coords.latitude) {
      return (
        <View style={styles.container}>
          <MapView style={styles.map}
          followUserLocation={true}
          showsUserLocation={true}
          initialRegion={{
          latitude: 3.116370,
          longitude: 101.686852,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
          }}>
            <Marker
              coordinate={{
                latitude: 3.12434932462,
                longitude: 101.683990,
              }}
              title='test'
              description='blah'
              //image={require('./assets/marker.png')}
            >
              <Image
                source={require('../assets/marker.png')}
                style={{width: 30, height: 30}}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
          <TouchableOpacity activeOpacity={0.5} onPress={this.FloatingButtonEvent} style={styles.TouchableOpacityStyle}>
              <Image source={require('../assets/addMarker.png')} style={styles.floatingButtonStyle}/>
          </TouchableOpacity>
        </View>
      );
    //}
    //console.log('latitude: ', latitude)
    //console.log('longitude: ', longitude)
    return ( 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>We need your permissions!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 25,
    height: 50, 
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    bottom: 50
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 80,
    height: 80
  }
});