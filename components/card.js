import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function Card({ movie }) {
  const navigation = useNavigation();
  const { addFavorite } = useContext(FavoritesContext);
  const [favorite, setFavorite] = useState(false);
  const imgUri = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;

  function favoritar() {
    setFavorite(!favorite);
    addFavorite(movie);
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => favoritar()}>
          <MaterialIcons
            style={styles.favorite}
            name={favorite ? 'favorite' : 'favorite-border'}
            color={favorite ? 'red' : 'white'}
            size={20}
          ></MaterialIcons>
        </TouchableOpacity>
        <Image style={styles.poster} source={{ uri: imgUri }}></Image>
        <Text style={styles.vote}>
          <MaterialIcons name='star' color='gold' size={16}></MaterialIcons>
          {movie.vote_average.toFixed(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    height: 170,
    width: 100,
    backgroundColor: '#111',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
  },
  poster: {
    width: '100%',
    height: 141,
    borderRadius: 6,
  },
  vote: {
    color: '#fff',
    opacity: 0.8,
    margin: 6,
  },
  favorite: {
    position: 'absolute',
    zIndex: 1,
    right: 60,
    top: 5,
  },
});
