import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import moment from 'moment'
import DropDownPicker from 'react-native-dropdown-picker';
import { TagSelect } from 'react-native-tag-select';
import * as Location from 'expo-location';

export default class AddMarker extends React.Component {
    state = {
        name: '',
        description: '',
        category: '',
      };

      constructor(props) {
        super(props);
        this.state = {
          latitude: 0,
          longitude: 0,
          address: '',
          error: null
        }
      }
    
       GetCurrentLocation = async () => {
        this.setState({
            locationRun: true
        })
        let { status } = await Location.requestForegroundPermissionsAsync();
      
        if (status !== 'granted') {
          Alert.alert(
            'Permission not granted',
            'Allow the app to use location service.',
            [{ text: 'OK' }],
            { cancelable: false }
          );
        }
      
        let { coords } = await Location.getCurrentPositionAsync();  
        if (coords) {
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude
          });
          this.setState({
            latitude: latitude,
            longitude: longitude
          })
      
          for (let item of response) {
            let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
            console.log(address)
            this.setState({
              address: address
            })
          }
        }
      };

      componentDidMount() {   
        console.log('get location')
        this.GetCurrentLocation()
        console.log('address:', this.state.address)
      }
      
    render() {
        console.log('a:',this.state.address)
        const data = [
            { id: 1, label: 'Household goods', color: '#47CACC'},
            { id: 2, label: 'Groceries', color: '#63BCC9' },
            { id: 3, label: 'Utilities', color: '#CDB3D4' },
            { id: 4, label: 'Children\'s needs', color: 'E7B7C8' },
            { id: 5, label: 'Other', color: '#FFBE88' },
          ];
          let color = '';
        return(
            <KeyboardAwareScrollView
            style={{ backgroundColor: 'white', padding: 30 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
            >
              <Text style={styles.title}>Add a Pin to the Map</Text>

              {/* <LocationView
                apiKey={"AIzaSyAnzhYFJDdQ1Xt8LcTQKHq524KnmX6P-_I"}
                initialLocation={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                }}
                /> */}
              <Text style={styles.heading}>What's your name?</Text> 
              <View style={[styles.inputView]}>
              <TextInput
                style={styles.inputText}
                placeholder="Full name"
                autoCorrect={true}
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                />
                </View> 
              <Text style={styles.heading}>What kind of help do you need?</Text>
                <View style={{paddingLeft:10, marginBottom: 10}}> 
                    <TagSelect
                        data={data}
                        ref={(tag) => {
                            this.tag = tag;
                        }}
                        onItemPress={(tag) => {
                            
                        }}
                        itemStyle={{backgroundColor: '#F5F5F5', borderRadius: 20}}
                        itemStyleSelected={{backgroundColor: '#63BCC9', borderColor: '#63BCC9'}}
                    />
                </View>

              <Text style={styles.heading}>Please add more details</Text>

              <TextInput
                style={styles.description}
                placeholder="Describe what kind of help you need"
                onChangeText={description => this.setState({ description })}
                multiline={true}
                maxLength={300}
                clearButtonMode='while-editing'
                value={this.state.description}
                />
                <Text style={styles.heading}>Location</Text>
                {this.state.address != '' ? 
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputText}
                    placeholder={this.state.address}
                    autoCorrect={true}
                    onChangeText={address => this.setState({ address })}
                    value={this.state.address}
                    />
                </View> 
                :
                <Text style={{marginLeft:10, fontStyle: 'italic'}}>loading address...</Text>}
                <TouchableHighlight
                style={styles.button}
                underlayColor="#63BCC9"
                onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableHighlight>
          </KeyboardAwareScrollView>
        )
    }
}
const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10,
      marginBottom: 20,
    },
    inputView: {
      width: "100%",
      backgroundColor: "white",
      borderRadius: 25,
      height: 60,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      marginLeft: 5
    },
    description: {
      width: "100%",
      backgroundColor: "white",
      borderRadius: 25,
      height: 150,
      marginBottom: 20,
      padding: 20,
      paddingTop: 20,
      justifyContent: "flex-start",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      alignSelf: 'center',
      marginLeft: 10
    },
    inputText: {
      color: "black",
    },
    dropdown: {
      height: 50,
      width: '100%',
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.2,
      shadowRadius: 3.84
    },
    button: {
      width: "50%",
      backgroundColor: "#CDB3D4",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 40,
      alignSelf: 'center',
    },
    buttonText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 17
    },
    heading: {
      marginLeft: 10,
      marginBottom: 20,
      fontSize: 15,
      color: '#4b4c4c',
      fontWeight: 'bold'
    }
  });