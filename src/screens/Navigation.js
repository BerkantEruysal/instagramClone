import { View, Text } from 'react-native';
import React from 'react';
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Comments from './Comments';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const {isLoggedIn} = useSelector(state => state.User)
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Authentication" >
       {isLoggedIn ? 
       <>
       <Stack.Screen name="Home" component={Home} options={{headerShown : false}}></Stack.Screen>
       <Stack.Screen name="Comments" component={Comments}></Stack.Screen>
      
       </> : 
       <>
        <Stack.Screen name="Authentication" component={Authentication} options={{headerShown : false}}></Stack.Screen>
       </>} 
    </Stack.Navigator>
  </NavigationContainer>
  );
}
