import { View, Text , Dimensions , StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import React from 'react';
import Story from './Story';

export default function Stories() {
  return (
    <View style={styles.wrapper}>
      <Story></Story>
      <Story></Story>
      <Story></Story>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper : {
        height : Dimensions.get("window").height * 12.8 / 100 ,
        borderBottomColor: 'rgba(38 , 38 , 38 , 0.6)',
        borderBottomWidth: 0.5,
        flexDirection : "row"


    }
})