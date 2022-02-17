import { View, Text } from 'react-native';
import React , {useState} from 'react';
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Comments from './Comments';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfile from './UserProfile';
import Footer from '../components/Footer';
import Loading from './Loading';
import Posts from "./Posts"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
    const {isLoggedIn} = useSelector(state => state.User)
    const [isLoading , setIsLoading] = useState(true)

    const ProfileStack = () => {
      return <Stack.Navigator>
        <Stack.Screen name='UserProfile' options={{headerShown: false}} component={UserProfile}></Stack.Screen>
        <Stack.Screen name='Posts' component={Posts}></Stack.Screen>
      </Stack.Navigator >
    }

    const HomeStack = () => {
      return <Tab.Navigator tabBar={ props => <Footer {...props}> </Footer>}>
        <Tab.Screen name='Home' options={{headerShown: false}} component={Home}></Tab.Screen>
        <Tab.Screen name='UserProfile' options={{headerShown: false}} component={ProfileStack}></Tab.Screen>
        
      </Tab.Navigator>
    }
  return (
    <>
    {isLoading ? <Loading setIsLoading={setIsLoading}></Loading> : <NavigationContainer >
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
  </NavigationContainer> }
    </>
  )
    
}
