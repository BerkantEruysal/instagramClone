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
import { useSelector , useDispatch } from 'react-redux';
import { likePost } from '../api/PostsApi';
import ProfileImage from './ProfileImage';
import { resetCommentState } from '../redux/slices/Comments';

export default function Post({navigation , props}) {
  const {accessToken} = useSelector(state => state.User)
  const dispatch = useDispatch();
  const openCommentScreen = () => {
    dispatch(resetCommentState())
    navigation.navigate("Comments" , {postId : props.unique_id})
  }
  const likeHandler = () => {
    likePost(dispatch , props.unique_id , accessToken)
  }
  

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View style={styles.userWrapper}>
          <View style={styles.profileImageWrapper}>
          <ProfileImage size={7} isStoryWatched={false} activeStory={props.user.isAnyStory} isWatched={false} image={{uri : props.user.profilePicture}}></ProfileImage>
          </View>
          
          <Text style={styles.userName}>{props.user.username}</Text>
        </View>
        <View style={styles.threeDotWrapper}>
          <Image
            style={styles.threeDot}
            source={require('../assets/threeDot.png')}></Image>
        </View>
      </View>
      <View
        style={styles.postImage(props.ratio)}>
        <Image
          resizeMode="cover"
          resizeMethod="resize"
          style={styles.postImage(props.ratio)}
          source={{uri : props.postImage}}></Image>
      </View>
      <View style={styles.info}>
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonWrapperLeft}>

            <TouchableOpacity onPress={likeHandler}>
              {props.isLiked ? (
                <Image
                  style={styles.footerButton}
                  source={require('../assets/filledHeartIcon.png')}></Image>
              ) : (
                <Image
                  style={styles.footerButton}
                  source={require('../assets/heartIcon.png')}></Image>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => openCommentScreen()}>
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
        <Text style={styles.likeCounter}>{props.likeCount} Likes</Text>
        <View style={styles.postDescription}>
          <Text>
            <Text style={styles.userName}>{props.user.username} </Text>
            <Text style={styles.normalText}>{props.title}</Text>
            <Text>...more</Text>
          </Text>
          <View style={styles.addComment}>
            <Image
              style={styles.commentProfileIcon}
              source={props.loggedUserProfileIcon}></Image>
            <Text>Add comment...</Text>
          </View>
          <Text>{props.createdDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  headerWrapper: {
    flexDirection: 'row',
    height: 46,
    paddingHorizontal: 8,
  },
  profileImageWrapper: {
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
    alignContent : "center"
  },
  threeDotWrapper: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  postImage: (ratio) => {
    return {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width / ratio
    };
  },
  info: {
    padding: 13,
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
  likeCounter: {
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 7,
  },
  normalText: {
    color: '#000000',
  },
  addComment: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 3,
  },
  commentProfileIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
