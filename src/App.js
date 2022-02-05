import React, {useState} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Store from './redux/Store';
import {Provider} from 'react-redux';
import Authentication from './screens/Authentication';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
        <View>
      <Provider store={Store}>
        <Home></Home>
      </Provider>
    </View>
    </NavigationContainer>
    
  );
};

//This line of code is required in order to use EStyleSheet module.
EStyleSheet.build();

export default App;
