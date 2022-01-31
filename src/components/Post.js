import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Post({props}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.userWrapper}>
          <Image
            style={styles.profileIcon}
            source={props.profileIcon}></Image>
          <Text style={styles.userName}>{props.userName}</Text>
        </View>
        <View style={styles.threeDotWrapper}>
          <Image
            style={styles.threeDot}
            source={require('../assets/threeDot.png')}></Image>
        </View>
      </View>
      <View>
        <Image
          resizeMode="cover"
          resizeMethod="resize"
          style={styles.postImage(props.postImageWidth, props.postImageHeight)}
          source={props.postImage}></Image>
      </View>
      <View style={styles.info}>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonWrapperLeft}>
            <TouchableOpacity>
              <Image
                style={styles.footerButton}
                source={require('../assets/heartIcon.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.footerButton}
                source={require('../assets/commentIcon.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.footerButton}
                source={require('../assets/shareIcon.png')}></Image>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.footerButton}
              source={require('../assets/bookmarkIcon.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.likeCounter}>{props.numberOfLikes} Likes</Text>
        <View style={styles.postDescription}>
          <Text>
            <Text style={styles.userName}>{props.userName} </Text>
            <Text style={styles.normalText}>{props.postDescription}</Text>
            <Text>...more</Text>
          </Text>
          <View style={styles.addComment}>
            <Image style={styles.commentProfileIcon} source={props.profileIcon}></Image>
            <Text>Add comment...</Text>
          </View>
          <Text>{props.timePassed} ago</Text>
          
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    
  },
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
    fontWeight: 'bold',
    color: '#000000',
  },
  userWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  threeDotWrapper: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  postImage: (widthOfImage, heigthOfImage) => {
    return {
      width: Dimensions.get('window').width,
      height: (Dimensions.get('window').width * heigthOfImage) / widthOfImage,
      backgroundColor: 'blue',
    };
  },
  info : {
    padding : 13
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  footerButton: {
    width: 24,
    height: 24,
    marginRight: 14,
  },
  buttonWrapperLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  likeCounter : {
    fontWeight : "bold",
    color : "#000000",
    marginTop : 7 
  },
  normalText : {
    color : "#000000"
  },
  addComment : {
    flexDirection : "row",
    marginTop : 8,
    marginBottom : 3
  },
  commentProfileIcon : {
    width : 24,
    height : 24,
    marginRight : 10
  }
});
