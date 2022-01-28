import React, {useState} from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Store from './redux/Store';
import {Provider} from 'react-redux';
import Authentication from './screens/Authentication';
import Home from './screens/Home';

const App = () => {
  return (
    <View>
      <Provider store={Store}>
        <Home></Home>
      </Provider>
    </View>
  );
};

//This line of code is required in order to use EStyleSheet module.
EStyleSheet.build();

export default App;
