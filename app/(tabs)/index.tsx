import { View, Text } from 'react-native';
import RegistroForm from '../../components/RegistroForm';

export default function Index() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Registrar Ocorrência</Text>
      <RegistroForm />
    </View>
  );
}