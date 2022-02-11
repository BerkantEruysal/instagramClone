import { View, Text } from 'react-native';
import React from 'react';
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Comments from './Comments';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from './UserProfile';
import Footer from '../components/Footer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    const {isLoggedIn} = useSelector(state => state.User)

    const HomeStack = () => {
      return <Tab.Navigator tabBar={ props => <Footer {...props}> </Footer>}>
        <Tab.Screen name='Home' options={{headerShown: false}} component={Home}></Tab.Screen>
        <Tab.Screen name='UserProfile' options={{headerShown: false}} component={UserProfile}></Tab.Screen>
      </Tab.Navigator>
    }
  return (
    <NavigationContainer >
       {isLoggedIn ? 
       <>
       <Stack.Navigator >
         <Stack.Screen options={{headerShown: false}} name='HomeStack' component={HomeStack}></Stack.Screen>
         <Stack.Screen name='Comments' component={Comments}></Stack.Screen>
       </Stack.Navigator>
       
       </> : <>
       <Stack.Navigator>
         <Stack.Screen name='Authentication' options={{headerShown : false}} component={Authentication}></Stack.Screen>
       </Stack.Navigator>
       </>}
  </NavigationContainer>
  );
}
