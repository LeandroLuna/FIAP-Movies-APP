import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Card from '../components/Card';
import Title from '../components/Title';
import Header from '../components/Header';
import Movies from '../components/Movies';
import Constants from 'expo-constants';
import TvShows from '../components/TvShows';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <Title text='Filmes em alta'></Title>
        <Movies></Movies>
        <Title text='Séries em alta'></Title>
        <TvShows></TvShows>
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
  content: {
    padding: 8,
  },
});
