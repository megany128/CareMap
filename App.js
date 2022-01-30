import Map from './src/screens/Map';
import AddMarker from './src/screens/AddMarker';
import PhoneNumber from "./src/screens/PhoneNumber";
import Otp from "./src/screens/Otp";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="PhoneNumber" component={PhoneNumber} options={{headerShown: false}}/>
        <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}}/> */}

        <Stack.Screen name="Map" component={Map} options={{headerShown: false}}/>
        <Stack.Screen name="Request Help" component={AddMarker}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}