import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';

const WithoutStory = ({props}) => {
  return (
    <>
      <Image style={styles.image(props.size)} source={props.image}></Image>
    </>
  );
};

const WithStoryRedBorder = ({props}) => {
  return (
    <>
      <ImageBackground
        style={styles.imageBackground(props.size)}
        source={require('../assets/storyBorder.png')}>
        <Image style={styles.image(props.size)} source={props.image}></Image>
      </ImageBackground>
    </>
  );
};

const WithStoryGreyBorder = ({props}) => {
  return (
    <>
      <View style={styles.greyStoryBorder(props.size)}>
        <Image style={styles.image(props.size)} source={props.image}></Image>
      </View>
    </>
  );
};

const StoryBorderHandler = ({props}) => {
  if (props.activeStory == false) {
    return <WithoutStory props={props}></WithoutStory>;
  } else if (props.isStoryWatched == false) {
    return <WithStoryRedBorder props={props}></WithStoryRedBorder>;
  }
  return <WithStoryGreyBorder props={props}></WithStoryGreyBorder>;
};

export default function ProfileImage(props) {
  return (
    <View style={styles.wrapper(props.size)}>
      <StoryBorderHandler props={props}></StoryBorderHandler>
    </View>
  );
}

const widhtOfDevice = Dimensions.get('screen').width;
const vw = number => {
  return (widhtOfDevice * number) / 100;
};

const styles = StyleSheet.create({
  wrapper: size => {
    return {
      width: vw(size) + 7,
      height: vw(size) + 7,
      alignItems : "center",
      justifyContent : "center"
    };
  },
  image: size => {
    return {
      width: vw(size),
      height: vw(size),
      borderRadius: vw(size) / 2,
    };
  },
  imageBackground: size => {
    return {
      width: vw(size) + 7,
      height: vw(size) + 7,
      alignItems : "center",
      justifyContent : "center"

    };
  },
  greyStoryBorder: size => {
    return {
      width: vw(size) + 7,
      height: vw(size) + 7,
      borderRadius: (vw(size) + 7) / 2,
      borderWidth: vw(0.3),
      borderColor: '#808080',
      alignItems : "center",
      justifyContent : "center"
    };
  },
});
