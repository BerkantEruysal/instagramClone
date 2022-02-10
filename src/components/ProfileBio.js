import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileBio() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.userName}>UserName</Text>
      <Text style={styles.bioText}>Bio text text aeheh ahsdh hasdh ahsd ahks dd hasdh ah ah hshhda ksd hs hkasdh </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper : {
        paddingHorizontal : 15,
        paddingTop : 7
    },
    userName : {
        fontWeight : "bold",
        color : "#000000"
    },
    bioText : {
        color : "#000000",
        fontWeight : "400"
    }
})