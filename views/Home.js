import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import Title from '../components/Title';
import Header from '../components/Header';
import Constants from 'expo-constants';
import useAxios from 'axios-hooks';
import { API_KEY } from '@env';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function Home() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const [{ data, loading }] = useAxios(url);
  const { quantity } = useContext(FavoritesContext);

  if (loading) return <Text>Carregando filmes..</Text>;
  const movies = data.results;

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
        <Title text='Filmes em alta'></Title>

        <FlatList data={movies} renderItem={({ item }) => <Card movie={item}></Card>} horizontal></FlatList>

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.section}>
          <Card rating={10} posterUri={{ uri: 'https://www.themoviedb.org/t/p/w188_and_h282_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }}></Card>
          <Card rating={6.8} posterUri={{ uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg' }}></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView> */}
        <Title text='Séries em alta'></Title>
        <Title text='Dramas'></Title>
        <Title text={'Favoritos: ' + quantity}></Title>
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
