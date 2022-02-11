import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function Footer({state, descriptors, navigation}) {
  const navigateHandler = ScreenName => {
    navigation.navigate(ScreenName);
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigateHandler('Home')}>
        {state.index == 0 ? (
          <Image
            style={styles.footerIcon}
            source={require('../assets/focusedHomeIcon.png')}></Image>
        ) : (
          <Image
            style={styles.footerIcon}
            source={require('../assets/homeIcon.png')}></Image>
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('../assets/searchIcon.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('../assets/reelsIcon.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('../assets/shopIcon.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateHandler('UserProfile')}>
        <Image
          style={
            state.index == 1
              ? [styles.profileIcon, styles.focusedIcon]
              : styles.profileIcon
          }
          source={require('../assets/tempProfileIcon.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '9%',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    paddingTop: 15,
  },
  footerIcon: {
    width: 24,
    height: 24,
    
  },
  profileIcon : {
    width: 24,
    height: 24,
    borderRadius : 12,
    
  },
  focusedIcon: {
    borderWidth : 2,
    borderColor : "#000000",
   
  },
});
