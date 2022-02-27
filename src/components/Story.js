import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import ProfileImage from './ProfileImage';

const screenHeight = Dimensions.get('window').height;

export default function Story(props) {
  return (
    <View style={styles.wrapper}>
      <ProfileImage size={18} activeStory={true} isStoryWatched={props.isWatched} image={props.image}></ProfileImage>
      <Text style={{alignSelf: 'center', color : "#000000" , fontSize : 12}}>{props.userName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 6,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex : 1,
  },
});
