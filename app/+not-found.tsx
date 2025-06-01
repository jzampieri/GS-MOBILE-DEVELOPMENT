import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>Página não encontrada</Text>
      <Text style={{ fontSize: 16, marginBottom: 20, textAlign: 'center' }}>
        Ops! Parece que a página que você tentou acessar não existe.
      </Text>
      <Button title="Voltar para o início" onPress={() => router.replace('/')} />
    </View>
  );
}