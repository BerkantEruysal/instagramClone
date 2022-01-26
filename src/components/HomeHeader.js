import { View, Text , StyleSheet , Image } from 'react-native';
import React from 'react';

export default function HomeHeader() {
  return (
    <View style={styles.wrapper}>
        <Image source={require("../assets/cameraIcon.png")} style={styles.cameraLogo}></Image>
      <Image source={require("../assets/textLogo.png")} style={styles.instagramLogo}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper : {
        backgroundColor : "white",
        height : 35,
        borderBottomColor : "#262626",
        borderBottomWidth : 0.5,
        flexDirection : "row",
        padding : 12

    },
    instagramLogo : {
        width : 105,
        height : 28,
        alignSelf :"center",
        
    },
    cameraLogo : {
        alignSelf : "center",
        width : 23.5,
        height : 22
    }
})