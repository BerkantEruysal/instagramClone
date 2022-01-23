import { View, Text , Button , TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput><Text>denemeee</Text></TextInput>
      <TextInput><Text>İnput 2</Text></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        width : "80%" ,
        backgroundColor : "red",
        alignSelf : "center"
    }
})
