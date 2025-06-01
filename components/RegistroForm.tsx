import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { saveOcorrencia } from '../lib/storage';

export default function RegistroForm() {
  const [local, setLocal] = useState('');
  const [duracao, setDuracao] = useState('');
  const [prejuizos, setPrejuizos] = useState('');

  const handleSubmit = async () => {
    if (!local || !duracao || !prejuizos) {
      Alert.alert('Preencha todos os campos');
      return;
    }
    await saveOcorrencia({ local, duracao, prejuizos });
    setLocal('');
    setDuracao('');
    setPrejuizos('');
    Alert.alert('Ocorrência registrada com sucesso!');
  };

  return (
    <View>
      <TextInput placeholder="Local" value={local} onChangeText={setLocal} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Duração" value={duracao} onChangeText={setDuracao} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
      <TextInput placeholder="Prejuízos" value={prejuizos} onChangeText={setPrejuizos} style={{ marginBottom: 10, borderWidth: 1, padding: 8 }} />
      <Button title="Registrar" onPress={handleSubmit} />
    </View>
  );
}