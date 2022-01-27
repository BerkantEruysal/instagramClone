import {View, Text, StyleSheet, Image, TouchableOpacity , Dimensions} from 'react-native';
import React from 'react';

export default function HomeHeader() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.cameraLogoWrapper}>
        <Image
          source={require('../assets/cameraIcon.png')}
          style={styles.cameraLogo}></Image>
      </TouchableOpacity>
      <View style={styles.instagramLogoWrapper}>
        <Image
          source={require('../assets/textLogo.png')}
          style={styles.instagramLogo}></Image>
      </View>
      <View style={styles.rightWrapper}>
      <TouchableOpacity style={styles.igtvIconWrapper}>
        <Image
          source={require('../assets/igtvIcon.png')}
          style={styles.igtvIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dmIconWrapper}>
          <Image source={require("../assets/dmIcon.png")} style={styles.dmIcon}></Image>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: 45,
    borderBottomColor: 'rgba(38 , 38 , 38 , 0.6)',
    borderBottomWidth: 0.5,
    flexDirection : "row",
    padding: 12,

  },
  instagramLogo: {
    width: 105,
    height: 28,
 
  },
  cameraLogo: {
    width: 23.5,
    height : 22
  },
  igtvIcon: {
    width: 25,
    height : 28,
    
  },
  dmIcon : {
    width : 23,
    height : 20
  },
  instagramLogoWrapper : {
    alignSelf : "center",
    marginTop : 4,
    alignSelf : "center",
    flex : 1
    
  },
  cameraLogoWrapper : {
    alignSelf : "center",
    flex : 1
  },
  igtvIconWrapper : {
    alignSelf : "center",
   
  },
  dmIconWrapper : {
    alignSelf: "center",
    paddingLeft : 18
  },
  rightWrapper : {
      flex : 1,
      flexDirection : "row",
      justifyContent : "flex-end"
  }
});
