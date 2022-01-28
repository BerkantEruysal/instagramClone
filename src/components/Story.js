import { View, Text, Image , ImageBackground, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const screenHeight = Dimensions.get("window").height

export default function Story() {
  return (
    <View style={styles.wrapper}>
        <ImageBackground source={require("../assets/storyBorder.png")} style={styles.storyBorderImage}>
        <Image source={require("../assets/tempProfileIcon.png")} style={styles.storyImage}></Image>
        </ImageBackground>
        <Text style={{alignSelf : "center"}}>karenne</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    storyImage : {
        width : screenHeight * 8 / 100,
        height : screenHeight * 8 / 100,
        alignSelf : "center"
    },
    storyBorderImage : {
        width : screenHeight * 8 / 100 + 7,
        height : screenHeight * 8 / 100 + 7,
        justifyContent : "center"

    },
    wrapper : {
        marginTop : 6,
        marginHorizontal : 10,
        justifyContent : "center",
        alignContent : "center",
        width : screenHeight * 8 / 100 + 6,
      
        
    }

})