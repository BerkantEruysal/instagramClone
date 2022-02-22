import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React from 'react';

export default function Story() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.queueBar}>
        <View></View>
      </View>
      <View style={styles.topSection}>
        <View style={styles.topNavigation}>
          <View style={styles.userCredentials}>
            <TouchableWithoutFeedback>
              <Image
                style={styles.profileIcon}
                source={require('../assets/tempProfileIcon.png')}></Image>
            </TouchableWithoutFeedback>

            <Text>username</Text>
          </View>
          <TouchableWithoutFeedback>
            <Image
              style={styles.closeButton}
              source={require('../assets/closeButton.png')}></Image>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.storyImageWrapper}>
          <ImageBackground
            style={styles.storyImage(1)}
            source={require('../assets/examplePostImage.png')}></ImageBackground>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.respondInputWrapper}>
          <View>
            <Image style={styles.camreIcon} source={require("../assets/cameraIcon.png")}></Image>
          </View>
          <TextInput
            placeholder="Send Message"
            placeholderTextColor={'#FFFFFF'}
            style={styles.respondInput}></TextInput>
        </View>
        <Image style={styles.dmIcon} source={require("../assets/dmIconWhite.png")}></Image>
        <Image style={styles.threeDot} source={require("../assets/threeDotWhite.png")}></Image>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const vw = size => {
  return (screenWidth * size) / 100;
};
const vh = size => {
  return (screenHeight * size) / 100;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#000000',
    height: vh(100),
  },
  topSection: {
    height: vh(85),
  },
  storyImage: ratio => {
    return {
      width: vw(100),
      aspectRatio: ratio,
    };
  },
  closeButton: {
    width: 18,
    height: 18,
  },
  topNavigation: {
    flexDirection: 'row',
    paddingHorizontal : 10
  },
  profileIcon: {
    width: vw(10),
    height: vw(10),
    marginRight: 10,
  },
  storyImageWrapper: {
    height: vh(70),
    alignContent: 'center',
    justifyContent: 'center',
  },
  userCredentials: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  respondInput: {
    
  },
  respondInputWrapper : {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: vw(30),
    width: vw(70),
    flexDirection : "row",
    alignItems : "center",
    paddingHorizontal : 5
    
  },
  camreIcon : {
    width : vw(10),
    height : vw(10)
  },
  bottomSection : {
    flexDirection : "row",
    padding : 10
  },
  dmIcon : {
    width : vw(8),
    height : vw(7),
    alignSelf : "center",
    marginHorizontal : 15
  },
  threeDot : {
    alignSelf : "center",
    width : vw(5),
    height : vw(1)
  },
  queueBar : {
    
  }
});
