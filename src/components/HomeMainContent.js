import { View, Text, Button, ScrollView , styleSheet, FlatList } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';

export default function HomeMainContent() {
  const renderItem = ({item}) => {
    return (
      <Post></Post>
    );
  };
  return (
    <FlatList renderItem={renderItem} data={["a" , "b"]}>
      
    </FlatList>
  );
}
