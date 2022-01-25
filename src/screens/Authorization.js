import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Login from '../components/Login';
export default function Authorization() {
  return (
    <View style={{paddingHorizontal : 20}}>
      <View style={{alignSelf: 'center', marginTop: 100, marginBottom: 20}}>
        <Image
          source={require('../assets/textLogo.png')}
          style={{width: 182, height: 55}}></Image>
      </View>
      <Login></Login>
      <View style={{flexDirection : "row", alignItems : "center" , paddingTop : 40 }}>
        <View style={{backgroundColor : "rgba(0,0,0,0.1)" , borderColor : "#ffffff" , height : 1 , flex : 1}}></View>
        <Text style={{paddingHorizontal : 20,  color : "rgba(0,0,0,0.4)"}}>OR</Text>
        <View style={{backgroundColor : "rgba(0,0,0,0.1)" , height : 1 , flex : 1}}></View>
      </View>
    </View>
  );
}
