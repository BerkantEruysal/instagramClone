import { View, Text } from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import HomeMainContent from '../components/HomeMainContent';

export default function Home() {
  return (
    <View>
      <HomeHeader></HomeHeader>
      <HomeMainContent></HomeMainContent>
      <Footer></Footer>
    </View>
  );
}
