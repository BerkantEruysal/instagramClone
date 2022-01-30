import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';

export default function HomeMainContent() {
  return (
    <View>
      <Post></Post>
    </View>
  );
}
