import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import useAxios from 'axios-hooks';
import { API_KEY } from '@env';

export default function Movies() {
  const moviesUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const [{ data, loading }] = useAxios(moviesUrl);
  if (loading) return <Text>Carregando filmes..</Text>;
  const movies = data.results;

  return <View>{<FlatList data={movies} initialNumToRender={7} renderItem={({ item }) => <Card media={item}></Card>} horizontal></FlatList>}</View>;
}
