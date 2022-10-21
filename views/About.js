import { StyleSheet, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o aplicativo</Text>
      <Text style={styles.text}>FIAP Filmes (versão mobile)</Text>
      <Text style={styles.personalInfo}>Nome: Leandro de Jesus Luna</Text>
      <Text style={styles.personalInfo}>RM: 86492</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 20,
  },
  personalInfo: {
    color: 'pink',
  },
});
