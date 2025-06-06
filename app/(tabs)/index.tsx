import { View, Text, StyleSheet } from 'react-native';
import RegistroForm from '../../components/RegistroForm';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Ocorrência</Text>
      <RegistroForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
});