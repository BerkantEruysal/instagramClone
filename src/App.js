import React , {useState} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import Authorization from './screens/Authorization';




const App =  () => {
  const [değişkenim , setDeğişkenim] = useState(0)

  return (
    <View>
     <Authorization></Authorization>
      
    </View>
  );
};



export default App;
