import { View, Text , StyleSheet } from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.wrapper}>
      <Text>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper : {
      height : "9%",
      backgroundColor : "red"
    }
})
