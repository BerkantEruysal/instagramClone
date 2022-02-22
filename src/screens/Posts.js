import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../components/Post'

export default function Posts({route , navigation}) {
  const {postData} = useSelector(state => state.Profile)
  const {isAnyStory , username , profilePicture} = useSelector(state => state.User)
  console.log(postData)
  const renderItem = ({item}) => {
    return (
      <Post navigation={navigation} props={{...item , postImage : item.images , user : { isAnyStory , username , profilePicture}}}></Post>
    )
  }
  return (
    <View>
      <FlatList
      initialScrollIndex={route.params.index}
      renderItem={renderItem}
      keyExtractor={item => {
        return item.unique_id
      }
        
        }
      data={postData}></FlatList>
    </View>
  )
}