import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Comment from '../components/Comment';
import {useSelector, useDispatch} from 'react-redux';
import {fetchComments} from '../api/PostsApi';
import {
  addToComments,
  resetCommentState,
  increasePage,
  setIdOfPost,
} from '../redux/slices/Comments';
import {useEffect} from 'react';
import CreateComment from '../components/CreateComment';
import InnerComments from '../components/InnerComments';

export default function Comments({route}) {
  const dispatch = useDispatch();
  const {commentList, page} = useSelector(state => state.Comments);

  const {accessToken} = useSelector(state => state.User);
  const renderItem = ({item}) => {
    
    return <>
    <Comment props={item}></Comment>
    <InnerComments replies={item.replies}></InnerComments> 
    </>
  };

  useEffect(() => {
    dispatch(setIdOfPost(route.params.postId));
    getMoreComments();
  }, []);
  const getMoreComments = () => {
    fetchComments(route.params.postId, accessToken, page, data => {
      dispatch(addToComments(data.results));
      dispatch(increasePage());
    });
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        style={styles.commentList}
        onEndReached={getMoreComments}
        data={commentList}
        renderItem={renderItem}></FlatList>
      <CreateComment></CreateComment>
    </View>
  );
}

const styles = StyleSheet.create({
  commentList: {},
});
