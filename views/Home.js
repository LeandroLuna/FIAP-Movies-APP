import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Card from '../components/Card';
import Title from '../components/Title';
import Header from '../components/Header';
import Constants from 'expo-constants';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <Title text='Filmes em alta'></Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.section}>
          <Card rating={10} posterUri={{ uri: 'https://www.themoviedb.org/t/p/w188_and_h282_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }}></Card>
          <Card rating={6.8} posterUri={{ uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg' }}></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
        <Title text='Séries em alta'></Title>
        <Title text='Dramas'></Title>
      </View>
      {/* <StatusBar style='auto' hidden /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    paddingTop: Constants.statusBarHeight + 15,
  },
  section: {
    flexDirection: 'row',
    flexGrow: 0,
    marginVertical: 12,
  },
  content: {
    padding: 8,
  },
});
