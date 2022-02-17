import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postComment} from '../api/PostsApi';
import {addLoggedInUserComment, setIdOfReplyedComment, setUsernameOfReplyedComment} from '../redux/slices/Comments';
import {useEffect} from 'react';

export default function CreateComment() {
  const [isPostable, setIsPostable] = useState(false);
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();
  const {isAnyStory, profilePicture, username, accessToken} = useSelector(
    state => state.User,
  );
  const {idOfPost, idOfReplyedComment, replyButtonPressed , usernameOfReplyedComment} = useSelector(
    state => state.Comments,
  );
  const textInput = useRef();

  const postButtonHandler = () => {
    if (commentText != '') {
      postComment({
        accessToken,
        text: commentText,
        parent_unique_id: idOfReplyedComment,
        unique_id: idOfPost,
      });
      textInput.current.blur();
      textInput.current.clear();
      dispatch(
        addLoggedInUserComment({
          user: {
            username: username,
            profilePicture: profilePicture,
            isAnyStory: isAnyStory,
          },
          text: commentText,
          isLiked: false,
          idOfReplyedComment: idOfReplyedComment,
          createdDate: 'few seconds ago',
          idOfPost: idOfPost,
          likeCount: 0,
          repliesCount: 0,
          replies: [],
        }),
      );
    }
  };

  const cancelReplyingHandler = () => {
    dispatch(setIdOfReplyedComment(null))
    dispatch(setUsernameOfReplyedComment(null))
  }

  useEffect(() => {
    textInput.current.blur();
    textInput.current.focus();
    textInput.current.defaultValue = `@${usernameOfReplyedComment}`
  }, [replyButtonPressed]);

  return (
    <>
    {idOfReplyedComment != null ? <View
        style={styles.replyingCommentNotification}>
        <Text>Replying to {usernameOfReplyedComment}</Text>
        <TouchableOpacity onPress={cancelReplyingHandler}>
          <Text>x</Text>
        </TouchableOpacity>
      </View> : <></> }
      
      <KeyboardAvoidingView behavior="height" style={styles.wrapper}>
        <Image
          style={styles.profilePicture}
          source={{uri: profilePicture}}></Image>
        <TextInput
          ref={textInput}
          autoFocus
          onChangeText={text => {
            if (text != '') {
              setIsPostable(true);
              setCommentText(text);
              return;
            }
            setIsPostable(false);
          }}
          style={styles.textInput}
          placeholder="Add a comment"></TextInput>
        <TouchableOpacity onPress={postButtonHandler}>
          <Text
            style={isPostable ? styles.postTextActive : styles.postTextPassive}>
            Post
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderTopColor: 'rgba(0 , 0 , 0 , 0.3)',
    borderTopWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
  },
  profilePicture: {
    width: Dimensions.get('screen').width / 10,
    aspectRatio: 1,
    borderRadius: 25,
  },
  textInput: {
    width: '78%',
    marginLeft: 10,
  },
  postTextPassive: {
    color: 'rgba(55, 151, 239, 0.5)',
  },
  postTextActive: {
    color: 'rgba(55, 151, 239, 1)',
  },
  replyingCommentNotification : {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#C5C5C5',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Dimensions.get('screen').width / 9,
    marginBottom : 3
  }
});
