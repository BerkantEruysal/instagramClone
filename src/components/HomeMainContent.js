import {
  View,
  Text,
  Button,
  ScrollView,
  styleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';

const DATA = [
  {
    userName: 'berkanteruysall',
    profileIcon: require('../assets/tempProfileIcon.png'),
    postImage: require('../assets/examplePostImage.png'),
    numberOfLikes: 142,
    postImageWidth : 375,
    postImageHeight : 375,
    timePassed : "10 minutes",
    postDescription:
      'Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
  },
  {
    userName: 'sojiner',
    profileIcon: require('../assets/tempProfileIcon.png'),
    postImage: require('../assets/examplePostImage2.png'),
    postImageWidth : 375,
    postImageHeight : 468.75,
    timePassed : "3 hours",
    numberOfLikes: 56,
    postDescription:
      'Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
  },
]
export default function HomeMainContent() {
  const renderItem = ({item}) => {
    return <Post props={item}></Post>;
  };
  return (
    <FlatList
      renderItem={renderItem}
      data={DATA}></FlatList>
  );
}
