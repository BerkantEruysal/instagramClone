import { View, Text , Dimensions, Image } from 'react-native';
import React from 'react';
import Login from '../components/Login';
export default function Authorization() {
  return (
    <View>
        <View style={{alignSelf : "center" ,  marginTop : 124 , marginBottom : 42 ,  }}>
        <Image source={require("../assets/textLogo.png")} style={{width : 182 , height : 55 }}></Image>
        </View>
        
      <Login></Login>
    </View>
  );
}
