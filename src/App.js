import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Store from './redux/Store';
import {Provider} from 'react-redux';
import Navigation from './screens/Navigation';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation></Navigation>
      
    </Provider>
  );
};

//This line of code is required in order to use EStyleSheet module.
EStyleSheet.build();

export default App;
