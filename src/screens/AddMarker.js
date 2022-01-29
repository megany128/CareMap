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
//import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import { TagSelect } from 'react-native-tag-select';
import { SYSTEM_BRIGHTNESS } from 'expo-permissions';

export default class AddMarker extends React.Component {
    state = {
        name: '',
        category: '',
        color: ''
      };
      
    render() {
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

              <Text style={styles.heading}>What kind of help do you need?</Text>
                <View style={{paddingLeft:10, marginVertical: 10}}> 
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
                onChangeText={name => this.setState({ name })}
                multiline={true}
                maxLength={300}
                clearButtonMode='while-editing'
                value={this.state.name}
                />
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
      shadowRadius: 3.84
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
      marginVertical: 20,
      alignSelf: 'center',
    },
    buttonText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 17
    },
    heading: {
      marginLeft: 10,
      marginBottom: 10,
      fontSize: 15,
      color: '#4b4c4c',
      fontWeight: 'bold'
    }
  });