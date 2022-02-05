import { View, Text , StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={require("../assets/homeIcon.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={require("../assets/searchIcon.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={require("../assets/reelsIcon.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={require("../assets/shopIcon.png")}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.footerIcon} source={require("../assets/tempProfileIcon.png")}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper : {
      height : "9%",
      flexDirection : "row",
      alignContent : "space-around",
      justifyContent : "space-around",
      paddingTop : 15,

    },
    footerIcon : {
      width : 24,
      height : 24,
     
     
    }
})
