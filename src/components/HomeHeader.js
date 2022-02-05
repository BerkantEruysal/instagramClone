import {View, Text, StyleSheet, Image, TouchableOpacity , Dimensions} from 'react-native';
import React from 'react';

export default function HomeHeader() {
  return (
    <View style={styles.wrapper}>

      <View style={styles.instagramLogoWrapper}>
        <Image
          source={require('../assets/textLogo.png')}
          style={styles.instagramLogo}></Image>
      </View>
      <View style={styles.rightWrapper}>
        <TouchableOpacity>
          <Image source={require("../assets/createContentIcon.png")} style={styles.icon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/heartIcon.png")} style={styles.icon}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/dmIcon.png")} style={styles.icon}></Image>
        </TouchableOpacity>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    height: "6%",
    flexDirection : "row",
    padding: 12,

  },
  instagramLogo: {
    width: 105,
    height: 28,
 
  },
  
  instagramLogoWrapper : {
    alignSelf : "center",
    marginTop : 4,
    alignSelf : "center",
    flex : 1
    
  },
  
  rightWrapper : {
      flex : 1,
      flexDirection : "row",
      justifyContent : "flex-end"
  },
  icon : {
    width : 24,
    height : 24,
    marginHorizontal : 10
  }
});
