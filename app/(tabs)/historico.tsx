import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getOcorrencias } from '../../lib/storage';
import { Ocorrencia } from '../../types/ocorrencia';

export default function Historico() {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);

  useEffect(() => {
    getOcorrencias().then(setOcorrencias);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Histórico</Text>
      <FlatList
        data={ocorrencias}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Local: {item.local}</Text>
            <Text>Duração: {item.duracao}</Text>
            <Text>Prejuízos: {item.prejuizos}</Text>
          </View>
        )}
      />
    </View>
  );
}
