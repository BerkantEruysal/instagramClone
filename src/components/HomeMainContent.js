import {
  View,
  Text,
  Button,
  ScrollView,
  styleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';
import {getHomePosts} from '../api/PostsApi';

const a = {
  commentCount: 0,
  createdDate: '17:47:24 14/02/2022',
  isLiked: false,
  likeCount: 0,
  modifiedDate: '17:47:24 14/02/2022',
  postImage: 'http://192.168.20.107:8000/Posts/download_vNEclJA.jpg',
  ratio: 1.7857142857142858,
  title: 'gaara',
  unique_id: '3rIL0bPCTod6R5offMxgDQWjTXRrQ7',
  user: {isAnyStory: false, username: 'deneme'},
};

export default function HomeMainContent(props) {
  const DATA = useSelector(state => state.HomePosts);
  const accessToken = useSelector(state => state.User.accessToken)
  
  const dispatch = useDispatch();
  useEffect(() => {
    getHomePosts(dispatch , DATA.page , accessToken);
  }, []);
  


  const renderItem = ({item}) => {
    return <Post navigation={props.navigation} props={item}></Post>;
  };
  return (
    <FlatList
    onEndReached={() => {
      getHomePosts(dispatch , DATA.page , accessToken)
     
    }}
      renderItem={renderItem}
      data={DATA.posts}
      ListHeaderComponent={props.header}></FlatList>
  );
}
