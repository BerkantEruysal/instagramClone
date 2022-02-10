import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ProfileImage from "../components/ProfileImage"

export default function UserFollowData(props) {
  return (
    <View style={styles.wrapper}>
      <ProfileImage size={20} image={require("../assets/tempProfileIcon.png")}></ProfileImage>
      <View>
          <Text style={styles.number}>0,000</Text>
          <Text style={styles.title}>Posts</Text>
      </View>
      <View>
          <Text style={styles.number}>0,000</Text>
          <Text style={styles.title}>Followers</Text>
      </View>
      <View>
          <Text style={styles.number}>0,000</Text>
          <Text style={styles.title}>Following</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        paddingLeft : 15,
        paddingRight : 50
    },
    number : {
        fontWeight  :"500",
        color : "#000000",
        fontSize : 18,
        textAlign : "center"
    },
    title : {
        color : "#000000",
        fontSize : 13,
        textAlign : "center"
    }
    
})