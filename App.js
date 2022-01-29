import Map from './src/screens/Map';
import AddMarker from './src/screens/AddMarker';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Request Help" component={AddMarker} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}