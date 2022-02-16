import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ProfileImage from './ProfileImage';
import {useDispatch , useSelector} from 'react-redux';
import {changeIsCommentLikedState} from '../redux/slices/Comments';
import { likeComment } from '../api/PostsApi';

export default function Comment({props}) {
  const {accessToken} = useSelector(state => state.User)
  const dispatch = useDispatch();
  const likeCommentHandler = () => {
    dispatch(changeIsCommentLikedState(props.unique_id));
    likeComment(props.unique_id , accessToken)
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.ProfileImageWrapper}>
        <ProfileImage
          activeStory={props.user.isAnyStory}
          isStoryWatched={false}
          size={10}
          image={{uri: props.user.profilePicture}}></ProfileImage>
      </View>
      <View style={styles.commentTextWrapper}>
        <Text>
          <Text style={styles.userName}>{props.user.username} </Text>
          <Text style={styles.commentText}>{props.text}</Text>
        </Text>
        <View style={styles.details}>
          <Text>{props.createdDate}</Text>
          <Text>
            {props.likeCount > 1 ? (
              props.likeCount + ' likes'
            ) : props.likeCount == 0 ? (
              <></>
            ) : (
              props.likeCount + ' like'
            )}
          </Text>
          <TouchableOpacity>
            <Text>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.likeButtonWrapper}>
        <TouchableOpacity onPress={likeCommentHandler}>
          {props.isLiked ? (
            <Image
              style={styles.likeButton}
              source={require('../assets/filledHeartIcon.png')}></Image>
          ) : (
            <Image
              style={styles.likeButton}
              source={require('../assets/heartIcon.png')}></Image>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  userName: {
    fontWeight: 'bold',
    color: '#000000',
    paddingRight: 10,
  },
  ProfileImageWrapper: {
    marginRight: 15,
  },
  commentTextWrapper: {
    width: '70%',
    alignSelf: 'center',
  },
  commentText: {
    color: '#000000',
  },
  likeButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  likeButton: {
    width: 20,
    height: 20,
    opacity: 0.5,
    alignSelf: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
});
