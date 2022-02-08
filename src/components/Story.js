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
      <ProfileImage size={15} activeStory={true} isStoryWatched={props.isWatched} image={props.image}></ProfileImage>
      <Text style={{alignSelf: 'center'}}>{props.userName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  storyImage: {
    width: (screenHeight * 8) / 100,
    height: (screenHeight * 8) / 100,
    alignSelf: 'center',
  },
  storyBorderImage: {
    width: (screenHeight * 8) / 100 + 8,
    height: (screenHeight * 8) / 100 + 8,
    justifyContent: 'center',
  },
  wrapper: {
    marginTop: 6,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignContent: 'center',
    width: (screenHeight * 8) / 100 + 6,
  },
});
