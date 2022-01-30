import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Post() {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.userWrapper}>
          <Image
            style={styles.profileIcon}
            source={require('../assets/tempProfileIcon.png')}></Image>
          <Text style={styles.userName}>Name of person</Text>
        </View>
        <View style={styles.threeDotWrapper}>
          <Image
            style={styles.threeDot}
            source={require('../assets/threeDot.png')}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    height: 46,
    paddingHorizontal: 8,
  },
  profileIcon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginRight: 8,
  },
  threeDot: {
    width: 14,
    height: 3,
    alignSelf: 'center',
  },
  userName: {
    alignSelf: 'center',
    fontWeight: "bold",
    color : "#000000"
  },
  userWrapper: {
    flexDirection : "row" , flex : 1
  },
  threeDotWrapper : {
    justifyContent : "center", paddingHorizontal : 10
  }
});
