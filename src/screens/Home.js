import { View, Text , ScrollView } from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import Stories from '../components/Stories';

export default function Home({navigation}) {
  return (
    <View style={{flex : 1}}>
      <HomeHeader></HomeHeader>
      <MainContent navigation={navigation} header={Stories}></MainContent>
      
    </View>
  );
}
