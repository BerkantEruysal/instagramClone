import {
  View,
  Text,
  Button,
  ScrollView,
  styleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from './Post';


export default function HomeMainContent(props) {
  const DATA = useSelector( (state) => state.HomePosts)
  const renderItem = ({item}) => {
    return <Post navigation={props.navigation} props={item}></Post>;
  };
  return (
    
    <FlatList
      renderItem={renderItem}
      data={DATA}
      style={{height : "85%" }}
      ListHeaderComponent={props.header}></FlatList>
  );
}
