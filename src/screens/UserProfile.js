import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function UserProfile() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.userNameWrapper}>
          <Text style={styles.userName}> UserName</Text>
          <Image source={require("../assets/dropIcon.png")} style={styles.dropIcon}></Image>
        </TouchableOpacity>

        <View style={styles.headerButtonWrapper}>
          <TouchableOpacity>
            <Image
              style={styles.headerButton}
              source={require('../assets/createContentIcon.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.headerButton}
              source={require('../assets/burgerIcon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  header: {
    flexDirection: 'row',
    marginTop : 10
  },
  userNameWrapper : {
      flex : 1,
      flexDirection : "row",
  },
  dropIcon : {
    width : 12 ,
    height : 7,
    alignSelf : "center",
    marginLeft : 10,
    marginBottom : 3,
    opacity : 0.5
  },
  userName: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,

  },
  headerButton: {
    width: 24,
    height: 24,
    marginHorizontal : 15
  },
  headerButtonWrapper : {
    flexDirection : "row",
    padding : 5
  }
});
