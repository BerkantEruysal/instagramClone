import {View, Text, Dimensions, StyleSheet, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';
import Story from './Story';
const DATA = [
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'berkant',
    isWatched: false,
  },
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'asdasd',
    isWatched: false,
  },
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'berkant',
    isWatched: false,
  },
  {
    
    image: require('../assets/tempProfileIcon.png'),
    userName: 'asdasd',
    isWatched: false,
  },
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'berkant',
    isWatched: false,
  },
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'asdasd',
    isWatched: true,
  },
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'berkant',
    isWatched: true,
  },
  {
    image: require('../assets/tempProfileIcon.png'),
    userName: 'asdasd',
    isWatched: true,
  }
  
];
export default function Stories() {
  const renderItem = ({item}) => {
    return (
      <Story
        image={item.image}
        userName={item.userName}
        isWatched={item.isWatched}></Story>
    );
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: (Dimensions.get('window').height * 12.8) / 100 + 5,
    borderBottomColor: 'rgba(38 , 38 , 38 , 0.2)',
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    paddingBottom : 5
  },
});
