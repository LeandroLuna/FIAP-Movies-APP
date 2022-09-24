import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Card from './components/card';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.title} editable={false} value={'Filmes em alta'}></TextInput>
      <View style={styles.section}>
        <Card rating={10} posterUri={{ uri: 'https://www.themoviedb.org/t/p/w188_and_h282_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' }}></Card>
        <Card rating={6.8} posterUri={{ uri: 'https://www.themoviedb.org/t/p/w440_and_h660_face/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg' }}></Card>
      </View>
      <TextInput style={styles.title} editable={false} value={'Séries em alta'}></TextInput>
      <TextInput style={styles.title} editable={false} value={'Dramas'}></TextInput>
      {/* <StatusBar style='auto' hidden /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    borderColor: '#f06',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    paddingLeft: 4,
  },
  section: {
    flexDirection: 'row',
  },
});
