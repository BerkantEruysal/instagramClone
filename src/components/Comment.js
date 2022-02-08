import {View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import React from 'react';
import ProfileImage from './ProfileImage';

export default function Comment({props}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.ProfileImageWrapper}>
        <ProfileImage
          activeStory = {false}
          isStoryWatched = {false}
          size={10}
          image={require('../assets/examplePostImage.png')}></ProfileImage>
      </View>
      <View style={styles.commentTextWrapper}>
        <Text>
          <Text style={styles.userName}>{props.userName}{" "}</Text>
          <Text style={styles.commentText}>{props.commentText}</Text>
        
        </Text>
        <View style={styles.details}>
          <Text>{props.timePassed}</Text>
          <Text>{props.numberOfLikes} likes</Text>
          <TouchableOpacity>
            <Text>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.likeButtonWrapper}>
        <TouchableOpacity>
          <Image style={styles.likeButton} source={require("../assets/heartIcon.png")}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection : "row",
  },
  userName : {
    fontWeight : "bold",
    color : "#000000",
    paddingRight : 10
  },
  ProfileImageWrapper : {
    marginRight : 15
  },
  commentTextWrapper : {
    width : "70%",
    alignSelf : "center"
  },
  commentText : {
    color : "#000000"
  },
  likeButtonWrapper : {
    flex : 1,
    justifyContent : "center",
  },
  likeButton : {
    width : 20,
    height : 20,
    opacity : 0.5,
    alignSelf : "center"
  },
  details : {
    flexDirection : "row",
    justifyContent : "space-between",
    width : "70%"
  }
});
