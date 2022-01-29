import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

const screenHeight = Dimensions.get('window').height;

export default function Story(props) {
  return (
    <View style={styles.wrapper}>
      {!props.isWatched ? (
        <ImageBackground style={[styles.storyBorderImage , {borderWidth : 1 , borderColor : "#808080" , borderRadius : 100}]}>
        <Image source={props.image} style={styles.storyImage}></Image>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('../assets/storyBorder.png')}
          style={styles.storyBorderImage}>
          <Image source={props.image} style={styles.storyImage}></Image>
        </ImageBackground>
      )}

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
