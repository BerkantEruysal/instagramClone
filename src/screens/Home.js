import { View, Text , ScrollView } from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
import HomeMainContent from '../components/HomeMainContent';
import Stories from '../components/Stories';

export default function Home() {
  return (
    <ScrollView>
      <HomeHeader></HomeHeader>
      <Stories></Stories>
      <HomeMainContent></HomeMainContent>
      <Footer></Footer>
    </ScrollView>
  );
}
