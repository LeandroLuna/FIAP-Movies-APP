import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ rating, posterUri }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View style={styles.card}>
        <Image style={styles.poster} source={posterUri}></Image>
        <Text style={styles.vote}>⭐️ {rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
});
