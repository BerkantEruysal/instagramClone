import React , {useState} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Authentication from './screens/Authentication';
import Home from "./screens/Home"




const App =  () => {

  return (
    <View>
     <Home></Home>
    </View>
  );
};


//This line of code is required in order to use EStyleSheet module.
EStyleSheet.build()


export default App;
