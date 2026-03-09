import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titulo}>Não sobrou nada.</Text>
      <Text style={styles.subtitle}>Its Over 💀.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#747474',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  subtitle: {
    color: '#fff',
    fontSize: 15,
    alignItems: 'center'
  }
});
