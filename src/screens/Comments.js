import {View, FlatList , Text} from 'react-native';
import React from 'react';
import Comment from '../components/Comment';
import { useSelector , useDispatch } from 'react-redux';
import { fetchComments } from '../api/PostsApi';
import { addToComments, resetCommentState , increasePage } from '../redux/slices/Comments';
import { useEffect } from 'react';



export default function Comments({route}) {
  const dispatch = useDispatch()
  const {commentList , page } = useSelector(state => state.Comments)
  
  const {accessToken} = useSelector(state => state.User)
  const renderItem = ({item}) => {
    return <Comment props={item}></Comment>
  }

  useEffect(() => {
  
   
    getMoreComments()
  }, [])
  const getMoreComments = () => {
    fetchComments(route.params.postId , accessToken , page , (data) => {
      dispatch(addToComments(data))
    
      dispatch(increasePage())
    
    })
  }
  return <View>
      <FlatList
      onEndReached={getMoreComments}
      data={commentList} renderItem={renderItem}>
      </FlatList>
  </View>;
}
