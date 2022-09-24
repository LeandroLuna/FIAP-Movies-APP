import { Image, View, Text, StyleSheet } from 'react-native';

export default function Card({ rating, posterUri }) {
  return (
    <View style={styles.card}>
      <Image style={styles.poster} source={posterUri}></Image>
      <Text style={styles.vote}>⭐️ {rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 170,
    width: 100,
    backgroundColor: '#111',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  poster: {
    width: 94,
    height: 141,
  },
  vote: {
    color: '#fff',
    opacity: 0.8,
    marginTop: 2,
  },
});
