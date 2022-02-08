import {View, FlatList} from 'react-native';
import React from 'react';
import Comment from '../components/Comment';
import { useSelector } from 'react-redux';



export default function Comments() {
  const DATA = useSelector(state => state.Comments)
  const renderItem = ({item}) => {
    return <Comment props={item}></Comment>
  }
  return <View>
      <FlatList data={DATA} renderItem={renderItem}>
      </FlatList>
  </View>;
}
