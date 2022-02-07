import { View, Text } from 'react-native';
import React from 'react';
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const {isLoggedIn} = useSelector(state => state.User)
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Authentication" screenOptions={{headerShown : false}}>
       {isLoggedIn ? 
       <>
       <Stack.Screen name="Home" component={Home}></Stack.Screen>
      
       </> : 
       <>
        <Stack.Screen name="Authentication" component={Authentication}></Stack.Screen>
       </>} 
    </Stack.Navigator>
  </NavigationContainer>
  );
}
